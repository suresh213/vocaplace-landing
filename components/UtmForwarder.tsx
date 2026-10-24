'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export function getStoredAttribution(): string {
  if (typeof window === 'undefined') return '';
  try {
    const raw = sessionStorage.getItem('vocaplace_utm_params');
    if (!raw) return '';
    const parsed = JSON.parse(raw);
    const parts = Object.entries(parsed)
      .filter(([_, v]) => Boolean(v))
      .map(([k, v]) => `${k}=${v}`);
    return parts.length > 0 ? ` [${parts.join(' | ')}]` : '';
  } catch {
    return '';
  }
}

function ForwarderLogic() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.size === 0) return;

    // Save UTM and ad tracking parameters into sessionStorage
    try {
      const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
      const captured: Record<string, string> = {};
      utmKeys.forEach((key) => {
        const val = searchParams.get(key);
        if (val) captured[key] = val;
      });
      if (Object.keys(captured).length > 0) {
        sessionStorage.setItem('vocaplace_utm_params', JSON.stringify(captured));
      }
    } catch {
      // Ignore storage errors
    }

    // Wait a brief moment to ensure React has fully rendered all links
    const timeoutId = setTimeout(() => {
      const links = document.querySelectorAll('a[href^="http"], a[href^="/"]');
      links.forEach((el) => {
        const link = el as HTMLAnchorElement;
        try {
          const url = new URL(link.href, window.location.origin);
          searchParams.forEach((value, key) => {
            url.searchParams.set(key, value);
          });
          link.href = url.toString();
        } catch (e) {
          // Ignore invalid URLs
        }
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [searchParams]);

  return null;
}

export default function UtmForwarder() {
  return (
    <Suspense fallback={null}>
      <ForwarderLogic />
    </Suspense>
  );
}

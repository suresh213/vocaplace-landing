'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

function ForwarderLogic() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.size === 0) return;

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

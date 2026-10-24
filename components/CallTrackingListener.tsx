"use client";

import { useEffect } from 'react';
import { trackCallClick } from '../utils/trackCall';

/**
 * Global background listener that catches clicks on any `a[href^="tel:"]` link across the entire website.
 * Dispatches a non-blocking background Slack alert without interfering with the user's phone dialer.
 */
export default function CallTrackingListener() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      try {
        const target = (e.target as HTMLElement | null)?.closest('a[href^="tel:"]');
        if (target) {
          const source =
            target.getAttribute('data-call-source') ||
            target.getAttribute('aria-label') ||
            target.textContent?.trim() ||
            'Website Call Link';
          trackCallClick(source);
        }
      } catch {
        // Non-blocking
      }
    };

    document.addEventListener('click', handleClick, { passive: true });
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}

/**
 * Non-blocking utility to send a background Slack alert when a user clicks a call button or telephone link.
 * Uses navigator.sendBeacon or fetch with keepalive: true so that dialer launch or page transition is never delayed.
 */

let lastCallTimestamp = 0;

export function trackCallClick(source?: string) {
  try {
    const now = Date.now();
    // Prevent duplicate triggers if clicked repeatedly within 1.5 seconds
    if (now - lastCallTimestamp < 1500) {
      return;
    }
    lastCallTimestamp = now;

    const pageUrl = typeof window !== 'undefined' ? window.location.href : 'Website';
    const referrer = typeof document !== 'undefined' && document.referrer ? document.referrer : 'Direct';
    
    let device = 'Desktop';
    if (typeof navigator !== 'undefined') {
      const ua = navigator.userAgent;
      if (/Android/i.test(ua)) device = 'Mobile (Android)';
      else if (/iPhone|iPad|iPod/i.test(ua)) device = 'Mobile (iOS)';
      else if (/Mobile/i.test(ua)) device = 'Mobile';
    }

    const payload = JSON.stringify({
      phoneNumber: '+91 82401 27751',
      source: source || 'Call Button',
      pageUrl,
      referrer,
      device,
    });

    // Strategy 1: navigator.sendBeacon (ideal for fire-and-forget background analytics)
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([payload], { type: 'application/json' });
      const sent = navigator.sendBeacon('/api/lead/call', blob);
      if (sent) return;
    }

    // Strategy 2: fetch with keepalive so request completes even if browser navigates
    fetch('/api/lead/call', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload,
      keepalive: true,
    }).catch(() => {
      // Intentionally silent catch to ensure non-blocking UX
    });
  } catch {
    // Intentionally silent catch
  }
}

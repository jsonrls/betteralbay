'use client';

import { useEffect, useRef, useCallback } from 'react';

const hotlines = [
  // Official emergency hotlines published on https://albay.gov.ph/
  { icon: 'bi-exclamation-triangle-fill', label: 'OCD/RDRRMC', number: '0917 574 7880', tel: '09175747880' },
  { icon: 'bi-shield-fill', label: 'PNP Albay', number: '0998 598 5926', tel: '09985985926' },
  { icon: 'bi-fire', label: 'BFP Albay', number: '0919 992 5484', tel: '09199925484' },
  { icon: 'bi-heart-pulse-fill', label: 'Albay EMS', number: '0918 911 9911', tel: '09189119911' },
  { icon: 'bi-hospital', label: 'BRTTH HEMS', number: '(052) 732 5555', tel: '0527325555' },
  { icon: 'bi-cloud-drizzle-fill', label: 'PAGASA Albay', number: '(052) 481 4472', tel: '0524814472' },
];

export default function HotlineBar() {
  const itemsRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const isTabletOrBelow = useCallback(() => {
    return typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches;
  }, []);

  useEffect(() => {
    const container = itemsRef.current;
    if (!container) return;

    function buildMarquee() {
      if (!isTabletOrBelow() || trackRef.current || !container) return;
      const track = document.createElement('div');
      track.className = 'hotline-items-track';
      track.setAttribute('aria-label', 'Emergency contacts scrolling');

      const items = Array.from(container.children);
      while (container.firstChild) track.appendChild(container.firstChild);
      items.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        clone.setAttribute('aria-hidden', 'true');
        clone.setAttribute('tabindex', '-1');
        track.appendChild(clone);
      });
      container.appendChild(track);
      trackRef.current = track;
    }

    function destroyMarquee() {
      if (!trackRef.current || !container) return;
      const originals = Array.from(trackRef.current.children).slice(0, hotlines.length);
      while (container.firstChild) container.removeChild(container.firstChild);
      originals.forEach((item) => container.appendChild(item));
      trackRef.current = null;
    }

    function handleResize() {
      if (isTabletOrBelow()) buildMarquee();
      else destroyMarquee();
    }

    handleResize();
    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(handleResize, 150);
    };
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, [isTabletOrBelow]);

  return (
    <div className="hotline-bar">
      <div className="container">
        <div className="hotline-inner">
          <div className="hotline-items" ref={itemsRef}>
            {hotlines.map((h) => (
              <a key={h.tel} href={`tel:${h.tel}`} className="hotline-item">
                <i className={`bi ${h.icon}`} aria-hidden="true" />
                <span>
                  {h.label}: {h.number}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

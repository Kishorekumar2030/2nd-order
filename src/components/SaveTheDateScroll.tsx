import {useEffect, useRef, useState} from 'react';
import {motion} from 'motion/react';
import {CalendarPlus, Download} from 'lucide-react';
import {
  downloadIcsFile,
  getGoogleCalendarUrl,
  weddingConfig,
} from '../data/weddingData';

function getCountdown() {
  const target = new Date(weddingConfig.dateISO).getTime();
  const diff = Math.max(0, Math.floor((target - Date.now()) / 1000));
  return {
    days: Math.floor(diff / 86400),
    hours: Math.floor((diff % 86400) / 3600),
    minutes: Math.floor((diff % 3600) / 60),
    seconds: diff % 60,
  };
}

const DEFAULT_SCROLL_HEIGHT = 460;

export function SaveTheDateScroll() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [countdown, setCountdown] = useState(getCountdown);

  const rodRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef(0);
  const startHeightRef = useRef(0);
  const movedRef = useRef(false);

  const getMaxHeight = () => (contentRef.current?.scrollHeight || DEFAULT_SCROLL_HEIGHT) + 12;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isExpanded) return;
    const onResize = () => setScrollHeight(getMaxHeight());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isExpanded]);

  const toggleExpand = (next: boolean) => {
    setIsExpanded(next);
    setScrollHeight(next ? getMaxHeight() : 0);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    movedRef.current = false;
    startYRef.current = e.clientY;
    startHeightRef.current = scrollHeight;
    rodRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const delta = e.clientY - startYRef.current;
    if (Math.abs(delta) > 4) movedRef.current = true;
    const maxH = getMaxHeight();
    setScrollHeight(Math.max(0, Math.min(maxH, startHeightRef.current + delta)));
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (movedRef.current) {
      toggleExpand(scrollHeight > getMaxHeight() * 0.35);
    } else {
      toggleExpand(!isExpanded);
    }
  };

  const pad = (val: number) => String(val).padStart(2, '0');

  return (
    <section
      id="save-the-date"
      className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8"
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#982442]">
        Auspicious Moment
      </p>
      <h2 className="font-display mt-2 text-4xl font-medium tracking-wide text-[#2A1118] sm:text-5xl">
        Save the Date
      </h2>

      <div className="relative mx-auto mt-8 max-w-md select-none">
        {/* Scroll Rod + Rose-Pink Silk Ribbon & Tassel */}
        <div
          ref={rodRef}
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          aria-controls="save-the-date-scroll"
          aria-label={
            isExpanded
              ? 'Pull up to close Save the Date scroll'
              : 'Pull the ribbon tassel down to reveal Save the Date'
          }
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleExpand(!isExpanded);
            }
          }}
          className={`relative z-20 mx-auto flex h-4 w-full items-center justify-between rounded-full border border-[#D4A853]/80 px-0 shadow-[0_8px_22px_rgba(128,42,64,0.2)] touch-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#982442] ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            background: 'linear-gradient(180deg, #F6DFB0 0%, #D4A853 55%, #A77B34 100%)',
          }}
        >
          <span className="-ml-2 h-6 w-3 rounded-full border border-[#D4A853]/80 bg-gradient-to-b from-[#F8E7BF] to-[#B0833B] shadow-md" />
          <span className="-mr-2 h-6 w-3 rounded-full border border-[#D4A853]/80 bg-gradient-to-b from-[#F8E7BF] to-[#B0833B] shadow-md" />

          {/* Hanging Rose Ribbon & Wax Seal Tassel */}
          <span
            aria-hidden="true"
            className={`tassel-sway absolute left-1/2 top-3.5 flex flex-col items-center transition-opacity duration-300 ${
              scrollHeight > 14 ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
          >
            <span className="h-8 w-[3px] bg-gradient-to-b from-[#D4A853] to-[#B84060]" />
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#F5DFB0] bg-gradient-to-br from-[#C44466] to-[#8C1D3A] shadow">
              <span className="h-2 w-2 rounded-full bg-[#F6DFB0]" />
            </span>
            <span className="mt-0.5 h-9 w-5 rounded-t-sm rounded-b-lg bg-gradient-to-b from-[#D96B89] via-[#A6344C] to-[#74182F] shadow-[0_6px_14px_rgba(116,24,47,0.34)]" />
          </span>
        </div>

        {/* Unrolling Parchment Scroll with Parting Pink Silk Curtains */}
        <div
          id="save-the-date-scroll"
          className="relative -mt-2 overflow-hidden pt-2"
          style={{
            height: `${scrollHeight}px`,
            transition: isDragging ? 'none' : 'height 0.62s cubic-bezier(0.28, 1.18, 0.42, 1)',
          }}
        >
          <div
            ref={contentRef}
            className="ivory-paper-surface relative mx-3 overflow-hidden rounded-b-2xl border border-t-0 border-[#DF9EAD] px-5 pb-7 pt-8 shadow-[0_22px_50px_rgba(128,42,64,0.16)] sm:px-7"
          >
            {/* Mini Pink Silk Curtains that part as scroll unrolls */}
            <motion.div
              aria-hidden="true"
              className="mini-curtain-left pointer-events-none absolute inset-y-0 left-0 z-10 w-1/2 border-r border-[#C5964A]/40"
              animate={{x: isExpanded ? '-102%' : '0%'}}
              transition={{duration: 0.68, ease: [0.65, 0, 0.35, 1]}}
            />
            <motion.div
              aria-hidden="true"
              className="mini-curtain-right pointer-events-none absolute inset-y-0 right-0 z-10 w-1/2 border-l border-[#C5964A]/40"
              animate={{x: isExpanded ? '102%' : '0%'}}
              transition={{duration: 0.68, ease: [0.65, 0, 0.35, 1]}}
            />

            <div className="font-display text-6xl font-medium leading-none text-[#982442] sm:text-7xl tabular-nums">
              {weddingConfig.dateDisplayDay}
            </div>
            <div className="font-display mt-1 text-3xl italic text-[#2A1118]">
              {weddingConfig.dateDisplayMonth}{' '}
              <span className="not-italic text-[#6B3948]">{weddingConfig.dateDisplayYear}</span>
            </div>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-[#982442]">
              {weddingConfig.dateLine}
            </p>
            <p className="mt-1.5 text-sm text-[#522734]">{weddingConfig.summaryLine}</p>

            <div
              aria-label="Countdown to the wedding"
              className="mt-6 grid grid-cols-4 gap-2 sm:gap-3"
            >
              {[
                {label: 'Days', value: String(countdown.days)},
                {label: 'Hours', value: pad(countdown.hours)},
                {label: 'Minutes', value: pad(countdown.minutes)},
                {label: 'Seconds', value: pad(countdown.seconds)},
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#DF9EAD] bg-white/95 px-1 py-3 shadow-[0_4px_12px_rgba(128,42,64,0.08)]"
                >
                  <div className="font-display text-2xl font-semibold leading-none tabular-nums text-[#2A1118] sm:text-3xl">
                    {item.value}
                  </div>
                  <div className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#6B3948]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#D4A853]/55 bg-[#982442] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-white shadow-[0_6px_16px_rgba(152,36,66,0.22)] transition-colors hover:bg-[#7D1A34] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#982442]"
              >
                <CalendarPlus className="h-4 w-4 text-[#F6DFAF]" aria-hidden="true" />
                <span>Add to Calendar</span>
              </a>

              <button
                type="button"
                onClick={() => downloadIcsFile()}
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border border-[#CC7B90] bg-white px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-[#982442] transition-colors hover:border-[#982442] hover:bg-[#FCE8EE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#982442]"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                <span>.ICS</span>
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => toggleExpand(!isExpanded)}
          className={`min-h-[44px] cursor-pointer px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#6B3948] transition-colors hover:text-[#982442] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#982442] ${
            isExpanded ? 'mt-4' : 'mt-24'
          }`}
        >
          {isExpanded ? '↑ Pull up to seal scroll' : '↓ Pull ribbon tassel to open'}
        </button>
      </div>
    </section>
  );
}

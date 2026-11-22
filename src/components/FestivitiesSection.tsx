import {useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {ChevronDown, Eye, MapPin, Sparkles, X} from 'lucide-react';
import {weddingConfig, type WeddingEvent} from '../data/weddingData';

interface EventCardProps {
  event: WeddingEvent;
  isActive?: boolean;
  isUnfolded: boolean;
  onToggleFold: (id: string) => void;
  onSelectPhoto: (event: WeddingEvent) => void;
}

function EventCard({
  event,
  isActive,
  isUnfolded,
  onToggleFold,
  onSelectPhoto,
}: EventCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-[#FFF8FA] text-center transition-all duration-300 ${
        isUnfolded
          ? 'border-[#C45372] shadow-[0_22px_48px_rgba(128,42,64,0.18)]'
          : 'border-[#DF9EAD] shadow-[0_14px_34px_rgba(128,42,64,0.12)] hover:border-[#C45372]'
      } ${isActive === false ? 'scale-[0.94] opacity-75 md:scale-100 md:opacity-100' : 'scale-100 opacity-100'}`}
    >
      {/* Photo Cover with mini ribbon top corner & view affordance */}
      <button
        type="button"
        onClick={() => onSelectPhoto(event)}
        aria-label={`View ${event.name} photo`}
        className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden border-b border-[#DF9EAD]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#982442]"
      >
        {imgError ? (
          <div
            className="flex h-full w-full items-center justify-center p-4"
            style={{background: event.headerGradient}}
          >
            <span className="font-display text-2xl italic text-[#982442]">{event.name}</span>
          </div>
        ) : (
          <img
            src={event.image}
            alt={event.name}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2A1118]/40 via-transparent to-transparent"
        />
        <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/80 bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#7D1A34] shadow-sm backdrop-blur-sm">
          <Eye className="h-3 w-3" aria-hidden="true" />
          Photo
        </span>
      </button>

      {/* Card Body + Ribbon-Tied & Curtain-Opening Details Drawer */}
      <div className="ivory-paper-surface flex flex-1 flex-col justify-between px-5 pb-5 pt-5">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#982442]">
            {event.when}
          </p>
          <h3 className="font-display mt-1.5 text-3xl font-medium text-[#2A1118]">
            {event.name}
          </h3>
        </div>

        {/* Clickable Rose Ribbon & Wax Seal Clasp */}
        <div className="mt-4">
          <button
            type="button"
            onClick={() => onToggleFold(event.id)}
            aria-expanded={isUnfolded}
            className={`relative flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border px-3.5 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#982442] ${
              isUnfolded
                ? 'border-[#C45372]/70 bg-[#FCE4EB] text-[#7D1A34]'
                : 'border-[#DF9EAD] bg-gradient-to-r from-[#FCE8EE] via-[#FFF6F8] to-[#FCE8EE] text-[#982442] hover:border-[#C45372]'
            }`}
          >
            {/* Subtle horizontal ribbon sheen */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#D96B89]/35 via-[#C5964A]/45 to-[#D96B89]/35"
            />
            <span className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 shadow-sm">
              <Sparkles className="h-3 w-3 text-[#C5964A]" aria-hidden="true" />
              <span>{isUnfolded ? 'Seal Card' : 'Untie Ribbon'}</span>
              <motion.span
                animate={{rotate: isUnfolded ? 180 : 0}}
                transition={{duration: 0.28}}
                className="inline-flex"
              >
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </motion.span>
            </span>
          </button>
        </div>

        {/* Curtain-Opening Inner Keepsake Panel */}
        <AnimatePresence initial={false}>
          {isUnfolded && (
            <motion.div
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: 'auto'}}
              exit={{opacity: 0, height: 0}}
              transition={{duration: 0.4, ease: [0.22, 1, 0.36, 1]}}
              className="overflow-hidden"
            >
              <div className="relative mt-4 overflow-hidden rounded-xl border border-[#DF9EAD] bg-white/95 p-4 text-center shadow-[inset_0_0_18px_rgba(244,196,210,0.3)]">
                {/* Parting Mini Pink Silk Curtains */}
                <motion.div
                  aria-hidden="true"
                  className="mini-curtain-left pointer-events-none absolute inset-y-0 left-0 z-10 w-1/2 border-r border-[#C5964A]/40"
                  initial={{x: '0%'}}
                  animate={{x: '-102%'}}
                  exit={{x: '0%'}}
                  transition={{duration: 0.58, ease: [0.65, 0, 0.35, 1]}}
                />
                <motion.div
                  aria-hidden="true"
                  className="mini-curtain-right pointer-events-none absolute inset-y-0 right-0 z-10 w-1/2 border-l border-[#C5964A]/40"
                  initial={{x: '0%'}}
                  animate={{x: '102%'}}
                  exit={{x: '0%'}}
                  transition={{duration: 0.58, ease: [0.65, 0, 0.35, 1]}}
                />

                <p className="text-xs leading-relaxed text-[#522734]">{event.highlightNote}</p>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium text-[#2A1118]">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-[#B03554]" aria-hidden="true" />
                  <span>{event.place}</span>
                </div>

                <div className="mt-3 border-t border-[#DF9EAD]/75 pt-3">
                  <div className="flex items-center justify-center gap-2 text-xs text-[#6B3948]">
                    <span
                      aria-hidden="true"
                      className="h-3 w-3 shrink-0 rounded-sm border border-[#2A1118]/25"
                      style={{backgroundColor: event.swatch}}
                    />
                    <span>
                      Attire · <span className="font-medium text-[#2A1118]">{event.dress}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}

export function FestivitiesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<WeddingEvent | null>(null);
  const [modalImgError, setModalImgError] = useState(false);
  const [unfoldedIds, setUnfoldedIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let closestIdx = 0;
      let minDist = Infinity;
      Array.from(el.children).forEach((child, idx) => {
        const node = child as HTMLElement;
        const dist = Math.abs(node.offsetLeft + node.offsetWidth / 2 - center);
        if (dist < minDist) {
          minDist = dist;
          closestIdx = idx;
        }
      });
      setActiveIdx(closestIdx);
    };

    el.addEventListener('scroll', onScroll, {passive: true});
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!selectedEvent) return;
    setModalImgError(false);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedEvent(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedEvent]);

  const scrollToCard = (idx: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const target = el.children[idx] as HTMLElement | undefined;
    if (target) {
      el.scrollTo({
        left: target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2,
        behavior: 'smooth',
      });
    }
  };

  const toggleFold = (id: string) => {
    setUnfoldedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="festivities"
      className="mx-auto max-w-6xl py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="px-4 text-center sm:px-0">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#982442]">
          Celebrations &amp; Gatherings
        </p>
        <h2 className="font-display mt-2 text-4xl font-medium tracking-wide text-[#2A1118] sm:text-5xl">
          Wedding Festivities
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-[#5E303E]">
          Tap the ribbon clasp on any ceremony card to part the curtains and reveal its details.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="mt-10 hidden items-start gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
        {weddingConfig.events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            isUnfolded={!!unfoldedIds[event.id]}
            onToggleFold={toggleFold}
            onSelectPhoto={setSelectedEvent}
          />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="mt-8 md:hidden">
        <div
          ref={carouselRef}
          className="no-scrollbar flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-[calc(50%-144px)] py-4"
        >
          {weddingConfig.events.map((event, idx) => (
            <div key={event.id} className="w-[288px] shrink-0 snap-center">
              <EventCard
                event={event}
                isActive={idx === activeIdx}
                isUnfolded={!!unfoldedIds[event.id]}
                onToggleFold={toggleFold}
                onSelectPhoto={setSelectedEvent}
              />
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-center gap-2">
          {weddingConfig.events.map((event, idx) => (
            <button
              key={event.id}
              type="button"
              onClick={() => scrollToCard(idx)}
              aria-label={`View ${event.name}`}
              className="flex h-7 w-7 cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#982442]"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  idx === activeIdx ? 'w-5 bg-[#982442]' : 'w-2 bg-[#CC7B90]/65'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Event Photo */}
      {selectedEvent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedEvent.name} photo`}
          onClick={() => setSelectedEvent(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2A1118]/72 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="ivory-paper-surface relative w-full max-w-xl overflow-hidden rounded-2xl border border-[#DF9EAD] shadow-[0_32px_80px_rgba(42,17,24,0.42)]"
          >
            <button
              type="button"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close photo preview"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#DF9EAD] bg-white/90 text-[#2A1118] shadow transition-colors hover:bg-[#982442] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#982442]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-[4/3] w-full bg-[#FCE8EE]">
              {modalImgError ? (
                <div
                  className="flex h-full w-full items-center justify-center"
                  style={{background: selectedEvent.headerGradient}}
                >
                  <span className="font-display text-3xl italic text-[#982442]">
                    {selectedEvent.name}
                  </span>
                </div>
              ) : (
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.name}
                  referrerPolicy="no-referrer"
                  onError={() => setModalImgError(true)}
                  className="h-full w-full object-cover"
                />
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FFF8FA] via-transparent to-transparent"
              />
            </div>

            <div className="px-6 pb-6 pt-3 text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#982442]">
                {selectedEvent.when}
              </p>
              <h3 className="font-display mt-1 text-3xl font-medium text-[#2A1118]">
                {selectedEvent.name}
              </h3>
              <p className="mt-1.5 text-sm text-[#522734]">{selectedEvent.place}</p>
              <div className="mt-4 flex items-center justify-center gap-2 border-t border-[#DF9EAD]/80 pt-3 text-xs text-[#6B3948]">
                <span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-sm border border-[#2A1118]/25"
                  style={{backgroundColor: selectedEvent.swatch}}
                />
                <span>
                  Attire · <span className="font-medium text-[#2A1118]">{selectedEvent.dress}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {MailOpen, Sparkles} from 'lucide-react';
import {weddingConfig} from '../data/weddingData';

function FloralToran() {
  const garlandPoints = [70, 140, 210, 280, 350, 420, 490, 560, 630];

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden pt-2">
      <svg
        viewBox="0 0 700 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="toranGoldBlush" x1="0" y1="0" x2="700" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C89B54" />
            <stop offset="50%" stopColor="#E6C37E" />
            <stop offset="100%" stopColor="#C89B54" />
          </linearGradient>
          <linearGradient id="toranLeafSage" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C9E6B" />
            <stop offset="100%" stopColor="#527245" />
          </linearGradient>
        </defs>

        <path
          d="M12 12 Q180 34 350 18 Q520 34 688 12"
          stroke="url(#toranGoldBlush)"
          strokeWidth="2.2"
          fill="none"
        />

        {garlandPoints.map((x, idx) => (
          <g key={idx}>
            <path
              d={`M ${x - 24} 16 C ${x - 30} 36 ${x - 20} 50 ${x - 16} 56 C ${x - 10} 44 ${x - 14} 28 ${x - 24} 16 Z`}
              fill="url(#toranLeafSage)"
              stroke="#C5964A"
              strokeOpacity="0.45"
              strokeWidth="0.7"
            />
            <path
              d={`M ${x + 24} 16 C ${x + 30} 36 ${x + 20} 50 ${x + 16} 56 C ${x + 10} 44 ${x + 14} 28 ${x + 24} 16 Z`}
              fill="url(#toranLeafSage)"
              stroke="#C5964A"
              strokeOpacity="0.45"
              strokeWidth="0.7"
            />
            <circle cx={x} cy={35} r="8.5" fill="#D9728C" stroke="#C5964A" strokeWidth="1.1" />
            <circle cx={x} cy={35} r="4.2" fill="#FFF7F8" />
            <line
              x1={x}
              y1={43}
              x2={x}
              y2={62}
              stroke="#C5964A"
              strokeOpacity="0.85"
              strokeWidth="1.2"
            />
            <circle cx={x} cy={66} r="4.5" fill="#E6C37E" />
            <circle cx={x} cy={74} r="2.3" fill="#982442" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function HeroInvitation() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  return (
    <section
      id="invitation"
      className="relative mx-auto max-w-5xl px-4 pb-12 pt-4 sm:px-6 sm:pb-16 lg:px-8"
    >
      <FloralToran />

      <div className="mt-4 text-center">
        <p
          className={
            weddingConfig.invocationIsDevanagari
              ? 'font-dev text-sm tracking-[0.14em] text-[#982442] sm:text-base'
              : 'text-xs font-medium uppercase tracking-[0.28em] text-[#982442]'
          }
        >
          {weddingConfig.invocation}
        </p>
      </div>

      {/* Arched Luxury Rose-Blush Invitation Card */}
      <div className="relative mx-auto mt-6 max-w-2xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-4 rounded-t-[360px] rounded-b-[40px] opacity-75 blur-2xl"
          style={{
            background:
              'radial-gradient(circle at 50% 35%, rgba(226,142,168,0.48), rgba(212,168,83,0.18) 55%, transparent 78%)',
          }}
        />

        <div className="ivory-paper-surface relative overflow-hidden rounded-t-[280px] rounded-b-3xl border border-[#DF9EAD] px-6 pb-12 pt-14 text-center shadow-[0_24px_60px_rgba(128,42,64,0.16)] sm:rounded-t-[340px] sm:px-14 sm:pb-16 sm:pt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 rounded-t-[268px] rounded-b-2xl border border-[#C5964A]/50 sm:inset-4 sm:rounded-t-[324px]"
          />

          <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C5964A]/65 bg-white shadow-[0_6px_20px_rgba(152,36,66,0.15)]">
            <span
              className={
                weddingConfig.coverEmblemType === 'devanagari'
                  ? 'font-dev text-3xl leading-none text-[#982442]'
                  : 'font-display text-xl font-semibold italic tracking-wide text-[#982442]'
              }
            >
              {weddingConfig.coverEmblem}
            </span>
          </div>

          <p className="relative z-10 mt-6 text-[11px] font-medium uppercase tracking-[0.28em] text-[#6B3948] sm:text-xs">
            {weddingConfig.heroLead}
          </p>

          <div className="relative z-10 mt-7">
            <h1 className="font-display text-5xl font-medium tracking-wide text-[#2A1118] sm:text-6xl lg:text-[68px]">
              {weddingConfig.groom}
            </h1>
            <p className="mt-2 text-sm text-[#5E303E] sm:text-base">
              Son of{' '}
              <span className="font-medium text-[#982442]">{weddingConfig.groomParents}</span>
            </p>
          </div>

          <div className="relative z-10 my-6 flex items-center justify-center gap-5">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C5964A]/75 sm:w-24" />
            <span className="font-display text-4xl italic leading-none text-[#B03554]">&amp;</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C5964A]/75 sm:w-24" />
          </div>

          <div className="relative z-10">
            <h2 className="font-display text-5xl font-medium tracking-wide text-[#2A1118] sm:text-6xl lg:text-[68px]">
              {weddingConfig.bride}
            </h2>
            <p className="mt-2 text-sm text-[#5E303E] sm:text-base">
              Daughter of{' '}
              <span className="font-medium text-[#982442]">{weddingConfig.brideParents}</span>
            </p>
          </div>

          <p className="relative z-10 mx-auto mt-8 max-w-md text-sm leading-relaxed text-[#522734] sm:text-base">
            joyfully invite you to share in the blessings and celebration of their wedding.
          </p>
        </div>
      </div>

      {/* Story Quote */}
      <div className="mx-auto mt-12 max-w-2xl px-2 text-center sm:mt-14">
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#CC7B90]" />
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-[#C5964A]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
          <span className="h-px w-12 bg-[#CC7B90]" />
        </div>

        <p className="font-display text-2xl font-normal leading-relaxed text-[#2A1118] sm:text-[28px]">
          {weddingConfig.storyLead}{' '}
          <em className="italic text-[#982442]">{weddingConfig.storyHighlight}</em>.{' '}
          {weddingConfig.storyTail}
        </p>
      </div>

      {/* Interactive Ribbon-Tied & Curtain-Opening Family Blessing Envelope */}
      <div className="mx-auto mt-10 max-w-lg">
        <div className="relative overflow-hidden rounded-2xl border border-[#DF9EAD] bg-gradient-to-b from-[#FFF8FA] to-[#F8DCE4] p-5 text-center shadow-[0_16px_40px_rgba(128,42,64,0.14)] sm:p-6">
          <button
            type="button"
            onClick={() => setEnvelopeOpen((prev) => !prev)}
            aria-expanded={envelopeOpen}
            className="group relative z-20 flex w-full cursor-pointer flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#982442]"
          >
            {/* Horizontal Ribbon Band across Envelope */}
            <div className="relative flex w-full items-center justify-center py-2">
              <div
                aria-hidden="true"
                className="h-2.5 flex-1 rounded-l-full transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(180deg, #B84060 0%, #DF7D97 50%, #B84060 100%)',
                  opacity: envelopeOpen ? 0.35 : 0.95,
                }}
              />
              <motion.div
                className="mx-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#F2D59B] bg-gradient-to-br from-[#C44466] to-[#8C1D3A] text-white shadow-md"
                animate={{rotate: envelopeOpen ? 180 : 0, scale: envelopeOpen ? 0.92 : 1}}
                transition={{duration: 0.45, ease: [0.22, 1, 0.36, 1]}}
              >
                <MailOpen className="h-5 w-5 text-[#FFF5E8]" aria-hidden="true" />
              </motion.div>
              <div
                aria-hidden="true"
                className="h-2.5 flex-1 rounded-r-full transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(180deg, #B84060 0%, #DF7D97 50%, #B84060 100%)',
                  opacity: envelopeOpen ? 0.35 : 0.95,
                }}
              />
            </div>

            <p className="font-display mt-2 text-2xl font-medium text-[#2A1118]">
              A Blessing Note from Our Families
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-[#982442] transition-colors group-hover:text-[#73142E]">
              {envelopeOpen ? 'Tap to Tie & Seal Envelope' : 'Tap Ribbon Seal to Open Envelope'}
            </p>
          </button>

          {/* Curtain-Revealed Family Note Content */}
          <AnimatePresence initial={false}>
            {envelopeOpen && (
              <motion.div
                initial={{opacity: 0, height: 0}}
                animate={{opacity: 1, height: 'auto'}}
                exit={{opacity: 0, height: 0}}
                transition={{duration: 0.48, ease: [0.22, 1, 0.36, 1]}}
                className="relative overflow-hidden"
              >
                <div className="relative mt-5 overflow-hidden rounded-xl border border-[#DF9EAD] bg-white px-5 py-6 text-center shadow-[inset_0_0_24px_rgba(244,196,210,0.35)]">
                  {/* Sliding Mini Pink Silk Curtains inside the Envelope Reveal */}
                  <motion.div
                    aria-hidden="true"
                    className="mini-curtain-left pointer-events-none absolute inset-y-0 left-0 z-10 w-1/2 border-r border-[#C5964A]/45"
                    initial={{x: '0%'}}
                    animate={{x: '-102%'}}
                    exit={{x: '0%'}}
                    transition={{duration: 0.65, ease: [0.65, 0, 0.35, 1]}}
                  />
                  <motion.div
                    aria-hidden="true"
                    className="mini-curtain-right pointer-events-none absolute inset-y-0 right-0 z-10 w-1/2 border-l border-[#C5964A]/45"
                    initial={{x: '0%'}}
                    animate={{x: '102%'}}
                    exit={{x: '0%'}}
                    transition={{duration: 0.65, ease: [0.65, 0, 0.35, 1]}}
                  />

                  <div className="mx-auto mb-3 flex items-center justify-center gap-2 text-[#C5964A]">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <p className="font-display text-xl italic leading-relaxed text-[#381A22] sm:text-2xl">
                    “Your presence is the greatest gift we could ask for as{' '}
                    {weddingConfig.groom} &amp; {weddingConfig.bride} step into a lifetime of
                    love, warmth, and cherished memories.”
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-[#6B3948]">
                    {weddingConfig.summaryLine}
                  </p>
                  <p className="font-display mt-3 text-lg font-medium text-[#982442]">
                    — {weddingConfig.closing}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

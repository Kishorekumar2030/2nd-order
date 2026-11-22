import {useState} from 'react';
import {Check, Copy, MessageCircle} from 'lucide-react';
import {weddingConfig} from '../data/weddingData';

function DiyaLamp({delay}: {delay?: string}) {
  return (
    <svg viewBox="0 0 40 42" className="h-8 w-8" fill="none" aria-hidden="true">
      <circle cx="20" cy="14" r="10" fill="#E88CA4" fillOpacity="0.35" />
      <path
        d="M20 4 C23.5 9.5 25 14 23.2 18 C22.2 20 21 21 20 21 C19 21 17.8 20 16.8 18 C15 14 16.5 9.5 20 4 Z"
        fill="#E89A3C"
        className="diya-flame"
        style={delay ? {animationDelay: delay} : undefined}
      />
      <path
        d="M20 10 C21.8 13 22 15.8 21 18 C20.5 19 20.2 19.4 20 19.4 C19.8 19.4 19.5 19 19 18 C18 15.8 18.2 13 20 10 Z"
        fill="#FFF6DC"
      />
      <path
        d="M7 23 C12 24.5 28 24.5 33 23 C31 30 26 33 20 33 C14 33 9 30 7 23 Z"
        fill="#C9963B"
        stroke="#982442"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      <rect x="14" y="33" width="12" height="3" rx="1.5" fill="#DFB05C" />
    </svg>
  );
}

export function Footer({onReplayCover}: {onReplayCover: () => void}) {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const creator = weddingConfig.creatorContact;

  const handleCopyPhone = async () => {
    if (!creator) return;
    try {
      await navigator.clipboard.writeText(creator.whatsappDisplay);
      setCopiedPhone(true);
      window.setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      setCopiedPhone(false);
    }
  };

  return (
    <footer className="border-t border-[#DF9EAD]/80 px-4 pb-16 pt-12 text-center sm:px-6">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-center gap-4">
          <DiyaLamp delay="0s" />
          <DiyaLamp delay="0.6s" />
          <DiyaLamp delay="1.1s" />
        </div>

        <p className="font-display mt-5 text-2xl italic text-[#8E1F3C] sm:text-3xl">
          {weddingConfig.closing}
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#5E303E]">
          {weddingConfig.groom} &amp; {weddingConfig.bride} · {weddingConfig.dateDisplayDay}{' '}
          {weddingConfig.dateDisplayMonth} {weddingConfig.dateDisplayYear}
        </p>

        <button
          type="button"
          onClick={onReplayCover}
          className="mt-6 min-h-[44px] cursor-pointer px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#6B3948] underline decoration-[#C86D84] underline-offset-4 transition-colors hover:text-[#982442] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#982442]"
        >
          View Ribbon &amp; Curtain Cover Again
        </button>

        {creator && (
          <div className="ivory-paper-surface mx-auto mt-10 max-w-lg rounded-2xl border border-[#DF9EAD] p-6 text-center shadow-[0_16px_38px_rgba(128,42,64,0.12)]">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#982442]">
              Digital Wedding Invitations
            </p>
            <h3 className="font-display mt-1.5 text-2xl font-medium text-[#2A1118] sm:text-3xl">
              Crafted by {creator.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#522734]">{creator.tagline}</p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={creator.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-full border border-[#D4A853]/55 bg-[#982442] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-white shadow-[0_6px_16px_rgba(152,36,66,0.22)] transition-colors hover:bg-[#7D1A34] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#982442]"
              >
                <MessageCircle className="h-4 w-4 text-[#F6DFAF]" aria-hidden="true" />
                <span>WhatsApp · {creator.whatsappDisplay}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                aria-label="Copy WhatsApp number"
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-1.5 rounded-full border border-[#CC7B90] bg-white px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-[#982442] transition-colors hover:border-[#982442] hover:bg-[#FCE8EE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#982442]"
              >
                {copiedPhone ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#3F7A4D]" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copy Number</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

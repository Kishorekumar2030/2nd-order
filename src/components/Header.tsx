import {MapPin} from 'lucide-react';
import {getGoogleMapsUrl, weddingConfig} from '../data/weddingData';

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#DF9EAD]/80 bg-[#FFF7F9]/92 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#invitation"
          className="font-display shrink-0 whitespace-nowrap text-xl font-semibold tracking-wide text-[#2A1118] transition-colors hover:text-[#982442]"
        >
          {weddingConfig.groom}{' '}
          <span className="italic text-[#B03554]">&amp;</span>{' '}
          {weddingConfig.bride}
        </a>

        <nav
          aria-label="Primary sections"
          className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.18em] text-[#5E303E] md:flex"
        >
          <a
            href="#invitation"
            className="shrink-0 whitespace-nowrap py-2 transition-colors hover:text-[#982442]"
          >
            Invitation
          </a>
          <a
            href="#save-the-date"
            className="shrink-0 whitespace-nowrap py-2 transition-colors hover:text-[#982442]"
          >
            Save the Date
          </a>
          <a
            href="#festivities"
            className="shrink-0 whitespace-nowrap py-2 transition-colors hover:text-[#982442]"
          >
            Festivities
          </a>
          <a
            href="#venue"
            className="shrink-0 whitespace-nowrap py-2 transition-colors hover:text-[#982442]"
          >
            Venue
          </a>
        </nav>

        <a
          href={getGoogleMapsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[40px] shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[#D4A853]/55 bg-[#982442] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white shadow-[0_6px_16px_rgba(152,36,66,0.25)] transition-colors hover:bg-[#7D1A34] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#982442]"
        >
          <MapPin className="h-3.5 w-3.5 text-[#F6DFAF]" aria-hidden="true" />
          <span>Get Directions</span>
        </a>
      </div>
    </header>
  );
}

import {useCallback, useEffect, useRef, useState} from 'react';
import {Volume2, VolumeX} from 'lucide-react';
import {weddingConfig} from './data/weddingData';
import {OpeningCover} from './components/OpeningCover';
import {FloatingPetals} from './components/FloatingPetals';
import {Header} from './components/Header';
import {HeroInvitation} from './components/HeroInvitation';
import {SaveTheDateScroll} from './components/SaveTheDateScroll';
import {FestivitiesSection} from './components/FestivitiesSection';
import {VenueAndRsvpSection} from './components/VenueAndRsvpSection';
import {Footer} from './components/Footer';
import {MusicPlayer, type MusicPlayerHandle} from './components/MusicPlayer';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const musicRef = useRef<MusicPlayerHandle>(null);

  useEffect(() => {
    document.title = weddingConfig.pageTitle;
  }, []);

  const handleOpenStart = useCallback(() => {
    musicRef.current?.play();
  }, []);

  const handleOpenComplete = useCallback(() => {
    setIsOpened(true);
  }, []);

  const handleToggleMusic = useCallback(() => {
    musicRef.current?.toggle();
  }, []);

  const handleReplayCover = useCallback(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    setIsOpened(false);
  }, []);

  return (
    <div
      className="relative min-h-screen text-[#2A1118]"
      style={{
        background:
          'radial-gradient(circle at 18% 8%, #FFF7F9 0%, #FBE7ED 38%, #F6D5DF 74%, #F0C4D2 100%)',
      }}
    >
      <MusicPlayer ref={musicRef} onPlayingChange={setIsPlaying} />
      <FloatingPetals />

      <OpeningCover
        isOpen={isOpened}
        onOpenStart={handleOpenStart}
        onOpen={handleOpenComplete}
      />

      <Header />

      <main className="relative z-20">
        <HeroInvitation />
        <SaveTheDateScroll />
        <FestivitiesSection />
        <VenueAndRsvpSection />
      </main>

      <Footer onReplayCover={handleReplayCover} />

      {isOpened && (
        <button
          type="button"
          onClick={handleToggleMusic}
          title={weddingConfig.songTitle}
          aria-label={
            isPlaying
              ? `Pause ${weddingConfig.songTitle}`
              : `Play ${weddingConfig.songTitle}`
          }
          aria-pressed={isPlaying}
          className="fixed bottom-4 right-4 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#CC7B90] bg-[#FFF8FA]/95 text-[#982442] shadow-[0_8px_24px_rgba(128,42,64,0.22)] backdrop-blur-md transition-colors hover:border-[#982442] hover:bg-[#FCE8EE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#982442]"
        >
          {isPlaying ? (
            <Volume2 className="h-4 w-4" aria-hidden="true" />
          ) : (
            <VolumeX className="h-4 w-4 text-[#804C5B]" aria-hidden="true" />
          )}
        </button>
      )}
    </div>
  );
}

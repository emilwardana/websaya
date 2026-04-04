import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import ModernArtistHero from "../components/about/ModernArtistHero";
import ModernTrackList from "../components/about/ModernTrackList";
import ModernSkillGrid from "../components/about/ModernSkillGrid";

export default function AboutPage() {
  return (
    <>
    <section className="flex-1 w-full min-h-screen pb-20">
      {/* Background Banner for Header - shifted out of flow to go full width */}
      <div className="absolute top-0 left-0 w-full h-48 md:h-64 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-surface)] opacity-20 -z-10 rounded-b-3xl"></div>

      <div className="mx-auto max-w-6xl px-4 md:px-8 pt-8">
        <div className="mb-8 flex justify-start">
          <BackButton />
        </div>

        <ModernArtistHero />
        <ModernTrackList />
        <ModernSkillGrid />
        
      </div>
    </section>
    <Footer />
    </>
  );
}

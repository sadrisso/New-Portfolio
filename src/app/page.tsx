import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import SkillsCarousel from "./components/SkillsSection";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>

      <div>
        <AboutSection />
      </div>

      <div>
        <SkillsCarousel />
      </div>
    </div>
  );
}

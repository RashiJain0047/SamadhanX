import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer"; // Import the new Footer component

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
      </main>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default Landing;
import HeroSection from "@/components/sections/HeroSection";
import SignatureCocktailsSection from "@/components/sections/SignatureCocktailsSection";
import StorySection from "@/components/sections/StorySection";
import OwnerSpotlightSection from "@/components/sections/OwnerSpotlightSection";
import GallerySection from "@/components/sections/GallerySection";
import ReservationSection from "@/components/sections/ReservationSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="bg-[#060405] text-white">
      <HeroSection />
      <SignatureCocktailsSection />
      <StorySection />
      <OwnerSpotlightSection />
      <GallerySection />
      <ReservationSection />
      <FooterSection />
    </main>
  );
}

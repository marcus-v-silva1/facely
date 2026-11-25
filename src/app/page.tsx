import { Header } from "@/components/Header";
import { CinematicHero } from "@/components/CinematicHero";
import { ClinicExperience } from "@/components/ClinicExperience";
import { TreatmentsGallery } from "@/components/TreatmentsGallery";
import { VideoShowcase } from "@/components/VideoShowcase";
import { ArtOfCare } from "@/components/ArtOfCare";
import { Professionals } from "@/components/Professionals";
import { BookingCTA } from "@/components/BookingCTA";
import { Footer } from "@/components/Footer";
import { MobileBookingBar } from "@/components/MobileBookingBar";

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ivory focus:px-4 focus:py-2">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <CinematicHero />
        <ClinicExperience />
        <TreatmentsGallery />
        <VideoShowcase />
        <ArtOfCare />
        <Professionals />
        <BookingCTA />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  );
}

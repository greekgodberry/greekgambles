import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveStatus from "@/components/LiveStatus";
import LatestStream from "@/components/LatestStream";
import BiggestWins from "@/components/BiggestWins";
import StreamSchedule from "@/components/StreamSchedule";
import Offers from "@/components/Offers";
import Socials from "@/components/Socials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <main className="bg-black pb-20 text-white md:pb-0">
      <Navbar />
      <Hero />
      <LiveStatus />
      <LatestStream />
      <BiggestWins />
      <StreamSchedule />
      <Offers />
      <Socials />
      <FinalCTA />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}
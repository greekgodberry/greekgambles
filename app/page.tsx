import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestStream from "@/components/LatestStream";
import Offers from "@/components/Offers";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
import LiveStatus from "@/components/LiveStatus";
import BiggestWins from "@/components/BiggestWins";
import StreamSchedule from "@/components/StreamSchedule";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LiveStatus />
      <LatestStream />
      <BiggestWins />
      <StreamSchedule />
      <Offers />
      <Socials />
      <Footer />
    </>
  );
}
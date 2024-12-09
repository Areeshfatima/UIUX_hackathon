import Hero from "@/components/Hero";
import LogoBar from "@/components/Herobutton";
import Arrival from "@/components/Arrival";
import Selling from "@/components/Selling";
import DressStyle from "@/components/DressStyle";
import HappyCustommer from "@/components/HappyCustommer";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoBar />
      <Arrival />
      <Selling />
      <DressStyle />
      <HappyCustommer />
    </div>
  );
}

import Image from "next/image";
import Hero from "@/components/Hero";
import "./globals.css";
import InstagramPostGenerator from "@/components/HowItWorks";
import TeamCards from "@/components/OurTeam";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <InstagramPostGenerator></InstagramPostGenerator>
      <TeamCards></TeamCards>
    </>
  );
}

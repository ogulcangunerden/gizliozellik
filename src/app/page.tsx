import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Büyükçekmece Gizli Özellik",
  description: "Büyükçekmece Gizli Özellik",
  keywords:
    "gizli özellik, f30 gizli özellik, vag gizli özellik, g20 gizli özellik",
  robots: "index, follow",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      {/* <Features /> */}
      <Video />
    </>
  );
}

"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Faq from "./landingPage/faq";
import HeroSection from "./landingPage/heroSection";
import PntechCurrency from "./landingPage/pntechCurrency";
import ThePathToGlory from "./landingPage/thePathToGlory";
import TheVisionaries from "./landingPage/theVisionaries";
import UniqueFeature from "./landingPage/uniqueFeature";
import WhitePaperOverview from "./landingPage/whitePaperOverview";
import "./page.scss";
export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hash = window.location.hash?.substring(1); 
    if (!hash) return;

    const scrollToElement = () => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return true;
      }
      return false;
    };

    if (scrollToElement()) return;

    const interval = setInterval(() => {
      if (scrollToElement()) clearInterval(interval);
    }, 100);

    setTimeout(() => clearInterval(interval), 3000);
  }, [pathname]);
  
  return (
    <section className="home">
      <HeroSection/>
      <UniqueFeature/>
      <WhitePaperOverview/>
      <PntechCurrency/>
      <ThePathToGlory/>
      <TheVisionaries/>
      <Faq />
    </section>
  );
}

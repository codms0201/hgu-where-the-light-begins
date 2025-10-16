import React, { useRef } from 'react';
import Link from 'next/link';
import Header from "../../components/Header";
import Mobile_HeaderBtn from "../../components/mobile_headerBtn"
import Intro from "../../components/AboutPage/Intro";
import Poster from "../../components/AboutPage/Poster";
import Symbols from "../../components/AboutPage/Symbols";
import Symbols_mobile from "../../components/AboutPage/Symbols_mobile";
import Interviews from "../../components/AboutPage/Interviews";
import ThanksTo from "../../components/AboutPage/ThanksTo";
import Executives from '@/components/AboutPage/Executives';
import Sponsers from '@/components/AboutPage/Sponser';
import Footer from '@/components/Footer';
import { avantGarde } from '@/styles/fonts';

const AboutPage = () => {
  const symbolsContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white">
      {/* 데스크탑 헤더 (모바일에서 숨김) */}
      <div className="hidden lg:block">
        <Header />
      </div>

      {/* 모바일용 헤더 (데스크탑에서 숨김) */}
      <div className="flex lg:hidden items-center justify-between p-4">
        <h1 className={`${avantGarde.variable} font-normal text-[40px]`}>About</h1>
          <Mobile_HeaderBtn />
      </div>

      <Intro />
      
      <div className="hidden lg:block">
        <Poster />
      </div>
      
      {/* --- THIS IS THE CHANGED PART --- */}

      {/* Desktop Symbols Component (hidden on mobile) */}
      <div className="hidden lg:block">
        <div ref={symbolsContainerRef} className="relative h-[800vh]">
          <Symbols containerRef={symbolsContainerRef} />
        </div>
      </div>

      {/* Mobile Symbols_mobile Component (hidden on desktop) */}
      <div className="lg:hidden">
        <Symbols_mobile />
      </div>
      
      {/* --- CHANGES END HERE --- */}

      <Interviews />
      <ThanksTo />
      <Executives />
      <Sponsers />
      <Footer />
    </div>
  )
}

export default AboutPage;
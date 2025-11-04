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
import MobileFooter from '../../components/mobile_footer';
import { avantGarde } from '@/styles/fonts';

const AboutPage = () => {
  const symbolsContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {/* 데스크탑 헤더 (모바일에서 숨김) */}
      <div className="hidden lg:block lg:sticky lg:top-0 lg:z-50">
        <Header />
      </div>

      {/* 모바일용 헤더 (데스크탑에서 숨김) */}
      <div className="flex lg:hidden sticky top-0 z-50 bg-white items-center justify-between p-4">
        <h1 className={`${avantGarde.className} font-[400] text-[40px] text-[#1C1C1C]`}>About</h1>
        <Mobile_HeaderBtn />
      </div>

      <Intro />
      
      <div className="hidden lg:block">
        <Poster />
      </div>
      <div className="hidden lg:block">
        <div ref={symbolsContainerRef} className="relative h-[800vh]">
          <Symbols containerRef={symbolsContainerRef} />
        </div>
      </div>
      <div className="lg:hidden mb-26">
        <Symbols_mobile />
      </div>
      <Interviews />
      <ThanksTo />
      <Executives />
      <Sponsers />
      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <Footer />
      </div>
      {/* Mobile Footer */}
      <div className="lg:hidden">
        <MobileFooter />
      </div>
    </div>
  )
}

export default AboutPage;
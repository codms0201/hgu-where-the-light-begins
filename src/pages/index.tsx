import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Intro from "@/components/HomePage/Intro";
import Sketch from "@/components/HomePage/Sketch";
import Header from "../components/Header";
import Mobile_HeaderBtn from '../components/mobile_headerBtn';
import Footer from '@/components/Footer';
import MobileFooter from "../components/mobile_footer";
import { ITCavantGarde } from '@/styles/fonts'; 

const HomePage = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [scale, setScale] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const skipVideo = router.query.skipVideo === 'true';
    if (skipVideo) {
      setShowVideo(false); 
      setShowContent(true); 
    } else if (videoRef.current) {
      setShowVideo(true);
      
      videoRef.current.load(); 
      videoRef.current.play().then(() => {
        setShowContent(false); 
      }).catch((error: Error) => {
        console.warn("Video autoplay failed (muted video should work):", error);
        setShowVideo(false); 
        setShowContent(true); 
      });
    } else {
      setShowVideo(false);
      setShowContent(true);
    }
  }, [router.isReady, router.query.skipVideo]); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        const baseWidth = 1600;
        const currentWidth = window.innerWidth;
        const newScale = currentWidth / baseWidth;
        setScale(newScale);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleVideoEnd = () => {
    setShowVideo(false);
    setShowContent(true); 
  };

  return (
    <>
      <Head>
        <title>2025 Handong Graduation Exhibition</title>
      </Head>

      <div 
        className={`flex flex-col min-h-screen relative overflow-visible`}
      >
        {/* Video Layer */}
        <video
          ref={videoRef}
          muted
          playsInline
          onEnded={handleVideoEnd}
          preload="auto"
          className={`absolute top-0 left-0 w-full h-screen object-cover z-10 transition-opacity duration-1000 ease-in-out ${
            showVideo ? 'opacity-100' : 'opacity-0'
          } ${
            showContent ? 'pointer-events-none' : ''
          }`}
        >
          <source src="/video/웹2.mp4" type="video/mp4" />
        </video>

        {/* Gray_radial Background Layer */}
        <div 
          className={`absolute hidden lg:block z-[5] transition-opacity duration-1000 ease-in-out ${
            showContent ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            left: `${511 * scale}px`,
            top: `calc(-99px * ${scale})`,
            width: `${1090 * scale}px`,
            height: `${1090 * scale}px`,
            backgroundImage: 'url(/img/home/Gray_radial.svg)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Content Layer */}
        <div 
          className={`relative z-20 transition-opacity duration-1000 ease-in-out ${
            showContent ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* 헤더 */}
          <div className="hidden bg-transparent lg:block lg:sticky lg:top-0 w-full z-50">
            <Header />
          </div>

          {/* 모바일 헤더 텍스트 */}
          <div className="py-8 px-4 z-50 block lg:hidden">
            <h1 className={`${ITCavantGarde.variable} text-[14px] font-normal text-[#121212] leading-[110%] tracking-[-0.154px]`}>
              2025 HANDONG GLOBAL UNIVERSITY
            </h1>
            <h2 className={`${ITCavantGarde.variable} text-[14px] font-normal text-[#121212] leading-[110%] tracking-[-0.154px]`}>
              CONTENTS CONVERGENCE DESIGN
            </h2>
            <h1 className={`${ITCavantGarde.variable} text-[14px] font-normal text-[#121212] leading-[110%] tracking-[-0.154px]`}>
              GRADUATION EXHIBITION
            </h1>
          </div>

          {/* 모바일 헤더 버튼 */}
          <div className="absolute top-8 right-4 z-50 block lg:hidden">
            <Mobile_HeaderBtn />
          </div>
          <Intro />         
          {/* <Sketch /> */}
          
          {/* Footer */}
          <div className="hidden lg:block lg:z-50 mt-100">
            <Footer />
          </div>
          <div className="lg:hidden">
            <MobileFooter />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
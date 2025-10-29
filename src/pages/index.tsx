import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Intro from "@/components/HomePage/Intro";
import Sketch from "@/components/HomePage/Sketch";
import Header from "../components/Header";
import Mobile_HeaderBtn from '../components/mobile_headerBtn';
import Footer from '@/components/Footer';
import MobileFooter from "../components/mobile_footer";

// 폰트 임포트
import { ITCavantGarde } from '@/styles/fonts'; 

const HomePage = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [showContent, setShowContent] = useState(false);
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
      setShowContent(false);
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
        setShowVideo(false); 
        setShowContent(true); 
      });
    } else {
      setShowVideo(false);
      setShowContent(true);
    }
  }, [router.isReady, router.query.skipVideo]); 

  const handleVideoEnd = () => {
    setShowContent(true); 
  };

  return (
    <>
      <Head>
        <title>2025 Handong Graduation Exhibition</title>
        <link rel="preload" href="/img/home/자산 10.svg" as="image" />
        <link rel="preload" href="/img/home/Gray_radial.png" as="image" />
      </Head>

      {/* 메인 컨테이너 (opacity 없음) */}
      <div 
        className={`bg-white flex flex-col min-h-screen relative`}
      >
        {/* 비디오 (z-10) */}
        <video
          ref={videoRef}
          muted
          playsInline
          onEnded={handleVideoEnd}
          preload="auto"
          className={`absolute top-0 left-0 w-full h-screen object-cover z-10 transition-opacity duration-1000 ease-in-out ${
            showVideo ? 'opacity-100' : 'opacity-0'
          } ${
            (showContent || !showVideo) ? 'pointer-events-none' : ''
          }`}
        >
          <source src="/video/웹2.mp4" type="video/mp4" />
        </video>
        
        {/* [수정됨] 
          헤더 관련 div들을 이 div 안으로 이동시켰습니다.
          이제 이 div 전체가 showContent 상태에 따라 페이드인/아웃 됩니다.
        */}
        <div 
          className={`relative z-20 transition-opacity duration-1000 ease-in-out ${
            showContent ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* --- 헤더 --- */}
          {/* 데스크톱 헤더 (z-50) */}
          <div className="hidden bg-transparent lg:block lg:sticky lg:top-0 w-full z-50">
            <Header />
          </div>

          {/* 모바일 헤더 텍스트 (z-50) */}
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

          {/* 모바일 헤더 버튼 (z-50) */}
          <div className="absolute top-8 right-4 z-50 block lg:hidden">
            <Mobile_HeaderBtn />
          </div>
          {/* --- 헤더 끝 --- */}

          {/* --- 본문 콘텐츠 --- */}
          <Intro />
          
          <Sketch />
          
          {/* Footer */}
          <div className="hidden lg:block lg:z-50">
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
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

    // 🌟 1. skipVideo 상태에 따라 초기 상태 설정
    if (skipVideo) {
      setShowVideo(false); 
      setShowContent(true); 
    } else if (videoRef.current) {
      // 🌟 2. skipVideo가 false일 때, 동영상 재생을 시도
      setShowVideo(true);
      
      // videoRef.current.load()를 호출하여 동영상을 재설정합니다.
      // 쿼리 제거 후 돌아왔을 때 재생을 확실히 하기 위함입니다.
      videoRef.current.load(); 
      
      // 🌟 3. play() 시도 및 Promise 처리
      videoRef.current.play().then(() => {
        // 재생에 성공하면 동영상만 보이고 콘텐츠는 숨깁니다.
        setShowContent(false); 
      }).catch(error => {
        // 자동 재생이 막혀 재생에 실패하면, 동영상을 숨기고 콘텐츠를 즉시 표시합니다.
        console.warn("Video autoplay failed (muted video should work):", error);
        setShowVideo(false); 
        setShowContent(true); 
      });
    } else {
      // 비디오 요소가 없으면 바로 콘텐츠 표시
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
        className={`flex flex-col min-h-screen relative`}
      >
        {/* 비디오 (z-10) */}
        <video
          ref={videoRef}
          muted
          playsInline
          onEnded={handleVideoEnd}
          preload="auto"
          // 🌟 동영상 로딩 상태가 아닌 경우에도 포인터 이벤트를 막아 오버레이 클릭 방지
          className={`absolute top-0 left-0 w-full h-screen object-cover z-10 transition-opacity duration-1000 ease-in-out ${
            showVideo ? 'opacity-100' : 'opacity-0'
          } ${
            showContent ? 'pointer-events-none' : ''
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
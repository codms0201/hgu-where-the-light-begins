import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Intro from "@/components/HomePage/Intro";
import Sketch from "@/components/HomePage/Sketch";
import Header from "@/components/Header";
import Footer from '@/components/Footer';

const HomePage = () => {
  // ✅ 1. 상태를 videoFinished 하나로 단순화합니다.
  const [videoFinished, setVideoFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 페이지가 로드될 때 비디오를 재생합니다.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
        // 비디오 재생 실패 시 바로 메인 콘텐츠를 보여줍니다.
        setVideoFinished(true);
      });
    }
  }, []);

  // 비디오 종료 시 호출될 함수
  const handleVideoEnd = () => {
    setVideoFinished(true);
  };

  return (
    <>
      <Head>
        <title>2025 Handong Graduation Exhibition</title>
        {/* 필요한 이미지들을 미리 로드하여 깜빡임을 줄일 수 있습니다. */}
        <link rel="preload" href="/img/home/자산 10.svg" as="image" />
        <link rel="preload" href="/img/home/Gray_radial.png" as="image" />
      </Head>

      {/* ✅ 2. 메인 콘텐츠를 항상 렌더링하되, 투명도로 제어합니다. */}
      <div 
        className={`bg-white flex flex-col min-h-screen transition-opacity duration-1000 ease-in-out ${
          videoFinished ? 'opacity-100' : 'opacity-0' // 영상이 끝나면 나타남
        }`}
      >
        <Header />
        <Intro />
        <Sketch />
        <Footer />
      </div>
      
      {/* ✅ 3. 비디오 컨테이너를 메인 콘텐츠 위에 띄웁니다. */}
      <div 
        className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
          videoFinished ? 'opacity-0 pointer-events-none' : 'opacity-100' // 영상이 끝나면 사라지고 클릭도 안됨
        }`}
      >
        <video
          ref={videoRef}
          muted
          playsInline
          onEnded={handleVideoEnd} // 비디오 종료 시 handleVideoEnd 호출
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/video/웹2.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default HomePage;
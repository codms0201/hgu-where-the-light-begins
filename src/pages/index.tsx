import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Intro from "@/components/HomePage/Intro";
import Sketch from "@/components/HomePage/Sketch";
import Footer from '@/components/Footer';
import MobileFooter from "../components/mobile_footer";

const HomePage = () => {
  const [videoFinished, setVideoFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
        setVideoFinished(true);
      });
    }
  }, []);

  const handleVideoEnd = () => {
    setVideoFinished(true);
  };

  return (
    <>
      <Head>
        <title>2025 Handong Graduation Exhibition</title>
        <link rel="preload" href="/img/home/자산 10.svg" as="image" />
        <link rel="preload" href="/img/home/Gray_radial.png" as="image" />
      </Head>
      <div 
        className={`bg-white flex flex-col min-h-screen transition-opacity duration-1000 ease-in-out ${
          videoFinished ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Intro />
        <Sketch />
        {/* Desktop Footer */}
        <div className="hidden lg:block lg:z-50">
          <Footer />
        </div>
        {/* Mobile Footer */}
        <div className="lg:hidden">
          <MobileFooter />
        </div>
      </div>
      <div 
        className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
          videoFinished ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <video
          ref={videoRef}
          muted
          playsInline
          onEnded={handleVideoEnd}
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
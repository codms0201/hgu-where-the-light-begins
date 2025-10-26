'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Mobile_HeaderBtn from '../../../components/mobile_headerBtn';
import TeamWork from '../../../img/works_team.jpg';
import TeamProfile from "../../../img/profileImage.png";
import { ITCavantGarde, suitMedium, avantGarde } from "@/styles/fonts";
import MobileFooter from '../../../components/mobile_footer';

// ▼▼▼ [수정됨] 마운트 상태를 추적하는 훅 ▼▼▼
const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted;
};
// ▲▲▲ [수정됨] 마운트 상태를 추적하는 훅 ▲▲▲

// useWindowWidth 훅 (동일)
const useWindowWidth = () => {
  const [width, setWidth] = useState(0); // 0으로 초기화
  useEffect(() => {
    // 이 코드는 클라이언트에서만 실행됨
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // 마운트 시 실제 너비로 설정
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

const WorksTeamDetailPage = () => {
  const width = useWindowWidth();
  const isMounted = useIsMounted(); // ▼▼▼ [수정됨] 마운트 훅 사용 ▼▼▼

  return (
    <div className="min-h-screen bg-white">
      {/* 데스크탑 헤더 */}
      <div className="hidden lg:block">
        <Header />
      </div>

      {/* 모바일 헤더 */}
      <div className="flex lg:hidden items-center justify-between p-4">
        <Link href="/works" aria-label="Go back">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none">
            <path d="M14.5 3L6 11.5L14.5 20" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Link>
        <h1 className={`${avantGarde.className} text-[#000000] font-[400] text-[24px] tracking-wider`}>
          PROJECT
        </h1>
        <Mobile_HeaderBtn />
      </div>

      <div className="flex">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-130 p-4 lg:p-8 space-y-4">
            {/* UX Design 태그 */}
            <div className="inline-block relative group">
              <span className={`${ITCavantGarde.className} bg-white text-[#1C1C1C] px-3 py-1 text-[18px] font-[500] border-2 border-[#00FF36]`}>
                UX Design
              </span>
              {/* 모서리 정사각형들 */}
              <div className="absolute z-10 -top-1.5 -left-1 w-2 h-2 bg-white border-2 border-[#00FF36]"></div>
              <div className="absolute z-10 -top-1.5 -right-1 w-2 h-2 bg-white border-2 border-[#00FF36]"></div>
              <div className="absolute z-10 -bottom-1.5 -left-1 w-2 h-2 bg-white border-2 border-[#00FF36]"></div>
              <div className="absolute z-10 -bottom-1.5 -right-1 w-2 h-2 bg-white border-2 border-[#00FF36]"></div>
            </div>
            {/* 작품 제목 */}
            <h1 className={`${suitMedium.className} text-[20px] lg:text-[32px] font-[700] text-[#1C1C1C] leading-[160%] tracking-[-1px]`}>
              WELLCOM: 아아아아아아아아
              <br />
              차량 커뮤니케이션의 mediator
            </h1>
            {/* 작품 설명 */}
            <div>
              <p className={`${suitMedium.className} text-[16px] lg:text-[18px] font-[400] text-[#1C1C1C] leading-[170%] tracking-[-1px]`}>
                HOMING은 집 안의 작은 동반자이자 감각적인 디스플레이입니다.
                헤드의 표정과 시선, 부드러운 모션으로 사용자의 마음을 읽고 교감
                하며, 공간에 맞춰 빛과 정보를 자연스럽게 전합니다.  공간에 맞춰
                빛과 정보를 자연스럽게 전합니다.  공간에 맞춰 빛과 정보를 아요
              </p>
            </div>

            {/* 모바일 전용 작품 이미지 (중간 삽입) */}
            <div className="block lg:hidden -mx-4 my-4">
              <Image
                src={TeamWork}
                alt="Team Work"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* 단체 프로필 */}
            <div className='mt-10'>
              <Image
              src={TeamProfile}
              alt="Team Profile"
              className="w-334px h-auto object-cover"
              />
            </div>
            {/* 디자이너명 */}
            <div className="mt-10 flex items-start gap-13">
              <h3 className={`${suitMedium.className} text-[#1C1C1C] text-[16px] font-[700] mb-4`}>
                TeamName
              </h3>
              <div className="grid grid-cols-2 gap-7">
                {["NAME1", "NAME2", "NAME3", "NAME4", "NAME5"].map((name, idx) => (
                  <Link
                    key={idx}
                    href="/works"
                    className={`${suitMedium.className} flex items-center gap-10 text-[#1C1C1C] text-[16px] font-[500] hover:text-[#00FF36] transition-colors`}
                  >
                    <p>{name}</p>
                    <svg
                      className="-ml-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <path
                        d="M0.629395 0.915527H6.99997M6.99997 0.915527V7.2861M6.99997 0.915527L0.629395 7.2861"
                        stroke="currentColor"
                        strokeWidth="0.910082"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* 데스크탑 전용 작품 이미지 */}
          <div className="flex-1 p-4 lg:p-8 hidden lg:block">
            <Image
              src={TeamWork}
              alt="Team Work"
              className="w-full lg:w-[1006px] h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ▼▼▼ [수정됨] isMounted로 래핑 ▼▼▼ */}
      {/* isMounted가 false일 때(서버 렌더링, 클라이언트 첫 렌더링)는 아무것도 렌더링하지 않습니다.
        isMounted가 true가 된 후(클라이언트 두 번째 렌더링)에만 width를 비교하여 푸터를 렌더링합니다.
      */}
      {isMounted && (width <= 390 ? <MobileFooter /> : <Footer />)}
    </div>
  );
};

export default WorksTeamDetailPage;
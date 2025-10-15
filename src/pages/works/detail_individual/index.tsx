import React from 'react';
import Link from "next/link"; 
import Image from 'next/image';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import TeamWork from '../../../img/works_team.jpg';
import TeamProfile from "../../../img/Image.png";

const WorksIndividualDetailPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />  
      <div className="flex">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 좌측 작품 정보 */}
          <div className="w-130 p-8 space-y-4">
            {/* UX Design 태그 */}
            <div className="inline-block relative group">
              <span className="bg-white text-gray-900 px-3 py-1 font-[ITC_Avant_Garde_Gothic] text-[18px] font-weight-900 border-2 border-[#00FF36]">
                UX Design
              </span>
              {/* 모서리 정사각형들 */}
              <div className="absolute z-10 -top-1.5 -left-1 w-2 h-2 bg-white border-2 border-[#00FF36]"></div>
              <div className="absolute z-10 -top-1.5 -right-1 w-2 h-2 bg-white border-2 border-[#00FF36]"></div>
              <div className="absolute z-10 -bottom-1.5 -left-1 w-2 h-2 bg-white border-2 border-[#00FF36]"></div>
              <div className="absolute z-10 -bottom-1.5 -right-1 w-2 h-2 bg-white border-2 border-[#00FF36]"></div>
            </div>
            {/* 작품 제목 */}
            <h1 className="font-suit text-[32px] font-bold text-[#1C1C1C] leading-[160%] tracking-[-1px]">
              WELLCOM: 아아아아아아아아
              <br />
              차량 커뮤니케이션의 mediator
            </h1>            
            {/* 작품 설명 */}
            <div>
              <p className="font-suit text-[18px] font-normal text-[#FF0000] leading-[170%] tracking-[-1px]">
                HOMING은 집 안의 작은 동반자이자 감각적인 디스플레이입니다.<br />
                헤드의 표정과 시선, 부드러운 모션으로 사용자의 마음을 읽고 교감<br />
                하며, 공간에 맞춰 빛과 정보를 자연스럽게 전합니다.  공간에 맞춰<br />
                빛과 정보를 자연스럽게 전합니다.  공간에 맞춰 빛과 정보를 아요
              </p>
            </div>
            {/* 개인 프로필 */}
            <div className="mt-10 flex items-start gap-8">
              <Image 
              src={TeamProfile} 
              alt="Team Profile" 
              className="w-1/2 h-full object-cover"
              />
              <div className="ml-10">
                <Link
                  href="/works"
                  className="flex items-center gap-10 font-suit text-[#1C1C1C] text-[16px] font-medium hover:text-[#00FF36] transition-colors"
                >
                  <p>NAME</p>
                  <svg
                    className="ml-2"
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
              </div>
            </div>
          </div>          
          {/* 우측 작품 이미지 */}
          <div className="flex-1 p-8">
            <Image 
              src={TeamWork} 
              alt="Team Work" 
              className="w-[900px] h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorksIndividualDetailPage;
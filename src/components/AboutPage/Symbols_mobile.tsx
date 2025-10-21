import React, { useState } from 'react';
import Image from 'next/image';
import { avantGarde, suitMedium } from '@/styles/fonts';

import Symbol1 from '../../../public/img/symbols/symbol1.svg'; 
import Symbol2 from '../../../public/img/symbols/symbol2.svg';
import Symbol3 from '../../../public/img/symbols/symbol3.svg';
import Symbol4 from '../../../public/img/symbols/symbol4.svg';

export default function Symbols_mobile() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const symbolsData = [
    {
      id: 0,
      image: Symbol1,
      title: "Communication Design",
      color: "#37F6FF",
      description: "커뮤니케이션 디자인은 메시지를 ‘확산’시키는\n작업입니다. 방사형 구조는 아이디어와 메시지가\n다양한 매체를 통해 확장되고 연결되는\n과정을 상징합니다."
    },
    {
      id: 1,
      image: Symbol2,
      title: "Service Design",
      color: "#FDFF00",
      description: "서비스 디자인은 사용자의 ‘경험’을 설계하는\n일입니다. 겹겹이 쌓인 원형 구조는 중심에서\n 바깥으로 확장되는 여정을 상징하며,\n사용자를 중심으로 다양한 접점과 관계가\n유기적으로 이어지는 시스템을 나타냅니다."
    },
    {
      id: 2,
      image: Symbol3,
      title: "UX Design",
      color: "#945AFF",
      description: "UX/UI 디자인은 사용자의 ‘흐름’을 설계하는\n과정입니다. 교차된 선이 만든 구조는 길과\n방향을 상징하며, 사용자가 화면 속에서 선택과\n결정을 반복해 나아가는 과정을 나타냅니다."
    },
    {
      id: 3,
      image: Symbol4,
      color: "#FF586F",
      title: "Industrial Design",
      description: "제품 디자인은 ‘구조와 기능’을 탐구하는\n작업입니다. 모듈화된 정사각형들이 질서 있게\n배열된 격자 구조는 제품이 가진 체계성과\n조립적 특성을 상징합니다."
    }
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % symbolsData.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + symbolsData.length) % symbolsData.length);
  };

  const currentSymbol = symbolsData[currentIndex];

  return (
    <div className="bg-white p-4 flex flex-col items-center">
      {/* Symbols 제목 */}
      <div className="w-full text-left mb-8">
        <h1 className={`${avantGarde.variable} text-[24px] font-[400] text-[#1C1C1C]`}>
          Symbols
        </h1>
      </div>

      {/* 스와이퍼 영역 */}
      <div className="relative w-full max-w-sm flex flex-col items-center justify-center">
        <div className="flex items-center justify-between w-full">
          <button onClick={goToPrevious} className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="23" viewBox="0 0 12 23" fill="none">
              <path d="M11 22L2 10L11 1" stroke="#1C1C1C" strokeWidth="2"/>
            </svg>
          </button>
          <div className="relative w-[105px] h-[105px]">
            <Image 
              src={currentSymbol.image} 
              alt={currentSymbol.title} 
              layout="fill" 
              objectFit="contain" 
            />
          </div>
          <button onClick={goToNext} className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="23" viewBox="0 0 12 23" fill="none">
              <path d="M1 1L10 13L1 22" stroke="#1C1C1C" strokeWidth="2"/>
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {symbolsData.map((_, index) => (
            <span
              key={index}
              className={`block w-[6.197px] h-[6.197px] rounded-full ${
                index === currentIndex ? 'bg-[#848484]' : 'bg-[#D9D9D9]'
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* 심볼 콘텐츠 */}
      <div className="mt-8 w-full max-w-sm text-center">
        <div 
          className="border-1 inline-block px-2 relative" 
          style={{ borderColor: currentSymbol.color }}
        >
          <h2 className={`${suitMedium.className} text-[16px] font-[500] text-[#1C1C1C] pb-2tracking-[-0.176px]`}>
            {currentSymbol.title}
          </h2>
          <div className="absolute z-10 -top-1 -left-1 w-[6px] h-[6px] bg-[#fff] border-1" style={{ borderColor: currentSymbol.color }}></div>
          <div className="absolute z-10 -top-1 -right-1 w-[6px] h-[6px] bg-[#fff] border-1" style={{ borderColor: currentSymbol.color }}></div>
          <div className="absolute z-10 -bottom-1 -left-1 w-[6px] h-[6px] bg-[#fff] border-1" style={{ borderColor: currentSymbol.color }}></div>
          <div className="absolute z-10 -bottom-1 -right-1 w-[6px] h-[6px] bg-[#fff] border-1" style={{ borderColor: currentSymbol.color }}></div>
        </div>
        <p className="mt-3 text-[12px] font-[400] text-[#1C1C1C] leading-[140%] whitespace-pre-line">
          {currentSymbol.description}
        </p>
      </div>
    </div>
  );
}
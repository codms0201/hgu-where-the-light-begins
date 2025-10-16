import React, { useState } from 'react';
import Image from 'next/image';
import { avantGarde } from '@/styles/fonts';

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
      description: "커뮤니케이션 디자인은 메시지를 ‘확산’시키는 작업입니다. 중심에서 바깥으로 뻗어나가는 방사형 구조는 아이디어와 메시지가 다양한 매체를 통해 확장되고 연결되는 과정을 상징합니다. "
    },
    {
      id: 1,
      image: Symbol2,
      title: "Service Design",
      color: "#FDFF00",
      description: "서비스 디자인은 사용자의 ‘경험’을 설계하는 일입니다. 겹겹이 쌓인 원형 구조는 중심에서 바깥으로 확장되는 여정을 상징하며, 사용자를 중심으로 다양한 접점과 관계가 유기적으로 이어지는 시스템을 나타냅니다. 단순하지만 반복적인 원의 흐름은 지속적인 개선과 확장을 통해 안정적인 경험을 만들어내는 서비스 디자인의 본질을 표현합니다."
    },
    {
      id: 2,
      image: Symbol3,
      title: "UX Design",
      color: "#945AFF",
      description: "UX/UI 디자인은 사용자의 ‘흐름’을 설계하는 과정입니다. 교차된 선이 만든 구조는 길과 방향을 상징하며, 사용자가 화면 속에서 선택과 결정을 반복해 나아가는 과정을 나타냅니다. 원 안에서 교차된 형태는 복잡한 시스템 안에서도 명확한 경로를 제시하고, 일관된 흐름과 질서를 만들어내는 UX/UI 디자인의 역할을 드러냅니다."
    },
    {
      id: 3,
      image: Symbol4,
      color: "#FF586F",
      title: "Industrial Design",
      description: "제품 디자인은 ‘구조와 기능’을 탐구하는 작업입니다. 모듈화된 정사각형들이 질서 있게 배열된 격자 구조는 제품이 가진 체계성과 조립적 특성을 상징합니다. 단순한 반복 속에서도 변주를 만들어내는 형태는 기능과 미학이 만나는 순간을 보여주며, 끊임없는 발전과 혁신을 통해 새로운 가능성을 제시하는 제품 디자인의 본질을 담고 있습니다."
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
    <div className="min-h-screen bg-white p-4 flex flex-col items-center">
      {/* Symbols 제목 */}
      <div className="w-full text-left mb-8">
        <h1 className={`${avantGarde.variable} text-[24px] font-normal text-[#1C1C1C]`}>
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
          <div className="relative w-40 h-40">
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
              className={`block w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* 심볼 콘텐츠 */}
      <div className="mt-8 w-full max-w-sm text-center">
        {/* --- THIS IS THE CHANGED PART --- */}
        <div 
          className="border-2 inline-block px-2" 
          style={{ borderColor: currentSymbol.color }}
        >
          <h2 className="text-[16px] font-normal text-[#1C1C1C] pb-2 leading-normal">
            {currentSymbol.title}
          </h2>
        </div>
        <p className="mt-4 text-[12px] font-normal text-[#1C1C1C] leading-[160%] font-[SUIT]">
          {currentSymbol.description}
        </p>
      </div>
    </div>
  );
}
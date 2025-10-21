import React, { useState, useEffect, useRef } from 'react';
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import { avantGarde, suitMedium } from '@/styles/fonts';

// 데이터 부분
const archiveData = [
  { year: '2024', title: 'ONE IN CHRIST', subtitle: '그리스도 안에서 한 몸이 되어 서로 지체가 되었느니라.', verse: '로마서 12:5', titleStyle: { fontFamily: 'Stencil, "Courier New", monospace', letterSpacing: '0.2em' } },
  { year: '2023', title: 'The Truth shall Set You Free', subtitle: '진리를 알지니 진리가 너희를 자유케 하리라', verse: '요한복음 8:32', titleStyle: { fontFamily: 'Georgia, serif', color: '#D95829' } },
  { year: '2022', title: 'Example Title 2022', subtitle: ' 이와 같이 우리 많은 사람이 그리스도 안에서 한 몸이 되어 서로 지체가 되었느니라', verse: '로마서 12장 5절', titleStyle: { fontFamily: 'Georgia, serif' } },
  { year: '2021', title: 'Example Title 2021', subtitle: '그러므로 우리가 낙심하지 아니하노니\n우리의 겉사람은 낡아지나 우리의 속사람은 날로 새로워지도다.', verse: '고린도후서 4장 16절', titleStyle: { fontFamily: 'Georgia, serif' } },
  { year: '2020', title: 'Example Title 2020', subtitle: '그 땅의 백성을 두려워하지 말라 그들은 우리의 먹이라\n그들의 보호자는 그들에게서 떠났고 여호와는 우리와 함께 하시느니라', verse: '민수기 14장 9절', titleStyle: { fontFamily: 'Georgia, serif' } },
];

const SPACING = 350;

export default function Archive() {
  const [activeIndex, setActiveIndex] = useState(0);
  // [수정됨] 1. state에서 angle 제거
  const [positions, setPositions] = useState<{x: number, y: number}[]>([]);
  
  const pathRef = useRef<SVGPathElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const path = pathRef.current;
    const container = scrollContainerRef.current;

    if (!path || !container) {
      return; 
    }
    
    const pathLength = path.getTotalLength();
    const totalContentHeight = (archiveData.length * SPACING) + pathLength;
    setContentHeight(totalContentHeight);

    const handleScroll = () => {
      const currentPath = pathRef.current;
      const currentContainer = scrollContainerRef.current;

      if (!currentContainer || !currentPath) {
        return;
      }
      
      const { scrollTop } = currentContainer;
      const currentPathLength = currentPath.getTotalLength();
      const focalPointDistance = currentPathLength * 0.3;

      const newPositions = archiveData.map((_, index) => {
        const distanceOnPath = focalPointDistance + (index * SPACING) - scrollTop;
        
        if (distanceOnPath > 0 && distanceOnPath < currentPathLength) {
          const point = currentPath.getPointAtLength(distanceOnPath);
          
          // [수정됨] 2. 각도 계산 로직 제거
          return { x: point.x, y: point.y };
        }
        return { x: -1000, y: -1000 };
      });
      setPositions(newPositions);

      const focalPoint = currentPath.getPointAtLength(focalPointDistance); 
      let closestIndex = 0;
      let minDistance = Infinity;
      
      newPositions.forEach((pos, index) => {
        if (pos.x < 0) return;
        const distance = Math.sqrt(Math.pow(pos.x - focalPoint.x, 2) + Math.pow(pos.y - focalPoint.y, 2));
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      setActiveIndex(closestIndex);
    };
    
    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // 1. 최상위 div
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      
      {/* 2. Header (고정) */}
      <div className="flex-shrink-0">
        <Header />
      </div>

      {/* 3. "Archive" 타이틀 (고정) */}
      <div className="w-full p-8 flex-shrink-0">
        <h1 className={`${avantGarde.className} text-[70px] font-normal text-[#1C1C1C]`}>
          Archive
        </h1>
      </div>
      
      {/* 4. 휠 + 스크롤 영역 */}
      <div className="flex-grow relative"> 
        
        {/* 4-1. 휠(SVG) */}
        <svg
          width="658" height="658" viewBox="0 0 658 658" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-24"
        >
          <path ref={pathRef}
            d="M 658 0 A 658 658 0 0 1 0 658"
            stroke="#BBBBBB" strokeWidth="1"
          />
        </svg>

        {/* 4-2. 아이템 컨테이너 */}
        <div className="absolute top-0 left-24"> 
          {archiveData.map((item, index) => {
            const isActive = activeIndex === index;
            const position = positions[index] || { x: -1000, y: -1000 };

            return (
              // 앵커(Anchor) div
              <div
                key={item.year}
                className="absolute"
                style={{
                  top: `${position.y}px`,
                  left: `${position.x}px`,
                  opacity: position.x > -100 ? 1 : 0,
                  zIndex: isActive ? 30 : 20,
                }}
              >
                {/* [수정됨] 3. 점(Dot): top-0 left-0으로 기준점 명시 (휠과 겹치기) */}
                <div
                  className={`absolute top-0 left-0 rounded-full transition-all duration-300 -translate-x-1/2 -translate-y-1/2 z-10 ${
                    isActive ? 'w-3.5 h-3.5 bg-black' : 'w-2 h-2 bg-gray-400'
                  }`}
                  style={{ transform: `translate(-50%, -50%) scale(${isActive ? 1.1 : 1})` }}
                ></div>
                
                {/* 텍스트 컨테이너 (top-0으로 기준점 명시) */}
                <div className="absolute top-0 -translate-y-1/2 left-0 ml-6 flex items-start space-x-6 z-20">
                  {/* [수정됨] 4. 연도 span: rotate 및 transformOrigin 제거 */}
                  <span
                    className={`${avantGarde.className} whitespace-nowrap transition-all duration-300 text-[50px] font-[400]  ${
                      isActive ? 'text-[#1C1C1C]' : 'text-[#BBB]'
                    }`}
                  >
                    {item.year}
                  </span>

                  {/* 상세 정보 */}
                  <div className={`ml-10 mt-3 w-max transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <h2 className="text-5xl font-bold" style={item.titleStyle}>
                      {item.title}
                    </h2>
                    <p className={`${suitMedium.className} mt-7 text-[20px] text-[#000] whitespace-pre-line font-[500]`}>{item.subtitle}</p>
                    <p className={`${suitMedium.className} mt-3 text-[16px] text-[#000] font-[500]`}>{item.verse}</p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 4-3. 보이지 않는 스크롤 컨테이너 */}
        <div 
          ref={scrollContainerRef} 
          className="absolute inset-0 overflow-y-scroll"
        >
          {/* 스크롤 높이를 위한 스페이서 div */}
          <div style={{ height: `${contentHeight}px` }} />
        </div>

      </div> {/* 4. 휠 + 스크롤 영역 끝 */}
      
      {/* 5. Footer (고정) */}
      <div className="flex-shrink-0 relative z-50">
        <Footer />
      </div>
    </div> 
  );
}
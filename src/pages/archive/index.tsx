import React, { useState, useEffect, useRef } from 'react';
import Header from "../../components/Header";
import Footer from '../../components/Footer';

// 데이터 부분
const archiveData = [
  { year: '2024', title: 'ONE IN CHRIST', subtitle: '그리스도 안에서 한 몸이 되어 서로 지체가 되었느니라.', verse: '로마서 12:5', titleStyle: { fontFamily: 'Stencil, "Courier New", monospace', letterSpacing: '0.2em' } },
  { year: '2023', title: 'The Truth shall Set You Free', subtitle: '진리를 알지니 진리가 너희를 자유케 하리라', verse: '요한복음 8:32', titleStyle: { fontFamily: 'Georgia, serif', color: '#D95829' } },
  { year: '2022', title: 'Example Title 2022', subtitle: '여기에 2022년 내용이 들어갑니다.', verse: '성경 구절', titleStyle: { fontFamily: 'Georgia, serif' } },
  { year: '2021', title: 'Example Title 2021', subtitle: '여기에 2021년 내용이 들어갑니다.', verse: '성경 구절', titleStyle: { fontFamily: 'Georgia, serif' } },
];

const SPACING = 350;

export default function Archive() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [positions, setPositions] = useState<{x: number, y: number}[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    
    const pathLength = path.getTotalLength();
    const totalContentHeight = pathLength + (archiveData.length) * SPACING;

    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      const totalScrollableHeight = scrollHeight - clientHeight;
      if (totalScrollableHeight <= 0) return;

      const scrollProgress = scrollTop / totalScrollableHeight;
      const currentScrollDistance = scrollProgress * totalContentHeight;

      const newPositions = archiveData.map((_, index) => {
        const distanceFromTop = pathLength - (index * SPACING) + currentScrollDistance;
        if (distanceFromTop > 0 && distanceFromTop < pathLength) {
          const point = path.getPointAtLength(distanceFromTop);
          return { x: point.x, y: point.y };
        }
        return { x: -1000, y: -1000 };
      });
      setPositions(newPositions);

      const focalPoint = path.getPointAtLength(pathLength * 0.66);
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
    
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeItem = archiveData[activeIndex];

  return (
    <div>
      <Header />
      <div 
        ref={scrollContainerRef} 
        className="h-screen overflow-y-scroll bg-white"
      >
        <div className="relative h-[300vh]"> 
          <div className="sticky top-0 h-screen w-full flex">
            <div className="w-1/3 p-16">
              <h1 className="text-[70px] font-normal text-[#1C1C1C]" style={{ fontFamily: 'AvantGarde Md BT' }}>
                Archive
              </h1>
            </div>
            
            <div className="w-2/3 p-8 relative">
              <svg
                width="658" height="720" viewBox="0 0 518 681" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <path ref={pathRef}
                  d="M-141 720C222.403 720 517 425.403 517 62C516 45.3333 514 12 511.5 0.5"
                  stroke="#BBBBBB" strokeWidth="1"
                />
              </svg>

              <div className="absolute top-1/4 left-[5%] w-1/2 z-30">
                <div key={activeIndex} className="animate-fade-in">
                  <h2 className="text-5xl font-bold" style={activeItem.titleStyle}>
                    {activeItem.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-700">{activeItem.subtitle}</p>
                  <p className="mt-2 text-md text-gray-500">{activeItem.verse}</p>
                </div>
              </div>

              {/* === 여기가 핵심 수정 부분입니다 === */}
              <div className="relative w-full h-full">
                {archiveData.map((item, index) => {
                  const isActive = activeIndex === index;
                  const position = positions[index] || { x: -1000, y: -1000 };

                  return (
                    // 1. 보이지 않는 기준점(Anchor)을 선 위에 위치시킵니다.
                    <div
                      key={item.year}
                      className="absolute"
                      style={{
                        top: `${position.y}px`,
                        left: `${position.x}px`,
                        transition: 'top 0.1s linear, left 0.1s linear',
                        opacity: position.x > -100 ? 1 : 0,
                      }}
                    >
                      {/* 2. 점(Dot)을 기준점의 정중앙에 위치시킵니다. */}
                      <div
                        className={`absolute rounded-full transition-all duration-300 -translate-x-1/2 -translate-y-1/2 z-20 ${
                          isActive ? 'w-3.5 h-3.5 bg-black' : 'w-2 h-2 bg-gray-400'
                        }`}
                        style={{ transform: `translate(-50%, -50%) scale(${isActive ? 1.1 : 1})` }}
                      ></div>

                      {/* 3. 글자(Year)를 점 바로 옆에 위치시킵니다. */}
                      <span
                        className={`absolute -translate-y-1/2 ml-4 whitespace-nowrap transition-all duration-300 z-20 ${
                          isActive ? 'text-5xl font-bold text-black' : 'text-2xl text-gray-400'
                        }`}
                        style={{ transform: `translateY(-50%) scale(${isActive ? 1.1 : 1})` }}
                      >
                        {item.year}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
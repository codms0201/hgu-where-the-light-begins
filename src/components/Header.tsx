import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'; // useRouter 임포트
import { avantGarde } from '@/styles/fonts';
import { ITCavantGarde } from '@/styles/fonts';

interface NavigationItem {
  name: string;
  path: string;
  angle: number;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const enterTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // useRouter 훅을 사용하여 pathname을 직접 가져옵니다.
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    // currentPath 설정 로직은 제거됨
    // 타이머 클린업 로직만 남김
    return () => {
      if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []); // 의존성 배열은 비워 둡니다.

  const navigationItems: NavigationItem[] = [
    { name: 'ABOUT', path: '/about', angle: 180 },
    { name: 'WORKS', path: '/works', angle: 155 },
    { name: 'DESIGNERS', path: '/designers', angle: 120 },
    { name: 'ARCHIVE', path: '/archive', angle: 90 }
  ];

  const handleLogoClick = (): void => {
    // window.location.href 대신 router.push를 사용하는 것이 Next.js 방식에 더 적합합니다.
    router.push('/');
  };

  const handleNavClick = (path: string): void => {
    // window.location.href 대신 router.push를 사용합니다.
    router.push(path);
    setIsMenuOpen(false);
  };

  // isCurrentPath 함수는 이제 필요 없습니다. (currentPath를 직접 비교)
  // const isCurrentPath = (path: string): boolean => {
  //   return currentPath === path;
  // };

  const handleHamburgerEnter = () => {
    if (isMenuOpen) {
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
      return;
    }

    setAnimationStep(1);
    setIsMenuOpen(true);
    
    enterTimeoutRef.current = setTimeout(() => {
      setAnimationStep(2);
    }, 200);
  };

  const handleHamburgerLeave = () => {
    if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);

    setAnimationStep(1);
    setIsMenuOpen(false);
    setHoveredItem(null);
    
    leaveTimeoutRef.current = setTimeout(() => {
      setAnimationStep(0);
    }, 200);
  };

  const getBarStyle = (barIndex: number) => {
    const baseStyle = {
      transformOrigin: 'center',
      transition: 'all 0.2s ease-in-out',
    };

    let transform = '';
    
    if (barIndex === 1) {
      if (animationStep === 0) transform = 'translateY(calc(-50% - 12px))';
      else if (animationStep === 1) transform = 'translateY(-50%)';
      else if (animationStep === 2) transform = 'translateY(-50%) rotate(45deg)';
    } 
    else if (barIndex === 2) { 
      transform = 'translateY(-50%)';
    } 
    else if (barIndex === 3) {
      if (animationStep === 0) transform = 'translateY(calc(-50% + 12px))';
      else if (animationStep === 1) transform = 'translateY(-50%)';
      else if (animationStep === 2) transform = 'translateY(-50%) rotate(-45deg)';
    } 
    else if (barIndex === 4) {
      if (animationStep === 0) transform = 'translateY(-50%) scaleY(0)';
      else if (animationStep === 1) transform = 'translateY(-50%) scaleY(0)';
      else if (animationStep === 2) transform = 'translateY(-50%) rotate(90deg) scaleY(1)';
    }

    return { ...baseStyle, transform };
  };

  const getMenuItemStyle = (angle: number, index: number) => {
    const baseRadius = 50;
    const textLengths = { 'ABOUT': 120, 'WORKS': 140, 'DESIGNERS': 130, 'ARCHIVE': 90 };
    const itemName = navigationItems[index].name;
    const adjustedRadius = baseRadius + (textLengths[itemName as keyof typeof textLengths] / 2);
    const radian = (angle * Math.PI) / 180;
    // eslint-disable-next-line prefer-const
    let x = Math.cos(radian) * adjustedRadius;
    // eslint-disable-next-line prefer-const
    let y = Math.sin(radian) * adjustedRadius;
    if (itemName === 'ARCHIVE') {
      x -= 30;
    }
    if (itemName === 'DESIGNERS') {
      x -= 45;
    }
    const tiltAngle = angle - 180;

    return {
      transform: isMenuOpen
        ? `translate(${x}px, ${y}px) rotate(${tiltAngle}deg) scale(1)`
        : 'translate(0px, 0px) scale(0)',
      transformOrigin: 'center',
      transition: 'transform 0.3s ease-in-out',
      transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
    };
  };

  return (
    <>
      <header className="flex items-center justify-between pt-1 pb-12 pr-8 pl-8 bg-white relative z-50 w-full">
        {currentPath !== '/' ? (
          <div 
            className="flex items-center cursor-pointer" 
            onClick={handleLogoClick}
          >
            <div className={`${avantGarde.className} bg-[#00FF36] px-1 text-[#1C1C1C] text-[28px] font-normal transition-colors`}>
              Where
            </div>
            <div className={`${avantGarde.className} bg-[#00FF36] px-1 mt-10 text-[#1C1C1C] text-[28px] font-normal transition-colors`}>The</div>
            <div className={`${avantGarde.className} bg-[#00FF36] px-1 mb-3 text-[#1C1C1C] text-[28px] font-normal transition-colors`}>Light</div>
            <div className={`${avantGarde.className} bg-[#00FF36] px-1 mt-13 text-[#1C1C1C] text-[28px] font-normal transition-colors`}>Begins</div>
          </div>
        ) : (
          <div 
            className="flex items-center"
            aria-hidden="true"
            style={{ visibility: 'hidden' }} 
          >
            <div className={`${avantGarde.className} bg-[#00FF36] px-1 text-[#1C1C1C] text-[28px] font-normal transition-colors`}>
              Where
            </div>
            <div className={`${avantGarde.className} bg-[#00FF36] px-1 mt-10 text-[#1C1C1C] text-[28px] font-normal transition-colors`}>The</div>
            <div className={`${avantGarde.className} bg-[#00FF36] px-1 mb-3 text-[#1C1C1C] text-[28px] font-normal transition-colors`}>Light</div>
            <div className={`${avantGarde.className} bg-[#00FF36] px-1 mt-13 text-[#1C1C1C] text-[28px] font-normal transition-colors`}>Begins</div>
          </div>
        )}
        {currentPath === '/' && (
          <div className="absolute top-8 left-8 z-20">
            <h2 className={`${ITCavantGarde.className} text-[25.926px] text-[#121212] font-[300]`}
            style={{
              lineHeight: '150%',
              letterSpacing: '-0.285px',
            }}>
              2025 HANDONG GLOBAL UNIVERSITY
              <br />
              CONTENTS CONVERGENCE DESIGN GRADUATION EXHIBITION
            </h2>
          </div>
        )}
        <div 
          onMouseLeave={handleHamburgerLeave}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: '87px',
              height: '87px',
              backgroundColor:'transparent',
              right: '24px',
              top: '43%',
              transform: 'translateY(-50%)',
              pointerEvents: isMenuOpen ? 'auto' : 'none',
              zIndex: 10,
            }}
          />
          <div className="flex items-center relative h-full w-full">
            {navigationItems.map((item, index) => (
              <button
                key={`radial-${item.name}`}
                onClick={() => handleNavClick(item.path)}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`${avantGarde.variable} absolute font-normal text-[18px] whitespace-nowrap transition-all ${
                  hoveredItem === item.name ? 'text-[#00FF36]' : 'text-[#1C1C1C]'
                } ${isMenuOpen ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'}`}
                style={{
                  ...getMenuItemStyle(item.angle, index),
                  padding: '4px 12px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  transition: 'color 0.2s ease-in-out, transform 0.3s ease-in-out',
                  zIndex: 20,
                }}
              >
                {item.name}
              </button>
            ))}
            <div 
              className="relative z-30 flex items-center justify-center h-full ml-auto"
              onMouseEnter={handleHamburgerEnter}
            >
              <div
                className="w-10 h-10 relative flex items-center justify-center group cursor-pointer"
                aria-label="Toggle Menu"
              >
                <div className="w-[39.5px] h-[24px] relative">
                  <span
                    className="block absolute h-[4px] w-full bg-black top-1/2 left-0"
                    style={getBarStyle(1)}
                  ></span>
                  <span
                    className="block absolute h-[4px] w-full bg-black top-1/2 left-0"
                    style={getBarStyle(2)}
                  ></span>
                  <span
                    className="block absolute h-[4px] w-full bg-black top-1/2 left-0"
                    style={getBarStyle(3)}
                  ></span>
                  <span
                    className="block absolute h-[4px] w-full bg-black top-1/C1C1C top-1/2 left-0" // 오타 수정: bg-black
                    style={getBarStyle(4)}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
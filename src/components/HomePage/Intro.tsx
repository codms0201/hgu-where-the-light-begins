import React, { useState, useEffect } from 'react';
import { ITCavantGarde } from '@/styles/fonts';

const quadrantData = [
  { id: 1, title: 'Project One', imageSrc: '/img/home/CommunicationDesign.svg', baseWidth: 1090, baseHeight: 1090, color: '#37F6FF', designType: 'COMMUNICATION DESIGN' },
  { id: 2, title: 'Project Two', imageSrc: '/img/home/ServiceDesign.svg', baseWidth: 1095, baseHeight: 1095, color: '#FDFF00', designType: 'SERVICE DESIGN' },
  { id: 3, title: 'Project Three', imageSrc: '/img/home/UXDesign.svg', baseWidth: 1090, baseHeight: 1090, color: '#945AFF', designType: 'UX DESIGN' },
  { id: 4, title: 'Project Four', imageSrc: '/img/home/IndustrialDesign.svg', baseWidth: 1090, baseHeight: 1090, color: '#FF586F', designType: 'INDUSTRIAL DESIGN' },
];

const Intro = () => {
  const [currentColor, setCurrentColor] = useState('#00FF36');
  const [scale, setScale] = useState(1);
  const [boxOffsets, setBoxOffsets] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);
  const animationFrameRef = React.useRef<number | null>(null);
  const [hoveredQuadrantIndex, setHoveredQuadrantIndex] = useState<number | null>(null);
  const [hoveredDesignType, setHoveredDesignType] = useState<string | null>(null);

  const BASE_WIDTH = 1600;
  const BASE_POSITIONS = [
    { top: -97, left: 510 },
    { top: -102, left: 510 },
    { top: -97, left: 513 },
    { top: -97, left: 511 }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        const newScale = window.innerWidth / BASE_WIDTH;
        setScale(newScale); 
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBorderCircleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;

    const circle = e.currentTarget;
    const rect = circle.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = mouseX - centerX;
    const deltaY = centerY - mouseY;
    
    const angleRad = Math.atan2(deltaY, deltaX); 
    let angleDeg = angleRad * (180 / Math.PI);
    
    if (angleDeg < 0) {
      angleDeg += 360;
    }
    
    let targetIndex: number | null = null; 

    if ((angleDeg >= 0 && angleDeg < 80) || (angleDeg >= 350 && angleDeg < 360)) {
      targetIndex = 1;
    } else if (angleDeg >= 80 && angleDeg < 170) {
      targetIndex = 0;
    } else if (angleDeg >= 170 && angleDeg < 260) {
      targetIndex = 3;
    } else {
      targetIndex = 2;
    }

    if (targetIndex !== hoveredQuadrantIndex) {
      setHoveredQuadrantIndex(targetIndex);
      if (targetIndex !== null) {
        setCurrentColor(quadrantData[targetIndex].color);
        setHoveredDesignType(quadrantData[targetIndex].designType); 
      }
    }
  };

  const handleBorderCircleMouseLeave = () => {
    if (window.innerWidth < 1024) return;
    setHoveredQuadrantIndex(null);
    setCurrentColor('#00FF36');
    setHoveredDesignType(null);
  };

  const handleBoxMouseMove = (e: React.MouseEvent<HTMLDivElement>, boxIndex: number) => {
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const boxCenterX = rect.left + rect.width / 2;
      const boxCenterY = rect.top + rect.height / 2;
      
      const deltaX = boxCenterX - mouseX;
      const deltaY = boxCenterY - mouseY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distance < 1) return;
      
      const maxOffset = 80;
      const offsetMultiplier = Math.min(distance / 150, 1);
      
      const normalizedX = deltaX / distance;
      const normalizedY = deltaY / distance;
      
      const newOffsetX = normalizedX * maxOffset * offsetMultiplier;
      const newOffsetY = normalizedY * maxOffset * offsetMultiplier;
      
      setBoxOffsets(prev => {
        const newOffsets = [...prev];
        newOffsets[boxIndex] = { x: newOffsetX, y: newOffsetY };
        return newOffsets;
      });
    });
  };

  const handleBoxMouseLeave = (boxIndex: number) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    setBoxOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[boxIndex] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const isAnyQuadrantHovered = hoveredQuadrantIndex !== null; 

  const BORDER_CIRCLE_SIZE = 1090;
  const BORDER_CIRCLE_TOP_OFFSET = 138;
  const BORDER_CIRCLE_LEFT_OFFSET = -660;

  const DESIGN_BOX_TOP = 448; 
  const DESIGN_BOX_LEFT = 1055; 
  
  const CIRCLE_TOP = -5; 
  const CIRCLE_LEFT = -5;

  return (
    <section 
      className={`relative w-full bg-transparent h-240 flex justify-center items-center overflow-visible -mt-37`}
    >
      {/* Background image layer (z-10) */}
      <div className="absolute inset-0 z-10 hidden lg:block pointer-events-none">
        <img
          src="/img/home/Blue_radial.svg"
          alt="Main Radial"
          className="absolute transition-opacity duration-300 ease-in-out"
          style={{
            top: `${-97 * scale}px`,
            right: `${-1 * scale}px`,
            width: `${1090 * scale}px`,
            height: `${1090 * scale}px`,
            opacity: hoveredQuadrantIndex === null ? 1 : 0,
          }}
        />

        {/* 보더 원 - 마우스 이벤트 감지 */}
        <div 
          className="absolute rounded-full border border-transparent overflow-hidden"
          style={{ 
            width: `${BORDER_CIRCLE_SIZE * scale}px`, 
            height: `${BORDER_CIRCLE_SIZE * scale}px`, 
            top: `${(40 - BORDER_CIRCLE_TOP_OFFSET) * scale}px`, 
            left: `${(-150 - BORDER_CIRCLE_LEFT_OFFSET) * scale}px`, 
            zIndex: 31, 
            pointerEvents: 'auto',
          }}
          onMouseMove={handleBorderCircleMouseMove} 
          onMouseLeave={handleBorderCircleMouseLeave}
        >
        </div>
      </div>

      {/* 호버 이미지들 - 스케일 적용 */}
      <div className="absolute inset-0 z-50 overflow-visible hidden lg:block pointer-events-none">
        {quadrantData.map((item, index) => {
          const isVisible = hoveredQuadrantIndex === index;
          const basePos = BASE_POSITIONS[index];
          
          const scaledTop = basePos.top * scale;
          const scaledLeft = basePos.left * scale;
          const scaledWidth = item.baseWidth * scale;
          const scaledHeight = item.baseHeight * scale;
          
          return (
            <div 
              key={item.id} 
              className="absolute transition-opacity duration-300" 
              style={{
                top: `${scaledTop}px`,
                left: `${scaledLeft}px`,
                width: `${scaledWidth}px`,
                height: `${scaledHeight}px`,
                transformOrigin: 'center',
                opacity: isVisible ? 1 : 0,
                pointerEvents: 'none' 
              }}
            >
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-full cursor-pointer"
              />
            </div>
          );
        })}
      </div>

      {/* Design Type Box 및 원 */}
      {hoveredDesignType && (
        <div className="absolute hidden lg:block z-[999]" style={{ 
          top: `${DESIGN_BOX_TOP * scale}px`, 
          left: `${DESIGN_BOX_LEFT * scale}px`, 
          pointerEvents: 'none',
          transition: 'opacity 300ms ease-in-out',
          opacity: isAnyQuadrantHovered ? 1 : 0,
        }}>
          {/* 14px 원 */}
          <div 
            className="absolute rounded-full transition-colors duration-300" 
            style={{ 
              backgroundColor: currentColor,
              top: `${CIRCLE_TOP * scale}px`,
              left: `${CIRCLE_LEFT * scale}px`,
              width: `${14 * scale}px`,
              height: `${14 * scale}px`,
            }}
          ></div>

          {/* 텍스트 박스 */}
          <div 
            className="inline-block transition-colors duration-300 text-[#1C1C1C]"
            style={{ 
              background: currentColor,
              padding: `${8 * scale}px ${24 * scale}px`,
            }}
          >
            <p className={`${ITCavantGarde.className}`} style={{
              fontSize: `${30 * scale}px`,
              fontWeight: 500,
              margin: 0,
            }}>
              {hoveredDesignType}
            </p>
          </div>
        </div>
      )}

      {/* 텍스트 박스 */}
      <div className="z-[999] hidden lg:block pointer-events-none" style={{
        width: `${800 * scale}px`,
        height: `${600 * scale}px`,
      }}>
        <div 
          className="absolute flex justify-center items-center transition-all duration-500 ease-out pointer-events-auto bg-white" 
          style={{ 
            top: `${180 * scale}px`,
            left: `${100 * scale}px`,
            height: `${133 * scale}px`,
            borderWidth: `${2 * scale}px`,
            borderColor: currentColor,
            borderStyle: 'solid',
            paddingLeft: `${24 * scale}px`,
            paddingRight: `${24 * scale}px`,
            transform: `translate(${boxOffsets[0].x}px, ${boxOffsets[0].y}px)`
          }}
          onMouseMove={(e) => handleBoxMouseMove(e, 0)}
          onMouseLeave={() => handleBoxMouseLeave(0)}
        >
          <div className="absolute z-10 transition-colors duration-300" style={{ 
            borderColor: currentColor,
            top: `${-4 * scale}px`,
            left: `${-4 * scale}px`,
            width: `${8 * scale}px`,
            height: `${8 * scale}px`,
            backgroundColor: '#fff',
            borderWidth: `${2 * scale}px`,
            borderStyle: 'solid',
          }}></div>
          <div className="absolute z-10 transition-colors duration-300" style={{ 
            borderColor: currentColor,
            top: `${-4 * scale}px`,
            right: `${-4 * scale}px`,
            width: `${8 * scale}px`,
            height: `${8 * scale}px`,
            backgroundColor: '#fff',
            borderWidth: `${2 * scale}px`,
            borderStyle: 'solid',
          }}></div>
          <div className="absolute z-10 transition-colors duration-300" style={{ 
            borderColor: currentColor,
            bottom: `${-4 * scale}px`,
            left: `${-4 * scale}px`,
            width: `${8 * scale}px`,
            height: `${8 * scale}px`,
            backgroundColor: '#fff',
            borderWidth: `${2 * scale}px`,
            borderStyle: 'solid',
          }}></div>
          <div className="absolute z-10 transition-colors duration-300" style={{ 
            borderColor: currentColor,
            bottom: `${-4 * scale}px`,
            right: `${-4 * scale}px`,
            width: `${8 * scale}px`,
            height: `${8 * scale}px`,
            backgroundColor: '#fff',
            borderWidth: `${2 * scale}px`,
            borderStyle: 'solid',
          }}></div>
          <h1 style={{ 
            fontSize: `${112.346 * scale}px`,
            fontWeight: 'normal',
            color: '#222',
            margin: 0,
          }}>Where</h1>
        </div>

        <div 
          className="absolute z-[1000] flex justify-center items-center transition-all duration-500 ease-out pointer-events-auto bg-white" 
          style={{ 
            top: `${290 * scale}px`,
            left: `${250 * scale}px`,
            height: `${133 * scale}px`,
            borderWidth: `${2 * scale}px`,
            borderColor: currentColor,
            borderStyle: 'solid',
            paddingLeft: `${24 * scale}px`,
            paddingRight: `${24 * scale}px`,
            transform: `translate(${boxOffsets[1].x}px, ${boxOffsets[1].y}px)`
          }}
          onMouseMove={(e) => handleBoxMouseMove(e, 1)}
          onMouseLeave={() => handleBoxMouseLeave(1)}
        >
          <div className="absolute z-10 transition-colors duration-300" style={{ 
            borderColor: currentColor,
            top: `${-4 * scale}px`,
            left: `${-4 * scale}px`,
            width: `${8 * scale}px`,
            height: `${8 * scale}px`,
            backgroundColor: '#fff',
            borderWidth: `${2 * scale}px`,
            borderStyle: 'solid',
          }}></div>
          <div className="absolute z-10 transition-colors duration-300" style={{ 
            borderColor: currentColor,
            top: `${-4 * scale}px`,
            right: `${-4 * scale}px`,
            width: `${8 * scale}px`,
            height: `${8 * scale}px`,
            backgroundColor: '#fff',
            borderWidth: `${2 * scale}px`,
            borderStyle: 'solid',
          }}></div>
          <div className="absolute z-10 transition-colors duration-300" style={{ 
            borderColor: currentColor,
            bottom: `${-4 * scale}px`,
            left: `${-4 * scale}px`,
            width: `${8 * scale}px`,
            height: `${8 * scale}px`,
            backgroundColor: '#fff',
            borderWidth: `${2 * scale}px`,
            borderStyle: 'solid',
          }}></div>
          <div className="absolute z-10 transition-colors duration-300" style={{ 
            borderColor: currentColor,
            bottom: `${-4 * scale}px`,
            right: `${-4 * scale}px`,
            width: `${8 * scale}px`,
            height: `${8 * scale}px`,
            backgroundColor: '#fff',
            borderWidth: `${2 * scale}px`,
            borderStyle: 'solid',
          }}></div>
          <h1 style={{ 
            fontSize: `${112.346 * scale}px`,
            fontWeight: 'normal',
            color: '#222',
            margin: 0,
          }}>The Light</h1>
        </div>

        <div 
          className="absolute flex justify-center items-center transition-all duration-500 ease-out pointer-events-auto bg-white" 
          style={{ 
            top: `${400 * scale}px`,
            left: `${150 * scale}px`,
            height: `${133 * scale}px`,
            borderWidth: `${2 * scale}px`,
            borderColor: currentColor,
            borderStyle: 'solid',
            paddingLeft: `${24 * scale}px`,
            paddingRight: `${24 * scale}px`,
            transform: `translate(${boxOffsets[2].x}px, ${boxOffsets[2].y}px)`
          }}
          onMouseMove={(e) => handleBoxMouseMove(e, 2)}
          onMouseLeave={() => handleBoxMouseLeave(2)}
        >
          <div className="absolute z-10 transition-colors duration-300" style={{ 
            borderColor: currentColor,
            top: `${-4 * scale}px`,
            left: `${-4 * scale}px`,
            width: `${8 * scale}px`,
            height: `${8 * scale}px`,
            backgroundColor: '#fff',
            borderWidth: `${2 * scale}px`,
            borderStyle: 'solid',
          }}></div>
          <div className="absolute z-10 transition-colors duration-300" style={{ 
            borderColor: currentColor,
            top: `${-4 * scale}px`,
            right: `${-4 * scale}px`,
            width: `${8 * scale}px`,
            height: `${8 * scale}px`,
            backgroundColor: '#fff',
            borderWidth: `${2 * scale}px`,
            borderStyle: 'solid',
          }}></div>
          <div className="absolute z-10 transition-colors duration-300" style={{ 
            borderColor: currentColor,
            bottom: `${-4 * scale}px`,
            left: `${-4 * scale}px`,
            width: `${8 * scale}px`,
            height: `${8 * scale}px`,
            backgroundColor: '#fff',
            borderWidth: `${2 * scale}px`,
            borderStyle: 'solid',
          }}></div>
          <div className="absolute z-10 transition-colors duration-300" style={{ 
            borderColor: currentColor,
            bottom: `${-4 * scale}px`,
            right: `${-4 * scale}px`,
            width: `${8 * scale}px`,
            height: `${8 * scale}px`,
            backgroundColor: '#fff',
            borderWidth: `${2 * scale}px`,
            borderStyle: 'solid',
          }}></div>
          <h1 style={{ 
            fontSize: `${112.346 * scale}px`,
            fontWeight: 'normal',
            color: '#222',
            margin: 0,
          }}>Begins</h1>
        </div>
      </div>

      {/* Date Box */}
      <div className={`hidden lg:block lg:absolute w-full lg:w-auto z-20 transition-opacity duration-300 ${isAnyQuadrantHovered ? 'opacity-0' : 'opacity-100'}`}
        style={{
          bottom: `${240 * scale}px`,
          right: `${96 * scale}px`,
        }}>
        <div className="relative">
          <span className="absolute transition-colors duration-300 text-black font-bold" style={{ 
            backgroundColor: currentColor,
            top: `${-36 * scale}px`,
            right: `${-50}%`,
            transform: 'translateX(50%)',
            fontSize: `${16 * scale}px`,
            padding: `${6 * scale}px`,
          }}>Date</span>
          <div className="inline-flex flex-col items-end">
            <div className="inline-block transition-colors duration-300" style={{ 
              borderWidth: `${2 * scale}px`,
              borderStyle: 'solid',
              borderColor: currentColor,
              backgroundColor: 'white',
              padding: `${6 * scale}px`,
            }}>
              <p style={{
                fontSize: `${40 * scale}px`,
                fontWeight: 'normal',
                color: 'black',
                lineHeight: 1,
                margin: 0,
              }}>2025.11.05.WED</p>
            </div>
            <div style={{
              width: `${213.5 * scale}px`,
              height: `${4 * scale}px`,
              backgroundColor: 'white',
              zIndex: 10,
              marginTop: `${-2 * scale}px`,
              marginRight: `${2 * scale}px`,
            }}></div>
            <div className="inline-block transition-colors duration-300" style={{ 
              borderWidth: `${2 * scale}px`,
              borderStyle: 'solid',
              borderColor: currentColor,
              backgroundColor: 'white',
              padding: `${6 * scale}px`,
              marginTop: `${-2 * scale}px`,
            }}>
              <p style={{
                fontSize: `${40 * scale}px`,
                fontWeight: 'normal',
                color: 'black',
                lineHeight: 1,
                margin: 0,
              }}>-11.12.TUE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
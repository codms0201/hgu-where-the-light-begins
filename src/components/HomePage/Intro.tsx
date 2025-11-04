import React, { useState , useEffect} from 'react';
import { avantGarde } from '../../styles/fonts';
import { ITCavantGarde } from '../../styles/fonts';
import { suitMedium } from '../../styles/fonts';
import { ProjectOneSVG, ProjectTwoSVG, ProjectThreeSVG, ProjectFourSVG } from './ProjectSVGs';
import Mobile_HeaderBtn from '../../components/mobile_headerBtn';
import bg from '../../img/bg.png'; // 이 import는 남아있지만 사용되지는 않습니다.

const quadrantData = [
  { id: 1, title: 'Project One', Component: ProjectOneSVG, styleClasses: 'bottom-[607px] right-[325px] scale-[205%]', color: '#FFA115', designType: 'COMMUNICATION DESIGN' },
  { id: 2, title: 'Project Two', Component: ProjectTwoSVG, styleClasses: 'bottom-124 left-[767px] w-[614px] scale-[100%]', color: '#FDFF00', designType: 'SERVICE DESIGN' },
  { id: 3, title: 'Project Three', Component: ProjectThreeSVG, styleClasses: 'top-127 left-222 scale-[240%]', color: '#7CFC1B', designType: 'UX DESIGN' },
  { id: 4, title: 'Project Four', Component: ProjectFourSVG, styleClasses: 'bottom-68 right-[313px] scale-[202%]', color: '#FF586F', designType: 'INDUSTRIAL DESIGN' },
];

const Intro = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAnyQuadrantHovered, setIsAnyQuadrantHovered] = useState(false);
  const [currentColor, setCurrentColor] = useState('#00FF36');
  const [boxOffsets, setBoxOffsets] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);
  const animationFrameRef = React.useRef<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageMouseEnter = (index: number) => {
    if (window.innerWidth < 1024) return;
    setHoveredIndex(index);
    setIsAnyQuadrantHovered(true);
    setCurrentColor(quadrantData[index].color);
  };

  const handleImageMouseLeave = () => {
    if (window.innerWidth < 1024) return;
    setHoveredIndex(null);
    setIsAnyQuadrantHovered(false);
    setCurrentColor('#00FF36');
  };

  const handleBoxMouseMove = (e: React.MouseEvent<HTMLDivElement>, boxIndex: number) => {
    // 이벤트 데이터를 미리 추출 (requestAnimationFrame 내부에서 접근 불가능하므로)
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // 이전 애니메이션 프레임 취소
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const boxCenterX = rect.left + rect.width / 2;
      const boxCenterY = rect.top + rect.height / 2;
      
      // 마우스와 박스 중심 사이의 거리 계산
      const deltaX = boxCenterX - mouseX;
      const deltaY = boxCenterY - mouseY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // 거리가 너무 가까우면 최소값 설정하여 떨림 방지
      if (distance < 1) return;
      
      // 거리에 따른 이동 강도 (최대 80px로 증가)
      const maxOffset = 80;
      const offsetMultiplier = Math.min(distance / 150, 1);
      
      // 정규화된 방향 벡터
      const normalizedX = deltaX / distance;
      const normalizedY = deltaY / distance;
      
      // 새로운 offset 계산 (마우스 반대 방향으로)
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
    // 남아있는 애니메이션 프레임 취소
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    setBoxOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[boxIndex] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  return (
    <section 
      className={`relative w-full bg-transparent h-240 flex justify-center items-center overflow-hidden -mt-37`}
    >
      {/* Background image layer (z-10) - 주석 처리됨 */}
      <div className="absolute inset-0 z-10 hidden lg:block">
        {/* [주석 처리됨]
        <img
          src="/img/home/자산 10.svg"
          alt="Main Radial"
          className={`absolute -top-[222px] -right-50 w-auto h-auto transition-opacity duration-300 ease-in-out scale-[70.5%]`} 
        />
        */}
        {/* [주석 처리됨]
        <img
          src="/img/home/Gray_radial.png" 
          alt="Gray Radial"
          className={`absolute -top-[217px] -right-[196px] w-auto h-auto transition-opacity duration-300 ease-in-out scale-[97%] object-cover ease-in-out z-50 opacity-0`} 
        />
        */}
      </div>

      {/* [데스크톱 전용] (z-20) - hidden lg:block */}
      <div className="z-20 w-[800px] h-[600px] hidden lg:block">
        <div 
          className="absolute top-[180px] left-[100px] h-[133px] border-2 flex justify-center items-center px-6 transition-all duration-500 ease-out" 
          style={{ 
            borderColor: currentColor,
            transform: `translate(${boxOffsets[0].x}px, ${boxOffsets[0].y}px)`
          }}
          onMouseMove={(e) => handleBoxMouseMove(e, 0)}
          onMouseLeave={() => handleBoxMouseLeave(0)}
        >
          <span className={`${suitMedium.variable} absolute -top-9 left-14 -translate-x-1/2 text-black text-[16px] font-bold p-1.5 transition-colors duration-300`} style={{ backgroundColor: currentColor }}>능력의 서막</span>
          <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <h1 className={`${avantGarde.variable} relative text-[112.346px] font-normal text-[#222]`}>Where</h1>
        </div>
        <div 
          className="absolute z-30 top-[290px] left-[250px] h-[133px] border-2 bg-white flex justify-center items-center px-6 transition-all duration-500 ease-out" 
          style={{ 
            borderColor: currentColor,
            transform: `translate(${boxOffsets[1].x}px, ${boxOffsets[1].y}px)`
          }}
          onMouseMove={(e) => handleBoxMouseMove(e, 1)}
          onMouseLeave={() => handleBoxMouseLeave(1)}
        >
          <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <h1 className={`${avantGarde.variable} relative text-[112.346px] font-normal text-[#222]`}>The Light</h1>
        </div>
        <div 
          className="absolute top-[400px] left-[150px] h-[133px] border-2 bg-white flex justify-center items-center px-6 transition-all duration-500 ease-out" 
          style={{ 
            borderColor: currentColor,
            transform: `translate(${boxOffsets[2].x}px, ${boxOffsets[2].y}px)`
          }}
          onMouseMove={(e) => handleBoxMouseMove(e, 2)}
          onMouseLeave={() => handleBoxMouseLeave(2)}
        >
          <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <h1 className={`${avantGarde.variable} relative text-[112.346px] font-normal text-[#222]`}>Begins</h1>
        </div>
      </div>

      {/* [모바일 전용] (z-20) - block lg:hidden */}
      <div className="block lg:hidden w-full max-w-sm mt-24 z-20">
        
        {/* [수정됨] 세 개의 박스를 감싸는 래퍼를 추가하고 ml-8 (32px)을 적용 */}
        <div className="ml-8">
          {/* "Where" box (h-[54px]) */}
          <div className="relative border-2 bg-white flex justify-center items-center w-40 h-[54px] transition-colors duration-300" style={{ borderColor: currentColor }}>
            <span className={`${suitMedium.variable} absolute -top-[26px] left-9 -translate-x-1/2 text-[#000000] text-[11px] font-[600] p-1 transition-colors duration-300`} style={{ backgroundColor: currentColor }}>능력의 서막</span>
            <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
            <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
            <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
            <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
            <h1 className={`${avantGarde.variable} relative text-[46px] font-[400] text-[#222]`}>Where</h1>
          </div>
          
          {/* "The Light" box (h-[54px], -mt-2 겹치기) */}
          <div className="relative z-30 border-2 bg-white flex justify-center items-center w-52 h-[54px] ml-26 -mt-1 transition-colors duration-300" style={{ borderColor: currentColor }}>
            <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
            <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
            <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
            <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
            <h1 className={`${avantGarde.variable} relative text-[46px] font-[400] text-[#222]`}>The Light</h1>
          </div>

          {/* "Begins" box (h-[54px], -mt-2 겹치기) */}
          <div className="relative border-2 bg-white flex justify-center items-center w-40 h-[54px] ml-6 -mt-1 transition-colors duration-300" style={{ borderColor: currentColor }}>
            <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
            <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
            <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
            <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
            <h1 className={`${avantGarde.variable} relative text-[46px] font-[400] text-[#222]`}>Begins</h1>
          </div>
        </div> {/* [수정됨] 래퍼 종료 */}
        
        
        {/* [모바일 전용 Date Box] - 래퍼 밖에 위치하여 ml-8의 영향을 받지 않음 */}
        <div className={`relative w-full mt-20 z-20`}>
          <div className="relative">
            <span className={`${suitMedium.variable} absolute -top-6 right-[28px] translate-x-1/2 text-black text-xs font-bold p-1 transition-colors duration-300`} style={{ backgroundColor: currentColor }}>Date</span>
            <div className="inline-flex flex-col items-start">
              <div className="ml-44 border-2 inline-block bg-white p-1.5 transition-colors duration-300" style={{ borderColor: currentColor }}>
                <p className={`${suitMedium.variable} text-[24px] font-normal text-black leading-none`}>2025.11.05.WED</p>
              </div>
              <div className="w-[133px] h-1 bg-white z-10 -mt-0.5 ml-[238px]"></div>
              <div className="ml-59 border-2 inline-block bg-white p-1.5 -mt-0.5 transition-colors duration-300" style={{ borderColor: currentColor }}>
                <p className={`${suitMedium.variable} text-[24px] font-normal text-black leading-none`}>-11.12.TUE</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* [데스크톱 전용 Date Box] - hidden lg:block */}
      <div className={`hidden lg:block lg:absolute w-full lg:w-auto lg:bottom-60 lg:right-24 z-20 transition-opacity duration-300 ${isAnyQuadrantHovered ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative">
          <span className={`${suitMedium.variable} absolute -top-5 lg:-top-9 right-[23.3px] translate-x-1/2 text-black text-xs lg:text-[16px] font-bold p-1 lg:p-1.5 transition-colors duration-300`} style={{ backgroundColor: currentColor }}>Date</span>
          <div className="inline-flex flex-col items-start lg:items-end">
            <div className="border-2 inline-block bg-white p-1.5 transition-colors duration-300" style={{ borderColor: currentColor }}>
              <p className={`${suitMedium.variable} text-xl lg:text-[40px] font-normal text-black leading-none`}>2025.11.05.WED</p>
            </div>
            <div className="w-full lg:w-[213.5px] h-1 bg-white z-10 -mt-0.5 mr-0.5"></div>
            <div className="border-2 inline-block bg-white p-1.5 -mt-0.5 transition-colors duration-300" style={{ borderColor: currentColor }}>
              <p className={`${suitMedium.variable} text-xl lg:text-[40px] font-normal text-black leading-none`}>-11.12.TUE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Design Type Label (z-40) - 주석 처리됨 */}
      {hoveredIndex !== null && (
        <div className="absolute top-[405px] left-[945px] z-40 hidden lg:block">
          <div className="relative inline-flex items-center gap-[33px] px-5 py-2 transition-colors duration-300" style={{ backgroundColor: currentColor }}>
            <div className="absolute -top-[7px] -left-[7px] w-[14px] h-[14px] rounded-full transition-colors duration-300" style={{ backgroundColor: currentColor }}></div>
            <span className={`${ITCavantGarde.variable} text-[30px] font-normal text-[#1C1C1C] whitespace-nowrap`}>
              {quadrantData[hoveredIndex].designType}
            </span>
          </div>
        </div>
      )}
      
      {/* Hover images (z-50) - 주석 처리됨 */}
      {/* [주석 처리됨]
      <div className="absolute inset-0 z-50 overflow-visible hidden lg:block">
        {quadrantData.map((item, index) => {
          const SVGComponent = item.Component;
          
          return (
            <div 
              key={item.id} 
              className={`absolute ${item.styleClasses} transition-transform duration-300`}
            >
              <SVGComponent
                className={`w-full h-full transition-opacity duration-300 ease-in-out cursor-pointer pointer-events-auto`}
              />
            </div>
          );
        })}
      </div>
      */}
    </section>
  );
};

export default Intro;
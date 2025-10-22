import React, { useState , useEffect} from 'react';
import { avantGarde } from '../../styles/fonts';
import { ITCavantGarde } from '../../styles/fonts';
import { suitMedium } from '../../styles/fonts';
import { ProjectOneSVG, ProjectTwoSVG, ProjectThreeSVG, ProjectFourSVG } from './ProjectSVGs';
import Mobile_HeaderBtn from '../../components/mobile_headerBtn';

const quadrantData = [
  { id: 1, title: 'Project One', Component: ProjectOneSVG, styleClasses: 'bottom-[405px] right-[242px] w-1/2 scale-[105%]', color: '#FFA115', designType: 'COMMUNICATION DESIGN' },
  { id: 2, title: 'Project Two', Component: ProjectTwoSVG, styleClasses: 'bottom-110 left-[960.5px] w-1/2 scale-[105%]', color: '#FDFF00', designType: 'SERVICE DESIGN' },
  { id: 3, title: 'Project Three', Component: ProjectThreeSVG, styleClasses: 'top-105 left-224 w-1/2 scale-[105%]', color: '#7CFC1B', designType: 'UX DESIGN' },
  { id: 4, title: 'Project Four', Component: ProjectFourSVG, styleClasses: 'bottom-0 right-[230px] w-1/2 scale-[105%]', color: '#FF586F', designType: 'INDUSTRIAL DESIGN' },
];

const Intro = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAnyQuadrantHovered, setIsAnyQuadrantHovered] = useState(false);
  const [currentColor, setCurrentColor] = useState('#00FF36');

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

  return (
    <section 
      // [수정] p-4, min-h-screen, flex-col 제거 -> h-240, flex-row(기본값)로 복귀
      className={`relative w-full bg-white h-240 flex justify-center items-center overflow-hidden`}
    >
      {/* Background image layer (z-0) - 모바일에서 숨김 */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img
          src="/img/home/자산 10.svg"
          alt="Main Radial Background"
          className={`absolute top-[47px] right-30 w-1/2 h-auto rounded-xl scale-[134.5%] object-cover transition-opacity duration-300 ease-in-out ${
            isAnyQuadrantHovered ? 'opacity-0' : 'opacity-100'
          }`} 
        />
        <img
          src="/img/home/Gray_radial.png" 
          alt="Gray Radial Background"
          className={`absolute top-[48px] right-31.5 w-1/2 h-auto rounded-xl scale-[185%] object-cover transition-opacity duration-300 ease-in-out ${
            isAnyQuadrantHovered ? 'opacity-100' : 'opacity-0'
          }`} 
        />
      </div>

      {/* --- UI Layer (z-10, z-20) --- */}
      {/* [수정] 'relative w-full' 제거 -> 'absolute top-8 left-8'로 복귀 */}
      <div className="absolute top-8 left-8 z-20">
        {/* [수정] 폰트 크기 'text-xs' -> 'text-[14px]'로 복귀 */}
        <h2 className={`${ITCavantGarde.variable} text-[14px] lg:text-[20px] tracking-wider text-[#121212]`}>
          2025 HANDONG GLOBAL UNIVERSITY
          <br />
          CONTENTS CONVERGENCE DESIGN<br className="lg:hidden" /> GRADUATION EXHIBITION
        </h2>
      </div>

      {/* 데스크톱 헤더 (top-8 right-8) */}
      <div className="absolute top-8 right-8 z-20 hidden lg:block">
        <button className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* 모바일 헤더 (top-8 right-8) */}
      <div className="absolute top-8 right-8 z-20 block lg:hidden">
        <Mobile_HeaderBtn />
      </div>

      {/* 데스크톱 전용 */}
      <div className="z-10 w-[800px] h-[600px] hidden lg:block">
        <div className="absolute top-[180px] left-[100px] h-[133px] border-2 bg-white flex justify-center items-center px-6 transition-colors duration-300" style={{ borderColor: currentColor }}>
          <span className={`${suitMedium.variable} absolute -top-9 left-14 -translate-x-1/2 text-black text-[16px] font-bold p-1.5 transition-colors duration-300`} style={{ backgroundColor: currentColor }}>능력의 서막</span>
          <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <h1 className={`${avantGarde.variable} relative text-[112.346px] font-normal text-[#222]`}>Where</h1>
        </div>
        <div className="absolute z-20 top-[290px] left-[250px] h-[133px] border-2 bg-white flex justify-center items-center px-6 transition-colors duration-300" style={{ borderColor: currentColor }}>
          <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <h1 className={`${avantGarde.variable} relative text-[112.346px] font-normal text-[#222]`}>The Light</h1>
        </div>
        <div className="absolute top-[400px] left-[150px] h-[133px] border-2 bg-white flex justify-center items-center px-6 transition-colors duration-300" style={{ borderColor: currentColor }}>
          <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <h1 className={`${avantGarde.variable} relative text-[112.346px] font-normal text-[#222]`}>Begins</h1>
        </div>
      </div>

      {/* 모바일 전용 (폰트 크기는 줄인 것 유지) */}
      <div className="block lg:hidden w-full max-w-sm mt-24 z-10">
        <div className="relative border-2 bg-white flex justify-center items-center p-4 transition-colors duration-300" style={{ borderColor: currentColor }}>
          <span className={`${suitMedium.variable} absolute -top-4 left-10 -translate-x-1/2 text-[#000000] text-[11px] font-[600] p-1 transition-colors duration-300`} style={{ backgroundColor: currentColor }}>능력의 서막</span>
          <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <h1 className={`${avantGarde.variable} relative text-[46px] font-[400] text-[#222]`}>Where</h1>
        </div>
        <div className="relative z-20 border-2 bg-white flex justify-center items-center p-4 ml-12 -mt-2 transition-colors duration-300" style={{ borderColor: currentColor }}>
          <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <h1 className={`${avantGarde.variable} relative text-[46px] font-[400] text-[#222]`}>The Light</h1>
        </div>
        <div className="relative border-2 bg-white flex justify-center items-center p-4 ml-6 -mt-2 transition-colors duration-300" style={{ borderColor: currentColor }}>
          <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <h1 className={`${avantGarde.variable} relative text-[46px] font-[400] text-[#222]`}>Begins</h1>
        </div>
      </div>

      {/* --- "Date" Box --- (폰트 크기는 줄인 것 유지) */}
      <div className={`relative lg:absolute w-full lg:w-auto mt-12 lg:mt-0 lg:bottom-60 lg:right-24 z-10 transition-opacity duration-300 ${isAnyQuadrantHovered ? 'opacity-0' : 'opacity-100'}`}>
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

      {/* Design Type Label - 모바일에서 숨김 */}
      {hoveredIndex !== null && (
        <div className="absolute top-[405px] left-[945px] z-10 hidden lg:block">
          <div className="relative inline-flex items-center gap-[33px] px-5 py-2 transition-colors duration-300" style={{ backgroundColor: currentColor }}>
            <div className="absolute -top-[7px] -left-[7px] w-[14px] h-[14px] rounded-full transition-colors duration-300" style={{ backgroundColor: currentColor }}></div>
            <span className={`${ITCavantGarde.variable} text-[30px] font-normal text-[#1C1C1C] whitespace-nowrap`}>
              {quadrantData[hoveredIndex].designType}
            </span>
          </div>
        </div>
      )}
      
      {/* Hover images and detection boxes layer (z-5) - 모바일에서 숨김 */}
      <div className="absolute inset-0 z-5 overflow-visible hidden lg:block">
        {quadrantData.map((item, index) => {
          const SVGComponent = item.Component;
          
          return (
            <div 
              key={item.id} 
              className={`absolute ${item.styleClasses} transition-transform duration-300`}
            >
              <SVGComponent
                className={`w-full h-full transition-opacity duration-300 ease-in-out cursor-pointer pointer-events-auto 
                  ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                `}
                onMouseEnter={() => handleImageMouseEnter(index)}
                onMouseLeave={handleImageMouseLeave}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Intro;
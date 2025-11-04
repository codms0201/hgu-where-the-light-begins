import React from 'react';
import Image from 'next/image';
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import MobileFooter from "../../components/mobile_footer";
import Mobile_HeaderBtn from '../../components/mobile_headerBtn';
import { avantGarde, suitMedium } from '@/styles/fonts';
import logo_2024 from "../../../public/img/archive/2024_degree.svg";

const archiveData = [
  { year: '2024', title: 'ONE IN CHRIST', subtitle: '그리스도 안에서 한 몸이 되어 서로 지체가 되었느니라.', verse: '로마서 12:5', titleStyle: avantGarde.className },
];

export default function Archive() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 데스크톱 헤더 */}
      <div className="hidden lg:block flex-shrink-0">
        <Header />
      </div>
      {/* 모바일 헤더 */}
      <div className="flex lg:hidden items-center justify-between p-4">
        <h1 className={`${avantGarde.className} font-[400] text-[40px] text-[#1C1C1C]`}>Archive</h1>
        <Mobile_HeaderBtn />
      </div>

      {/* 데스크톱 뷰 */}
      <div className="hidden lg:block flex-grow p-8 flex flex-col">
        <h1 className={`${avantGarde.className} font-[400] text-[70px] text-[#1C1C1C]`}>
          Archive
        </h1>
        <div className="relative flex-grow">
          <div className="absolute left-95 top-0 bottom-0 w-0.5 bg-black"></div>
          <div className="ml-72">
            {archiveData.map((item) => (
              <div key={item.year} className="relative pl-12">
                <div className="absolute left-21 top-0 w-[18px] h-[18px] bg-[#1C1C1C] rounded-full"></div>
                <div className="relative h-110 -top-8 ml-28 flex items-baseline space-x-14">
                  {/* 연도 */}
                  <span className={`${avantGarde.className} text-[50px] font-[400] text-[#1C1C1C]`}>
                    {item.year}
                  </span>
                  <div>
                    <a href="https://hguccd2024.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center space-x-3 border-2 border-transparent hover:border-[#00FF36] transition-colors duration-200">
                        {/* 원본 Next.js Image 컴포넌트와 src로 복원 */}
                        <Image
                          src={logo_2024}
                          alt="poster image"
                          width={538}
                          className="object-contain max-w-full h-auto"
                        />
                      </div>
                    </a>

                    {/* 소제목 */}
                    <p className={`${suitMedium.className} mt-5 text-[20px] text-[#1C1C1C] font-[500]`}>
                      {item.subtitle}
                    </p>

                    {/* 구절 */}
                    <p className={`${suitMedium.className} mt-2 text-[16px] text-[#1C1C1C] font-[500]`}>
                      {item.verse}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 모바일 뷰 */}
      <div className="block lg:hidden p-8 flex-grow flex">
        <div className="relative h-140 border-l border-black ml-4 flex-grow">
          {archiveData.map((item) => (
            <div key={item.year} className="relative pl-10 flex flex-col justify-start">
              <div className="absolute -left-[7px] top-0 w-3 h-3 bg-black rounded-full"></div>
              <span className={`${avantGarde.className} -mt-[10px] text-[24px] font-[400] text-[#1C1C1C]`}>
                {item.year}
              </span>
              <a href="https://hguccd2024.netlify.app/" target="_blank" rel="noopener noreferrer">
                <div className="flex items-start">
                  <Image
                    src={logo_2024}
                    alt="poster image"
                    width={242}
                    className="object-contain max-w-full h-auto mt-3"
                  />
                </div>
              </a>
              <p className={`${suitMedium.className} mt-4 text-[12px] text-[#1C1C1C] whitespace-pre-line font-[500]`}>
                {item.subtitle}
              </p>
              <p className={`${suitMedium.className} text-[10px] text-[#1C1C1C] font-[500]`}>
                {item.verse}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden lg:block lg:z-50 flex-shrink-0">
        <Footer />
      </div>
      {/* Mobile Footer */}
      <div className="lg:hidden flex-shrink-0">
        <MobileFooter />
      </div>
    </div>
  );
}
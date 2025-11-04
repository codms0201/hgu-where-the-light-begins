import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { avantGarde } from '@/styles/fonts';
import S1 from "@/img/Sponsers/Yoondesign.svg";
import S2 from "@/img/Sponsers/Yesod.svg";
import S3 from "@/img/Sponsers/Adsland.svg";
import S4 from "@/img/Sponsers/RixFont.svg";
import S5 from "@/img/Sponsers/Moorim.svg";

export default function Sponser() {
  return (
    <div className="mt-28 lg:h-[300px] flex flex-col lg:flex-row p-4 lg:p-8">
      
      {/* Left Section - Title */}
      <div className="w-full lg:w-1/3 flex items-start justify-start">
        <div>
          <h1 className={`${avantGarde.className} text-[24px] lg:text-[70px] font-[400] text-[#1C1C1C]`}>
            Sponsers
          </h1>
        </div>
      </div>
      
      {/* Right Section - Content */}
      <div className="w-full lg:w-2/3 flex flex-col justify-center items-start lg:items-end p-0 lg:p-8 gap-y-4 mt-7 lg:mt-0">
        <div className="flex flex-wrap justify-start lg:justify-center lg:flex-nowrap items-center gap-4 lg:gap-x-14">          
          <Link href="https://yoondesign.com/"> 
            <Image 
              src={S1}
              alt="Yoondesign"
              // 모바일 크기(w-24) 지정, 데스크톱(lg:w-auto)은 자동
              className="object-contain h-auto w-24 lg:w-auto"
            />
          </Link>          
          <Image 
            src={S2}
            alt="Yesod"
            className="object-contain h-auto w-24 lg:w-auto"
          />
        </div>
        <div className="flex flex-wrap justify-start lg:justify-center lg:flex-nowrap items-center gap-4 lg:gap-x-14">
          <Link href="https://www.adsland.com/" className="lg:-mt-3"> 
            <Image 
              src={S3}
              alt="Adsland"
              className="object-contain h-auto w-24 lg:w-auto"
            />
          </Link>
          <Link href="https://www.rixfontcloud.com/?gad_source=1&gad_campaignid=20512970115&gbraid=0AAAAACWCE78OzZLlWXzsKw3hUl-AqfVs6&gclid=CjwKCAjwr8LHBhBKEiwAy47uUlhLnOUBDNlJd3av777ckCs1FMXYmf-3QCrOW3eSWanuGsBSHdZMRoCfjIQAvD_BwE" className="lg:mt-0 lg:mb-0">
            <Image 
              src={S4}
              alt="RixFont"
              className="object-contain h-auto w-24 lg:w-auto"
            />
          </Link>
          <Link href="https://www.moorim.co.kr:13002/" className="mb-2 lg:mb-7"> 
            <Image 
              src={S5}
              alt="Moorim"
              className="object-contain h-auto w-24 lg:w-auto"
            />
          </Link>          
        </div>
      </div>
    </div>
  );
}
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
    <div className="h-[500px] bg-white flex">
      {/* Left Section - Title */}
      <div className="w-1/3 flex items-start justify-start p-8">
        <div>
          <h1 className={`${avantGarde.className} text-[70px] font-[400] text-[#1C1C1C]`}>
            Sponsers
          </h1>
        </div>
      </div>
      
      {/* Right Section - Content */}
      <div className="w-2/3 flex flex-col justify-center items-end p-8 gap-y-10">
        <div className="flex items-center gap-x-14">          
          <Link href="https://yoondesign.com/"> 
            <Image 
              src={S1}
              alt="Yoondesign"
              className="object-contain max-w-full h-auto"
            />
          </Link>          
          <Image 
            src={S2}
            alt="Yesod"
            className="object-contain max-w-full h-auto"
          />
        </div>
        <div className="flex items-center gap-x-14">
          <Link href="https://www.adsland.com/" className="-mt-3"> 
            <Image 
              src={S3}
              alt="Adsland"
              className="object-contain max-w-full h-auto"
            />
          </Link>
          <Link href="https://www.rixfontcloud.com/?gad_source=1&gad_campaignid=20512970115&gbraid=0AAAAACWCE78OzZLlWXzsKw3hUl-AqfVs6&gclid=CjwKCAjwr8LHBhBKEiwAy47uUlhLnOUBDNlJd3av777ckCs1FMXYmf-3QCrOW3eSWanuGsBSHdZMRoCfjIQAvD_BwE" className="mt-0 mb-0">
            <Image 
              src={S4}
              alt="RixFont"
              className="object-contain max-w-full h-auto"
            />
          </Link>
          <Link href="https://www.moorim.co.kr:13002/" className="mb-7"> 
            <Image 
              src={S5}
              alt="Moorim"
              className="object-contain max-w-full h-auto"
            />
          </Link>          
        </div>
      </div>
    </div>
  );
}
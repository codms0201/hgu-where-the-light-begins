import React from 'react';
import Image from 'next/image';
import { avantGarde, suitMedium } from '@/styles/fonts';

import PCS_P from "../../img/박찬송 교수님 1.png";
import LEJ_P from "../../img/이은종 교수님 1.png";
import LJS_P from "../../img/이재선 교수님 1.png";
import LJH_P from "../../img/이주현 교수님 1.png";
import LJS2_P from "../../img/이중섭 교수님 3.png";
import LJG_P from "../../img/이진구 교수님 1.png";
import CIW_P from "../../img/최인욱 교수님 1.png";

const topRowPeople = [
  { name: '박찬송 교수님', img: PCS_P },
  { name: '이은종 교수님', img: LEJ_P },
  { name: '이재선 교수님', img: LJS_P },
  { name: '이주현 교수님', img: LJH_P },
];

const bottomRowPeople = [
  { name: '이중섭 교수님', img: LJS2_P },
  { name: '이진구 교수님', img: LJG_P },
  { name: '최인욱 교수님', img: CIW_P },
];

export default function ThanksTo() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Section - Title */}
      <div className="w-1/3 flex items-start justify-start p-8">
        <div>
          <h1 className={`${avantGarde.className} text-[70px] font-[400] text-[#1C1C1C]`}>
            Thanks to
          </h1>
        </div>
      </div>
      
      {/* Right Section - Content Grid */}
      <div className="w-2/3 flex justify-end p-8 mt-30">
        <div className="flex flex-col gap-y-8">
          {/* 위쪽 행 */}
          <div className="flex flex-row gap-x-4">
            {topRowPeople.map((person) => (
              <div key={person.name} className="flex flex-col items-start gap-4">
                <div>
                  <Image
                    src={person.img}
                    alt={person.name}
                    width={201} 
                    height={239} 
                    className="object-contain"
                  />
                </div>
                <p className={`${suitMedium.className} text-[23.196px] text-[500] text-[#1C1C1C]`}>{person.name}</p>
              </div>
            ))}
          </div>

          {/* 아래쪽 행 */}
          <div className="flex flex-row gap-x-4 justify-end">
            {bottomRowPeople.map((person) => (
              <div key={person.name} className="flex flex-col items-start gap-4">
                <div>
                  <Image
                    src={person.img}
                    alt={person.name}
                    width={201} 
                    height={239} 
                    className="object-contain" 
                  />
                </div>
                <p className={`${suitMedium.className} text-[23.196px] text-[500] text-[#1C1C1C]`}>{person.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
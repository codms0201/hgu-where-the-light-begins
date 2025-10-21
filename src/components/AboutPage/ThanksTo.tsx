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

const allPeople = [...topRowPeople, ...bottomRowPeople];

export default function ThanksTo() {
  return (
    <div className="bg-white flex flex-col lg:flex-row p-4 lg:p-8">
      <div className="w-full lg:w-1/3">
        <div>
          <h1 className={`${avantGarde.className} text-[24px] lg:text-[70px] font-[400] text-[#1C1C1C]`}>
            Thanks to
          </h1>
        </div>
      </div>
      <div className="w-full lg:w-2/3 flex justify-center lg:justify-end mt-8 lg:mt-30">
        <div className="hidden lg:flex flex-col gap-y-8 w-full">
          <div className="flex flex-nowrap justify-end gap-x-4">
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
                <p className={`${suitMedium.className} text-[23.196px] font-[500] text-[#1C1C1C]`}>{person.name}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-nowrap justify-end gap-x-4">
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
                <p className={`${suitMedium.className} text-[23.196px] font-[500] text-[#1C1C1C]`}>{person.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 w-full lg:hidden">
          {allPeople.map((person) => (
            <div key={person.name} className="flex flex-col items-start gap-2">
              <Image
                src={person.img}
                alt={person.name}
                width={201}
                height={239}
                className="object-contain w-full h-auto"
              />
              <p className={`${suitMedium.className} text-[12px] font-[500] text-[#1C1C1C]`}>
                {person.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
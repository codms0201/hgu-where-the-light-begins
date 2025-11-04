import React from 'react';
import Image from 'next/image';
import { avantGarde, suitMedium } from '@/styles/fonts';
import { DOMAIN } from '../../constants/paths';
import { PROFESSOR } from '../../constants/professor';

export default function ThanksTo() {
  const topRowPeople = PROFESSOR.slice(0, 4);
  const bottomRowPeople = PROFESSOR.slice(4);

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8">
      <div className="w-full lg:w-1/3">
        <div>
          <h1 className={`${avantGarde.className} text-[24px] lg:text-[70px] font-[400] text-[#1C1C1C]`}>
            Thanks to
          </h1>
        </div>
      </div>
      <div className="w-full lg:w-2/3 flex justify-center lg:justify-end mt-8 lg:mt-30">
        {/* Desktop view */}
        <div className="hidden lg:flex flex-col gap-y-8 w-full">
          <div className="flex flex-nowrap justify-end gap-x-4">
            {topRowPeople.map((person, index) => (
              <div key={person.id} className="flex flex-col items-start gap-4">
                <div className="relative w-[201px] h-[239px]">
                  <Image
                    src={`${DOMAIN}${person.imgSrc}`}
                    alt={person.name}
                    fill
                    sizes="201px"
                    className="object-contain"
                    quality={95}
                    priority={index < 2}
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                </div>
                <p className={`${suitMedium.className} text-[23.196px] font-[500] text-[#1C1C1C]`}>
                  {person.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-nowrap justify-end gap-x-4">
            {bottomRowPeople.map((person) => (
              <div key={person.id} className="flex flex-col items-start gap-4">
                <div className="relative w-[201px] h-[239px]">
                  <Image
                    src={`${DOMAIN}${person.imgSrc}`}
                    alt={person.name}
                    fill
                    sizes="201px"
                    className="object-contain"
                    quality={95}
                    loading="lazy"
                  />
                </div>
                <p className={`${suitMedium.className} text-[23.196px] font-[500] text-[#1C1C1C]`}>
                  {person.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile view */}
        <div className="grid grid-cols-3 gap-2 w-full lg:hidden">
          {PROFESSOR.map((person, index) => (
            <div key={person.id} className="flex flex-col items-start gap-2">
              <div className="relative w-full aspect-[201/239]">
                <Image
                  src={`${DOMAIN}${person.imgSrc}`}
                  alt={person.name}
                  fill
                  sizes="(max-width: 1024px) 33vw"
                  className="object-contain"
                  quality={95}
                  priority={index < 3}
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
              </div>
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
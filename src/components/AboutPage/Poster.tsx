import React from 'react';
import Image from 'next/image';
import { avantGarde } from '@/styles/fonts';
import { DOMAIN } from '../../constants/paths';

export default function Poster() {
  return (
    <div className="min-h-screen flex mb-30">
      {/* Left Section - Title */}
      <div className="w-1/3 flex items-start justify-start p-8">
        <div>
          <h1 className={`${avantGarde.className} text-[70px] font-[400] text-[#1C1C1C]`}>
            Main Poster
          </h1>
        </div>
      </div>
      
      {/* Right Section - Content */}
      <div className="w-2/3 flex justify-end p-8">
        <div className="relative w-full max-w-[600px] aspect-[3/4]">
          <Image 
            src={`${DOMAIN}images/poster/poster.webp`}
            alt="poster image"
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-contain"
            quality={100}
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
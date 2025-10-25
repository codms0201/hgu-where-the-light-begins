import React from 'react';
import Image from 'next/image';
import PosterImage from '../../img/poster.png';
import { avantGarde } from '@/styles/fonts';

export default function Poster() {
  return (
    <div className="min-h-screen bg-white flex mb-30">
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
        <Image 
          src={PosterImage}
          alt="poster image"
          width={600}
          height={800}
          className="object-contain max-w-full h-auto"
        />
      </div>
    </div>
  );
}
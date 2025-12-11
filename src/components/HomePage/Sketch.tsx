import React from 'react';
import Image from 'next/image';

import { DOMAIN } from '../../constants/paths';
import { SKETCH } from '../../constants/sketch';

import { avantGarde } from '@/styles/fonts';

const sketches = SKETCH;

export default function Sketch() {
  return (
    <div className="min-h-screen px-8 py-24">
      <div className="mb-12">
        <h1 className={`${avantGarde.className} text-[40px] lg:text-[70px] font-[400] text-[#1C1C1C]`}>
          Sketch
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {sketches.map((sketch, index) => (
          <div key={sketch.id} className="w-full">
            <Image 
              src={`${DOMAIN}${sketch.imgSrc}`}
              alt={`Sketch ${sketch.id}`}
              layout="responsive"
              width={600}
              height={800}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
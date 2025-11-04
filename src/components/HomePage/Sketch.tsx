import React from 'react';
import Image from 'next/image';

import Sketch1 from '../../../public/img/home/Sketch_1.png';
import Sketch2 from '../../../public/img/home/Sketch_2.png';
import Sketch3 from '../../../public/img/home/Sketch_3.png';
import Sketch4 from '../../../public/img/home/Sketch_4.png';

import { avantGarde } from '@/styles/fonts';

const sketches = [
  { id: 1, src: Sketch1, alt: 'Sketch image 1' },
  { id: 2, src: Sketch2, alt: 'Sketch image 2' },
  { id: 3, src: Sketch3, alt: 'Sketch image 3' },
  { id: 4, src: Sketch4, alt: 'Sketch image 4' },
];

export default function Sketch() {
  return (
    <div className="min-h-screen px-8 py-24">
      <div className="mb-12">
        <h1 className={`${avantGarde.className} text-[40px] lg:text-[70px] font-[400] text-[#1C1C1C]`}>
          Sketch
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {sketches.map((sketch) => (
          <div key={sketch.id} className="w-full">
            <Image 
              src={sketch.src}
              alt={sketch.alt}
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
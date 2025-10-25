import React from 'react';
import Image from 'next/image';
import PosterImage from '../../img/poster.png';
import { avantGarde } from '@/styles/fonts';
import { suitMedium } from '@/styles/fonts';

export default function Intro() {
  return (
    <div className="min-h-screen bg-white relative p-4 lg:p-0 mb-24">
      <div className="flex flex-col lg:flex-row min-h-screen"> 
        {/* Top/Left Section - Title */}
        <div className="w-full lg:w-1/2 flex items-start justify-start lg:p-8">
          <div>
            {/* Mobile Title */}
            <h1 className={`${avantGarde.className} text-[30px] font-[400] text-[#1C1C1C] lg:hidden`}>
              Where The Light Begins
            </h1>
            
            {/* Desktop Title */}
            <h1 className={`${avantGarde.className} hidden lg:block text-[70px] font-[400] text-[#1C1C1C] leading-[100%]`}>
              Where<br />
              <span className="lg:ml-30">The Light</span><br />
              <span className="lg:ml-12">Begins</span>
            </h1>
          </div>
        </div>
        
        {/* Bottom/Right Section - Content */}
        <div className="w-full lg:w-2/3 flex items-center justify-start lg:p-8">
          <div className="w-full space-y-6 lg:space-y-8 lg:ml-20 mt- 4">
            
            {/* Exhibition Info */}
            <div className="space-y-2">
              <h2 className={`${suitMedium.className} text-[12px] lg:text-[30px] text-[#1C1C1C] font-[500] leading-[normal]`}>
                2025 Handong Global University<br />
                Contents Convergence Design
                <br className="hidden lg:block" /> 
                Graduation Exhibition
              </h2>
            </div>
            
            <div className="mt-6 lg:hidden w-full">
              <Image 
                src={PosterImage} 
                alt="Exhibition Poster" 
                layout="responsive"
                width={700}
                height={1000}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className={`${suitMedium.className} text-[12px] lg:text-[20px] text-[#1C1C1C] leading-[160%] font-[400]`}>
              <p>
                한 줄기의 빛은 투명한 프리즘을 만나 굴절되고, 쪼개지고,<br />
                마침내 여러 색의 결을 드러냅니다. 그 전에는 볼 수 없었던 숨은 색들이,<br />
                단일한 빛 속에 원래부터 존재해 있었음을 깨닫게 되는 순간입니다.
              </p>
              <br />
              <p>
                졸업전시는 바로 그 프리즘과 감습니다.<br />
                네 해 동안 우리는 같은 과정을 지나왔지만, 마지막 관문을 통과하며,<br />
                각자만의 파장과 색채를 띤 존재로 세상 앞에 서게 됩니다.<br />
                사회라는 무대는 결코 직선의 길로만 이루어지지 않았습니다.
              </p>
              <br />
              <p>
                때로는 예리하게 꺾이고, 예상치 못한 방향으로 휘어지며,<br />
                빛마저 사라진 듯한 터널을 지나야 할 때도 있었습니다.<br />
                그러나 그 굴절과 편차 속에서 우리는 더 깊이 각자의 색을 드러낼 것입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
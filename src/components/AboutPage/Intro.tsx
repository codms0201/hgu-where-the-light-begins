import React from 'react';
import Image from 'next/image'; // Image 컴포넌트를 사용하기 위해 import
import PosterImage from '../../img/poster.png'; // 포스터 이미지 import

export default function Intro() {
  return (
    <div className="min-h-screen bg-white relative p-4 lg:p-0">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Top/Left Section - Title */}
        <div className="w-full lg:w-1/2 flex items-start justify-start lg:p-8">
          <div>
            {/* Mobile Title */}
            <h1 className="text-[30px] font-normal text-[#1C1C1C] font-[AvantGarde Md BT] leading-tight lg:hidden">
              Where The Light Begins
            </h1>
            
            {/* Desktop Title */}
            <h1 className="hidden lg:block text-[70px] font-normal text-[#1C1C1C] font-[AvantGarde Md BT] leading-[100%]">
              Where<br />
              <span className="lg:ml-30">The Light</span><br />
              <span className="lg:ml-12">Begins</span>
            </h1>
          </div>
        </div>
        
        {/* Bottom/Right Section - Content */}
        <div className="w-full lg:w-2/3 flex items-center justify-start lg:p-8 mt-8 lg:mt-0">
          <div className="w-full space-y-6 lg:space-y-8 lg:ml-30 lg:mt-40">
            
            {/* Exhibition Info */}
            <div className="space-y-2">
              <h2 className="text-[12px] lg:text-[30px] text-[#1C1C1C] font-suit font-normal">
                2025 Handong Global Univ.<br />
                Content Convergence Design{` `}
                <br className="hidden lg:block" /> 
                Graduation Exhibition
              </h2>
            </div>
            
            {/* --- 👇 여기에 모바일 뷰 전용 포스터 이미지 추가 👇 --- */}
            <div className="mt-6 lg:hidden w-full"> {/* 모바일에서만 보이고 데스크탑에서 숨김 */}
              <Image 
                src={PosterImage} 
                alt="Exhibition Poster" 
                layout="responsive" // 이미지의 반응성을 위해 layout 속성 사용
                width={700} // 원본 이미지의 너비
                height={1000} // 원본 이미지의 높이 (비율 유지)
                className="w-full h-auto object-contain" // 이미지가 컨테이너에 맞게 조절되도록
              />
            </div>
            {/* --- 👆 모바일 뷰 전용 포스터 이미지 끝 👆 --- */}

            {/* Korean Text */}
            <div className="w-full lg:w-3/2 space-y-4 text-base lg:text-[20px] text-[#1C1C1C] leading-relaxed lg:leading-[160%] font-suit font-normal">
              <p>
                한 줄기의 빛은 투명한 프리즘을 만나 굴절되고, 쪼개지고,<br className="hidden lg:block" />
                마침내 여러 색의 결을 드러냅니다. 그 전에는 볼 수 없었던 숨은 색들이,<br className="hidden lg:block" />
                단일한 빛 속에 원래부터 존재해 있었음을 깨닫게 되는 순간입니다.
              </p>
              
              <p>
                졸업전시는 바로 그 프리즘과 감습니다.<br className="hidden lg:block" />
                네 해 동안 우리는 같은 과정을 지나왔지만, 마지막 관문을 통과하며,<br className="hidden lg:block" />
                각자만의 파장과 색채를 띤 존재로 세상 앞에 서게 됩니다.<br className="hidden lg:block" />
                사회라는 무대는 결코 직선의 길로만 이루어지지 않았습니다.
              </p>
              
              <p>
                때로는 예리하게 꺾이고, 예상치 못한 방향으로 휘어지며,<br className="hidden lg:block" />
                빛마저 사라진 듯한 터널을 지나야 할 때도 있었습니다.<br className="hidden lg:block" />
                그러나 그 굴절과 편차 속에서 우리는 더 깊이 각자의 색을 드러낼 것입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
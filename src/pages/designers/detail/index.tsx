import Image from 'next/image';
import Link from 'next/link';
import Header from "../../../components/Header";
import Footer from '../../../components/Footer';
import Mobile_HeaderBtn from "../../../components/mobile_headerBtn";
import MobileFooter from "../../../components/mobile_footer"; // MobileFooter import 확인
import HoverImage from '../../../img/Image.png';
import ArtWork from '../../../img/Artwork.png';
import { suitMedium } from '@/styles/fonts';

export default function DesignerDetailPage() {
  const designer = {
    name: "기은찬",
    email: "EunchanKi@gmail.com",
    description: "디자이너 소개글은 본인이 어떤 종류의 디자이너인지, 어떤 강점을 가지고 있고, 어떤 성과를 이루었는지를 명확히 보여주는 글입니다. 디자이너 소개글은 본인이 어떤 종류의 디자이너인지,.. 디자이너 소개글은 본인이 어떤 종류의 디자이너인지, 어떤 강점을 가지고 있고, 어떤 성과를"
  };

  const portfolioItems = [
    { id: 1, title: "TITLETITLE" },
    { id: 2, title: "TITLETITLE" },
    { id: 3, title: "TITLETITLE" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <Header />
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden items-center justify-between p-4">
        <Link href="/designers" aria-label="Go back to designers">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M15 3L6.5 11.5L15 20" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Link>
        <h1 className={`${suitMedium.className} font-[590] text-[20px] text-[#000000]`}>Designers</h1>
        <Mobile_HeaderBtn />
        
      </div>
      <div className="p-4 lg:p-12">
        <div className="flex flex-col lg:flex-row lg:gap-16 items-start">
          
          {/* Left Column (Mobile: Info + Image) */}
          <div className="w-full lg:w-91">
            <div className="flex flex-row gap-4 lg:flex-col">
              {/* Info Box */}
              <div className="w-1/2 lg:w-full">
                <h1 className={`${suitMedium.className} text-[28px] text-[#1C1C1C] lg:text-[70px] font-[600]`}>
                  {designer.name}
                </h1>
                <p className={`${suitMedium.className} text-[#7C7C7C] text-[11px] lg:text-[24px] font-[400] break-all`}>
                  {designer.email}
                </p>
                {/* Mobile-only Description */}
                <p className={`${suitMedium.className} w-full text-[#1C1C1C] text-[12px] font-[400] leading-[22px] mt-4 lg:hidden`}>
                  {designer.description}
                </p>
              </div>

              {/* Image Box */}
              <div className="w-1/2 lg:w-full">
                <Image 
                    src={HoverImage}
                    alt="Designer profile picture" 
                    width={364}
                    height={546}
                    className="object-cover w-full h-auto lg:mt-[86px]"
                  />
              </div>
            </div>
          </div>
          
          {/* Right Column (Mobile: Portfolio) */}
          <div className="w-full lg:w-7/8">
            {/* Desktop-only Description */}
            <div className="relative w-5/6 hidden lg:block">
              <p className={`${suitMedium.className} w-full text-[#1C1C1C] text-sm lg:text-[24px] font-[500] mt-4`}>
                {designer.description}
              </p>
            </ div>
            <div className="mt-12">
              {/* 모바일: items-center, 데스크톱: items-end */}
              <div className="flex flex-col items-center lg:items-end gap-5">             
                
                {/* First row with one image */}
                {portfolioItems.length > 0 && (
                  <div key={portfolioItems[0].id} className="w-full max-w-[365px]">
                    {/* 모바일 전용 타이틀 (lg:hidden) */}
                    <div className={`${suitMedium.className} w-fit text-[#1C1C1C] bg-[#00FF36] text-[14px] font-[600] mb-2 lg:hidden p-1`}>
                      {portfolioItems[0].title}
                    </div>
                    {/* 이미지 + 데스크톱 호버 래퍼 */}
                    <div className="relative cursor-pointer group w-full">
                      <Image 
                        src={ArtWork} 
                        alt={portfolioItems[0].title} 
                        width={365} 
                        height={274} 
                        className="object-cover w-full h-auto"
                      />
                      {/* 데스크톱 전용 호버 오버레이 (hidden lg:flex) */}
                      <div className="absolute inset-0 hidden lg:flex items-center justify-center border-2 border-transparent group-hover:border-[#00FF36] transition-all duration-300">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`${suitMedium.className} bg-[#00FF36] text-[#1C1C1C] px-3 py-1 text-[16px] font-[600]`}>
                            {portfolioItems[0].title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Second row with two images */}
                {portfolioItems.length > 1 && (
                  <div className="flex flex-col lg:flex-row gap-5 w-full lg:w-auto justify-center lg:justify-end">
                    {portfolioItems.slice(1, 3).map((item) => (
                      <div key={item.id} className="w-full max-w-[365px]">
                        {/* 모바일 전용 타이틀 (lg:hidden) */}
                        <div className={`${suitMedium.className} w-fit text-[#1C1C1C] bg-[#00FF36] text-[14px] font-[600] mb-2 lg:hidden p-1`}>
                          {item.title}
                        </div>
                        <div className="relative cursor-pointer group w-full">
                          <Image 
                            src={ArtWork} 
                            alt={item.title} 
                            width={365} 
                            height={274} 
                            className="object-cover w-full h-auto"
                          />
                          <div className="absolute inset-0 hidden lg:flex items-center justify-center border-2 border-transparent group-hover:border-[#00FF36] transition-all duration-300">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className={`${suitMedium.className} bg-[#00FF36] text-[#1C1C1C] px-3 py-1 text-[16px] font-[600]`}>
                                {item.title}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>            
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <Footer />
      </div>
      {/* Mobile Footer */}
      <div className="lg:hidden">
        <MobileFooter />
      </div>
    </div>
  );
}
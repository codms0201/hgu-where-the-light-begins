import Image from 'next/image';
import Link from 'next/link';
import Header from "../../../components/Header";
import Footer from '../../../components/Footer';
import Mobile_HeaderBtn from "../../../components/mobile_headerBtn";
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
      <div className="flex lg:hidden items-center justify-between p-4 border-b border-gray-200">
        <Link href="/designers" aria-label="Go back to designers">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M15 3L6.5 11.5L15 20" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Link>
        <h1 className={`${suitMedium.className} font-normal text-[20px] tracking-wider`}>Designers</h1>
        <Mobile_HeaderBtn />
        
      </div>
      
      {/* --- CONTENT AREA START --- */}
      <div className="p-4 lg:p-12">
        {/* --- Designer Intro Section --- */}
        <div className="flex flex-row gap-4 lg:gap-16 items-start">
          
          {/* Left Column: Info & Description */}
          <div className="w-91">
            <h1 className={`${suitMedium.className} text-[28px] text-[#1C1C1C] lg:text-[70px] font-[600]`}>
              {designer.name}
            </h1>
            <p className={`${suitMedium.className} text-[#7C7C7C] text-xs lg:text-[24px] font-[500] break-all`}>
              {designer.email}
            </p>
            <Image 
                src={HoverImage}
                alt="Designer profile picture" 
                width={364}
                height={546}
                className="object-cover mt-[86px]"
              />
          </div>

          {/* Right Column: Profile Image */}
          <div className="w-7/8">
            <div className="relative w-5/6">
            <p className={`${suitMedium.className} w-full text-[#1C1C1C] text-sm lg:text-[24px] font-[500] mt-4`}>
              {designer.description}
            </p>
            {/* --- Portfolio Section --- */}
            </ div>
            <div className="mt-12">
              <div className="flex flex-col items-end gap-5"> {/* gap-5 is 20px */}
                
                {/* First row with one image */}
                {portfolioItems.length > 0 && (
                  <div key={portfolioItems[0].id} className="relative cursor-pointer group" style={{ width: '365px', height: '274px' }}>
                    <Image src={ArtWork} alt={portfolioItems[0].title} width={365} height={274} className="object-cover"/>
                    {/* This overlay now handles the border and the title */}
                    <div className="absolute inset-0 flex items-center justify-center border-2 border-transparent group-hover:border-[#00FF36] transition-all duration-300">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className={`${suitMedium.className} bg-[#00FF36] text-[#1C1C1C] px-3 py-1 text-[16px] font-[600]`}>
                          {portfolioItems[0].title}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Second row with two images */}
                {portfolioItems.length > 1 && (
                  <div className="flex flex-row gap-5"> {/* gap-5 is 20px */}
                    {portfolioItems.slice(1, 3).map((item) => (
                      <div key={item.id} className="relative cursor-pointer group" style={{ width: '365px', height: '274px' }}>
                        <Image src={ArtWork} alt={item.title} width={365} height={274} className="object-cover"/>
                        {/* This overlay now handles the border and the title */}
                        <div className="absolute inset-0 flex items-center justify-center border-2 border-transparent group-hover:border-[#00FF36] transition-all duration-300">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className={`${suitMedium.className} bg-[#00FF36] text-[#1C1C1C] px-3 py-1 text-[16px] font-[600]`}>
                              {item.title}
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
      <Footer />
    </div>
  );
}
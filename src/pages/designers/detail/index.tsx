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
    { id: 1, title: "TITLETITLE", description: "경제선 지능 청년을 위한 일자리 경험 서비스", subtitle: "BLEND IN'" },
    { id: 2, title: "TITLETITLE", description: "경제선 지능 청년을 위한 일자리 경험 서비스", subtitle: "BLEND IN'" },
    { id: 3, title: "TITLETITLE", description: "경제선 지능 청년을 위한 일자리 경험 서비스", subtitle: "BLEND IN'" },
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
            <path d="M15 3L6.5 11.5L15 20" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </Link>
        <h1 className={`${suitMedium.variable} font-normal text-[20px] tracking-wider`}>Designers</h1>
        <Mobile_HeaderBtn />
        
      </div>
      
      {/* --- CONTENT AREA START --- */}
      <div className="p-4 lg:p-12">
        {/* --- Designer Intro Section --- */}
        {/* THIS IS THE KEY CHANGE: flex-row is now the default for mobile */}
        <div className="flex flex-row gap-4 lg:gap-16 items-start">
          
          {/* Left Column: Info & Description */}
          <div className="w-1/2">
            <h1 className={`${suitMedium.variable} font-normal text-[28px] text-[#1C1C1C] lg:text-[60px] font-normal leading-tight`}>
              {designer.name}
            </h1>
            <p className="text-[#7C7C7C] font-suit text-xs lg:text-[24px] font-normal mt-1 break-all">
              {designer.email}
            </p>
            <p className="w-full text-[#1C1C1C] font-suit text-sm lg:text-[18px] font-normal mt-4 lg:mt-8">
              {designer.description}
            </p>
          </div>

          {/* Right Column: Profile Image */}
          <div className="w-1/2">
            <div className="relative w-full aspect-square lg:aspect-[4/3]">
              <Image 
                src={HoverImage}
                alt="Designer profile picture" 
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* --- Portfolio Section --- */}
        <div className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="cursor-pointer group">
                <div className="bg-[#00FF36] text-black px-3 py-1 text-sm font-bold inline-block mb-2">
                  {item.title}
                </div>
                <div className="relative w-full aspect-[4/3]">
                  <Image src={ArtWork} alt={item.title} layout="fill" className="object-cover"/>
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-xl">{item.subtitle}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
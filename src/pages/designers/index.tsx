'use client'; 

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '../../components/Footer';
import MobileFooter from '../../components/mobile_footer';
import Mobile_HeaderBtn from '../../components/mobile_headerBtn';
import { avantGarde, suitMedium } from '@/styles/fonts';
import { DESIGNERS } from '../../constants/designers';
import { DOMAIN, PATHS } from '../../constants/paths';

interface Designer {
  id: string; 
  numericId: number; 
  name: string;
  major: string;
}

const categoryToMajorMap: { [key: string]: string } = {
  communication: 'Communication',
  service: 'Service',
  ux: 'UX',
  industrial: 'Industrial',
};

const designersData: Designer[] = DESIGNERS.map((designer: { id: number; nameKo: string; works: { category: string }[] }) => {
  const categories = [...new Set(designer.works.map((work: { category: string }) => work.category))];
  const major = categories
    .map((cat: string) => categoryToMajorMap[cat] || cat.charAt(0).toUpperCase() + cat.slice(1))
    .join(' / ');

  return {
    id: String(designer.id).padStart(3, '0'),
    numericId: designer.id,
    name: designer.nameKo,
    major: major,
  };
});


export default function DesignersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);
  const router = useRouter();

  const filteredDesigners = useMemo(() => {
    return designersData.filter(designer =>
      designer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      designer.id.includes(searchTerm)
    );
  }, [searchTerm]);

  useEffect(() => {
    if (filteredDesigners.length === 1) {
      setHoveredId(filteredDesigners[0].id);
    } else if (filteredDesigners.length === 0) {
      setHoveredId(null);
    } else {
      if (hoveredId !== null && !filteredDesigners.some(d => d.id === hoveredId)) {
        setHoveredId(null);
      }
    }
  }, [filteredDesigners, hoveredId]); 

  const handleDesignerClick = (designerId: number) => {
    router.push(PATHS.DESIGNER_DETAIL.replace(':designerId', String(designerId)));
  };

  return (
    <div className="min-h-screen text-[#1C1C1C] flex flex-col">
      <div className="hidden lg:block lg:sticky lg:top-0 lg:z-50">
        <Header />
      </div>
      <div className="lg:hidden sticky top-0 z-50">
        <header className="flex items-center justify-between p-4">
          <h1 className={`${avantGarde.className} text-[#1C1C1C] text-[40px] font-[400]`}>Designers</h1>
          <div className="flex items-center gap-4">
            <button onClick={() => setMobileSearchOpen(!isMobileSearchOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M9.59961 0.5C14.9015 0.5 19.2 4.79786 19.2002 10.0996L19.1875 10.5938C19.0902 12.5133 18.4279 14.2834 17.3652 15.7432L23.4609 21.8389C24.0467 22.4247 24.0467 23.3752 23.4609 23.9609C22.8753 24.5465 21.9256 24.5462 21.3398 23.9609L15.2432 17.8643C13.6588 19.0178 11.7093 19.7002 9.59961 19.7002L9.10645 19.6875C4.03387 19.4306 0 15.236 0 10.0996C0.000168531 4.79801 4.29795 0.500237 9.59961 0.5ZM9.59961 3.5C5.95477 3.50024 3.00017 6.4549 3 10.0996C3 13.7445 5.95467 16.7 9.59961 16.7002C13.2448 16.7002 16.2002 13.7446 16.2002 10.0996C16.2 6.45475 13.2446 3.5 9.59961 3.5Z" fill="#1C1C1C"/>
              </svg>
            </button>
            <Mobile_HeaderBtn />
          </div>
        </header>
        {isMobileSearchOpen && (
          <div className="p-4 pt-0 relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`${suitMedium.className} w-full text-[20px] text-[#7C7C7C] bg-transparent border-b border-[#7C7C7C] outline-none pb-2 pr-8`}
              autoFocus
            />
            <button
              onClick={() => setMobileSearchOpen(false)}
              className="absolute right-4 top-0 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M8.99707 7.60938L16.5723 0.00195312L17.2812 0.708008L17.9902 1.41309L10.4082 9.02734L17.9902 16.6416L17.2812 17.3467L16.5723 18.0527L8.99707 10.4443L1.4209 18.0547L0.00292969 16.6445L7.58594 9.02734L0.00292969 1.41016L1.4209 0L8.99707 7.60938Z" fill="#1C1C1C"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-1">
        <div className="hidden lg:block w-128 lg:fixed lg:top-[147px] lg:h-[calc(100vh_-_147px)]">
          <div className="h-full flex flex-col p-8">
            <h1 className={`${avantGarde.className} text-[70px] font-normal text-[#1C1C1C]`}>Designers</h1>
            <div>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`${suitMedium.className} w-full text-[50px] font-normal bg-transparent border-none outline-none placeholder-[#BBB]`}
              />
            </div>
            <div className="w-full flex-1 overflow-hidden">
              <div className="relative w-[289px] h-[434px] mt-30">
                {DESIGNERS.map((designer) => {
                  const isActive = String(designer.id).padStart(3, '0') === hoveredId;
                  return (
                    <Image 
                      key={designer.id}
                      src={`${DOMAIN}${designer.img}`} 
                      alt={`${designer.nameKo} preview`} 
                      fill
                      className={`object-contain transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:pt-18 w-full lg:ml-128">
          <div className="lg:px-8">
            <div 
              className="border-b border-[#D2D2D2]"
              onMouseLeave={() => {
                if (filteredDesigners.length !== 1) {
                  setHoveredId(null);
                }
              }}
            >
              {filteredDesigners.map((designer, index) => {
                const isHovered = hoveredId === designer.id;
                const isPreviousHovered = index > 0 && hoveredId === filteredDesigners[index - 1].id;
                return (
                  <div
                    key={designer.id}
                    className={`
                      cursor-pointer border-t transition-colors duration-200
                      ${isHovered || isPreviousHovered ? 'border-[#1C1C1C]' : 'border-[#D2D2D2]'} px-4 lg:px-0
                    `}
                    onMouseEnter={() => setHoveredId(designer.id)}
                    onClick={() => handleDesignerClick(designer.numericId)}
                  >
                    <div className={`py-4 lg:py-5 lg:px-2`}>
                      <div className={`grid items-start grid-cols-[60px_90px_auto] lg:grid-cols-[180px_300px_auto] ${suitMedium.className}`}>
                        <span className={`text-[#1C1C1C] text-[13px] lg:text-[24px] transition-all ${isHovered ? 'font-[600]' : 'font-[400]'}`}>
                          {designer.id}
                        </span>
                        <span className={`text-[#1C1C1C] text-[13px] lg:text-[24px] transition-all ${isHovered ? 'font-[600]' : 'font-[400]'}`}>
                          {designer.name}
                        </span>
                        <span className={`text-[#1C1C1C] text-[13px] lg:text-[24px] transition-all ${isHovered ? 'font-[600]' : 'font-[400]'}`}>
                          {designer.major}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {searchTerm && filteredDesigners.length === 0 && (
              <div className={`${suitMedium.className} text-center py-12 text-[#000]`}>
                일치하는 디자이너를 찾을 수 없습니다. 다른 이름을 시도해보세요.
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* --- 푸터 (변경 없음) --- */}
      <div className="hidden lg:block relative z-50">
        <Footer />
      </div>
      <div className="lg:hidden">
        <MobileFooter />
      </div>
    </div>
  );
}
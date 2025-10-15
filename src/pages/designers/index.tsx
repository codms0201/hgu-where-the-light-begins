import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Mobile_HeaderBtn from '../../components/mobile_headerBtn';
import HoverImage from '../../img/Image.png';
import { avantGarde } from '@/styles/fonts';

interface Designer {
  id: string;
  name: string;
  major: string;
}

// Sample data - You can expand this list
const designersData: Designer[] = [
  { id: '001', name: '강예은', major: 'Communication/Service' },
  { id: '002', name: '강주찬', major: 'UX' },
  { id: '003', name: '강하라', major: 'Communication/Service' },
  { id: '004', name: '권미소', major: 'UX' },
  { id: '005', name: '김민지', major: 'Communication/Service' },
  { id: '006', name: '김수현', major: 'Major' },
  { id: '007', name: '박지원', major: 'Major' },
  { id: '008', name: '이서연', major: 'Major' },
  { id: '009', name: '강예은', major: 'Communication/Service' },
  { id: '010', name: '강주찬', major: 'UX' },
  { id: '011', name: '강하라', major: 'Communication/Service' },
];

export default function DesignersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);
  const router = useRouter();

  const filteredDesigners = useMemo(() => {
    if (!searchTerm.trim()) return designersData;
    return designersData.filter(designer =>
      designer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      designer.id.includes(searchTerm)
    );
  }, [searchTerm]);

  const handleDesignerClick = (designerId: string) => {
    router.push(`/designers/detail`);
  };

  return (
    <div className="min-h-screen bg-white text-[#1C1C1C]">
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <Header />
      </div>

      {/* --- NEW MOBILE HEADER --- */}
      <div className="flex lg:hidden items-center justify-between p-4">
        {isMobileSearchOpen ? (
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full font-suit text-lg bg-transparent border-none outline-none"
            autoFocus
          />
        ) : (
          <h1 className={`${avantGarde.variable} text-#1C1C1C text-[40px] font-normal`}>Designers</h1>
        )}
        <div className="flex items-center gap-4">
          <button onClick={() => setMobileSearchOpen(!isMobileSearchOpen)}>
            {isMobileSearchOpen ? (
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M8.99707 7.60938L16.5723 0.00195312L17.2812 0.708008L17.9902 1.41309L10.4082 9.02734L17.9902 16.6416L17.2812 17.3467L16.5723 18.0527L8.99707 10.4443L1.4209 18.0547L0.00292969 16.6445L7.58594 9.02734L0.00292969 1.41016L1.4209 0L8.99707 7.60938Z" fill="#1C1C1C"/>
              </svg>
            ) : (
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M9.59961 0.5C14.9015 0.5 19.2 4.79786 19.2002 10.0996L19.1875 10.5938C19.0902 12.5133 18.4279 14.2834 17.3652 15.7432L23.4609 21.8389C24.0467 22.4247 24.0467 23.3752 23.4609 23.9609C22.8753 24.5465 21.9256 24.5462 21.3398 23.9609L15.2432 17.8643C13.6588 19.0178 11.7093 19.7002 9.59961 19.7002L9.10645 19.6875C4.03387 19.4306 0 15.236 0 10.0996C0.000168531 4.79801 4.29795 0.500237 9.59961 0.5ZM9.59961 3.5C5.95477 3.50024 3.00017 6.4549 3 10.0996C3 13.7445 5.95467 16.7 9.59961 16.7002C13.2448 16.7002 16.2002 13.7446 16.2002 10.0996C16.2 6.45475 13.2446 3.5 9.59961 3.5Z" fill="#1C1C1C"/>
              </svg>
            )}
          </button>
           {!isMobileSearchOpen && (
              <Mobile_HeaderBtn />
           )}
        </div>
      </div>

      <div className="flex">
        {/* 왼쪽 사이드바 (Desktop only) */}
        <div className="hidden lg:block w-110 p-8 min-h-screen">
          <h1 className="text-[60px] font-normal font-[AvantGarde Md BT]">Designers</h1>
          <div>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-[50px] font-normal font-suit bg-transparent border-none outline-none placeholder-gray-400"
            />
          </div>
          <div className="w-full h-full bg-white">
            {hoveredId && (
              <div className="relative w-4/5 h-full -mt-20">
                <Image src={HoverImage} alt="Designer preview" fill className="object-contain" />
              </div>
            )}
          </div>
        </div>

        {/* 오른쪽 메인 콘텐츠 (Full width on mobile) */}
        <div className="flex-1 bg-white lg:pt-8 w-full">
          <div className="lg:px-8">
            <div className="space-y-0">
              {filteredDesigners.map((designer) => (
                <div
                  key={designer.id}
                  className="cursor-pointer border-b border-gray-200"
                  onMouseEnter={() => setHoveredId(designer.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleDesignerClick(designer.id)}
                >
                  {/* --- NEW RESPONSIVE LIST ITEM --- */}
                  <div className="p-4 lg:py-4 lg:px-0">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-30">
                        <span className="w-8 text-gray-500 font-mono text-sm lg:text-2xl lg:w-auto">{designer.id}</span>
                          <span className="font-medium text-base lg:text-2xl">{designer.name}</span>
                          <span className="text-gray-500 text-sm lg:hidden">{designer.major}</span>
                      </div>
                      <span className="hidden lg:block text-2xl col-span-5">{designer.major}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {searchTerm && filteredDesigners.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                검색 결과가 없습니다.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
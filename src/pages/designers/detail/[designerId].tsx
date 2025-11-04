import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import Header from "../../../components/Header";
import Footer from '../../../components/Footer';
import Mobile_HeaderBtn from "../../../components/mobile_headerBtn";
import MobileFooter from "../../../components/mobile_footer";
import { avantGarde, suitMedium } from '@/styles/fonts';
import { DESIGNERS } from "../../../constants/designers";
import { WORKS } from "../../../constants/works";
import { PATHS, DOMAIN } from "../../../constants/paths";

export default function DesignerDetailPage() {
  const router = useRouter();
  const { designerId } = router.query;
  const [emailCopied, setEmailCopied] = useState(false);

  const designer = DESIGNERS.find(d => String(d.id) === designerId);

  const handleEmailClick = async () => {
    if (designer?.email) {
      try {
        await navigator.clipboard.writeText(designer.email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 1000);
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    }
  };

  const portfolioItems = useMemo(() => {
    if (!designer) {
      return [];
    }
    return designer.works.reduce((acc, designerWork) => {
      const workData = designerWork.work.find(
        (work) => work.id === designerWork.worksId
      );
      if (workData) {
        acc.push({
          id: workData.id,
          title: workData.title,
          thumbnail: workData.thumbnail,
          category: designerWork.category,
        });
      }
      return acc;
    }, [] as { id: number; title: string; thumbnail: string; category: string }[]); 
  }, [designer]); 

  if (!router.isReady) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
      </div>
    );
  }

  if (!designer) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <h1 className={`${suitMedium.className} text-2xl`}>디자이너를 찾을 수 없습니다.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="hidden lg:block lg:sticky lg:top-0 lg:z-50">
        <Header />
      </div>
      <div className="flex lg:hidden sticky top-0 z-50 bg-white items-center justify-between p-4">
        <Link href={PATHS.DESIGNERS} aria-label="Go back to designers">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M15 3L6.5 11.5L15 20" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Link>
        <h1 className={`${avantGarde.className} font-[400] text-[24px] text-[#000000]`}>Designers</h1>
        <Mobile_HeaderBtn />
      </div>

      <div className="p-4 lg:p-8">
        <div className="flex flex-col lg:flex-row lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="w-full lg:w-91">
            <div className="flex flex-row gap-4 lg:flex-col">
              {/* Info Box */}
              <div className="w-1/2 lg:w-full">
                <h1 className={`${suitMedium.className} text-[28px] text-[#1C1C1C] lg:text-[70px] font-[600]`}>
                  {designer.nameKo}
                </h1>
                <div className="relative">
                  <button
                    onClick={handleEmailClick}
                    className={`${suitMedium.className} text-[#7C7C7C] text-[11px] lg:text-[24px] font-[400] break-all hover:underline cursor-pointer text-left`}
                  >
                    {designer.email}
                  </button>
                  {emailCopied && (
                    <span className={`${suitMedium.className} absolute left-0 -bottom-6 text-[10px] lg:text-[14px] text-[#00FF36] font-[500]`}>
                      이메일이 복사되었습니다!
                    </span>
                  )}
                </div>
                <p className={`${suitMedium.className} w-full text-[#1C1C1C] text-[12px] font-[400] leading-[22px] mt-4 lg:hidden whitespace-pre-line`}>
                  {designer.description}
                </p>
              </div>

              {/* Image Box */}
              <div className="w-1/2 lg:w-full">
                <Image 
                    src={`${DOMAIN}${designer.img}`} 
                    alt={`${designer.nameKo} profile picture`}
                    width={364}
                    height={546}
                    className="object-cover w-full h-auto lg:mt-[78px]"
                    priority
                    sizes="(max-width: 1024px) 50vw, 364px"
                  />
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="w-full lg:w-7/8">
            <div className="relative w-5/6 hidden lg:block">
              <p className={`${suitMedium.className} w-full text-[#1C1C1C] text-[20px] font-[500] mt-4 whitespace-pre-line`}>
                {designer.description}
              </p>
            </div>

            {/* 포트폴리오 렌더링  */}
            <div className="mt-12 lg:mt-[86px]">
              <div className="flex flex-col items-center lg:items-end gap-5">             
                
                {portfolioItems.length > 0 && (
                  <Link
                    href={`${PATHS.WORKS}/${portfolioItems[0].category}/${portfolioItems[0].id}`}
                    key={portfolioItems[0].id} 
                    className={`w-full max-w-[365px] ${
                      portfolioItems.length <= 2 ? 'lg:invisible' : ''
                    }`}
                  >
                    <div className={`${suitMedium.className} w-fit text-[#1C1C1C] bg-[#00FF36] text-[14px] font-[600] mb-2 lg:hidden p-1`}>
                      {portfolioItems[0].title}
                    </div>
                    <div className="relative cursor-pointer group w-full">
                      <Image 
                        src={`${DOMAIN}${portfolioItems[0].thumbnail}`} 
                        alt={portfolioItems[0].title} 
                        width={365} 
                        height={274} 
                        className="object-cover w-full h-auto lg:w-[365px] lg:h-[274px]"
                      />
                      <div className="absolute inset-0 hidden lg:flex items-center justify-center border-2 border-transparent group-hover:border-[#00FF36] transition-all duration-300">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`${suitMedium.className} bg-[#00FF36] text-[#1C1C1C] px-3 py-1 text-[16px] font-[600]`}>
                            {portfolioItems[0].title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}

                {portfolioItems.length > 0 && (
                  <div className="flex flex-col lg:flex-row gap-5 w-full lg:w-auto justify-center lg:justify-end">
                    
                    {(portfolioItems.length === 1
                      ? portfolioItems.slice(0, 1)
                      : portfolioItems.length === 2
                      ? portfolioItems.slice(0, 2)
                      : portfolioItems.slice(1, 3) 
                    ).map((item) => (
                      <Link
                        href={`${PATHS.WORKS}/${item.category}/${item.id}`}
                        key={item.id}
                        className="w-full max-w-[365px]"
                      >
                        <div className={`${suitMedium.className} w-fit text-[#1C1C1C] bg-[#00FF36] text-[14px] font-[600] mb-2 lg:hidden p-1`}>
                          {item.title}
                        </div>
                        <div className="relative cursor-pointer group w-full">
                          <Image 
                            src={`${DOMAIN}${item.thumbnail}`} 
                            alt={item.title} 
                            width={365} 
                            height={274} 
                            className="object-cover w-full h-auto lg:w-[365px] lg:h-[274px]"
                          />
                          <div className="absolute inset-0 hidden lg:flex items-center justify-center border-2 border-transparent group-hover:border-[#00FF36] transition-all duration-300">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className={`${suitMedium.className} bg-[#00FF36] text-[#1C1C1C] px-3 py-1 text-[16px] font-[600]`}>
                                {item.title}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>            
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <div className="hidden lg:block">
        <Footer />
      </div>
      <div className="lg:hidden">
        <MobileFooter />
      </div>
    </div>
  );
}
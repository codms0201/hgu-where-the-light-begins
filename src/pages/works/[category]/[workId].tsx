'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from 'next/image';
import YouTube from 'react-youtube'; 
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Mobile_HeaderBtn from '../../../components/mobile_headerBtn';
import TeamProfile from "../../../img/profileImage.png"; 
import { ITCavantGarde, suitMedium, avantGarde } from "@/styles/fonts";
import MobileFooter from '../../../components/mobile_footer';
import { WORKS } from '../../../constants/works';
import { DOMAIN, PATHS } from '../../../constants/paths';
import { WorkCategory } from "../../../models/category.model"; 
import { DESIGNERS } from '../../../constants/designers'; 

const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted;
};

const useWindowWidth = () => {
  const [width, setWidth] = useState(0); 
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

const categoryKeyToUIMap: { [key: string]: { key: WorkCategory, name: string } } = {
  communication: { key: 'COMMUNICATION', name: 'Communication Design' },
  service: { key: 'SERVICE', name: 'Service Design' },
  ux: { key: 'UX', name: 'UX Design' },
  industrial: { key: 'INDUSTRIAL', name: 'Industrial Design' },
};


const WorksTeamDetailPage = () => {
  const width = useWindowWidth();
  const isMounted = useIsMounted();
  const router = useRouter(); 

  const { category: categoryParam, workId: workIdParam } = router.query;

  const workData = useMemo(() => {
    if (!router.isReady || !categoryParam || !workIdParam) return null;

    const mapEntry = categoryKeyToUIMap[categoryParam as string];
    if (!mapEntry) return null;
    
    const { key: categoryKey, name: uiCategoryName } = mapEntry;
    const workId = Number(workIdParam as string);

    if (isNaN(workId) || !WORKS[categoryKey]) {
      return null;
    }

    const work = WORKS[categoryKey].find(w => w.id === workId);
    if (!work) return null; 

    const designersWithProfiles = work.designer.map(designerStub => {
      const fullProfile = DESIGNERS.find(d => d.id === designerStub.id);
      
      return {
        ...designerStub, 
        profileImg: fullProfile?.img, 
      };
    });

    return {
      work: {
        ...work,
        designer: designersWithProfiles,
      },
      uiCategoryName,
    };
  }, [router.isReady, categoryParam, workIdParam]); 


  if (!isMounted || !router.isReady) {
    return <div className="min-h-screen bg-white" />;
  }

  if (!workData) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
         <div className="hidden lg:block lg:sticky lg:top-0 lg:z-50">
           <Header />
         </div>
         <div className="flex lg:hidden sticky top-0 z-50 bg-white items-center justify-between p-4">
           <Link href="/works" aria-label="Go back">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none">
               <path d="M14.5 3L6 11.5L14.5 20" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round"/>
             </svg>
           </Link>
           <h1 className={`${avantGarde.className} text-[#000000] font-[400] text-[24px] tracking-wider`}>
             PROJECT
           </h1>
           <Mobile_HeaderBtn />
         </div>
         <div className="flex-1 flex items-center justify-center">
            <h1 className={`${suitMedium.className} text-xl`}>Project Not Found</h1>
         </div>
         {isMounted && (width <= 390 ? <MobileFooter /> : <Footer />)}
      </div>
    );
  }

  const { work, uiCategoryName } = workData;

  const creations = work.creation && work.creation.length > 0
    ? work.creation
    : [{
        id: 'thumbnail',
        extension: 'webp', 
        src: work.thumbnail
      }];

  const renderCreationContent = () => (
    creations.map((item, index) => {
      if (item.extension === 'youtube') {
        return (
          <div key={item.id} className="w-full relative pb-[56.25%]"> 
            <YouTube
              className="absolute top-0 left-0 w-full h-full"
              videoId={item.src}
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                  modestbranding: 0,
                  mute: 1,
                  controls: 1,
                  loop: 1,
                  playlist: item.src, 
                },
              }}
            />
          </div>
        );
      }

      return (
        <Image
          key={item.id}
          src={`${DOMAIN}${item.src}`}
          alt={`${work.title} creation ${item.id}`}
          width={1920} 
          height={1080}
          className="w-full h-auto" 
          quality={100} 
          priority={index === 0} 
          unoptimized={item.extension === 'gif'} 
        />
      );
    })
  );

  return (
    <div className="flex flex-col min-h-screen">

      <div className="flex-1">

        <div className="hidden lg:block lg:sticky lg:top-0 lg:z-50">
          <Header />
        </div>
        <div className="flex lg:hidden sticky top-0 z-50 bg-white items-center justify-between p-4">
          <Link href="/works" aria-label="Go back">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none">
               <path d="M14.5 3L6 11.5L14.5 20" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round"/>
             </svg>
           </Link>
           <h1 className={`${avantGarde.className} text-[#000000] font-[400] text-[24px] tracking-wider`}>
             PROJECT
           </h1>
           <Mobile_HeaderBtn />
        </div>

        <div className="flex">
          <div className="flex flex-col lg:flex-row lg:justify-between w-full">
            
            <div className={
              "w-full lg:w-[500px] p-4 lg:p-8 space-y-4 " + 
              "lg:sticky lg:top-[147px] lg:h-[calc(100vh-147px)] lg:overflow-y-auto lg:self-start"
              }> 
              
              {/* === MODIFICATION START: Combined Category and Professor Display === */}
              <div className="flex justify-between items-center">
                <div className="inline-block relative group">
                   <span className={`${ITCavantGarde.className} bg-white text-[#1C1C1C] px-3 py-1 text-[18px] font-[500] border-2 border-[#00FF36]`}>
                    {uiCategoryName}
                  </span>
                  <div className="absolute z-10 -top-1.5 -left-1 w-2 h-2 bg-white border-2 border-[#00FF36]"></div>
                  <div className="absolute z-10 -top-1.5 -right-1 w-2 h-2 bg-white border-2 border-[#00FF36]"></div>
                  <div className="absolute z-10 -bottom-1.5 -left-1 w-2 h-2 bg-white border-2 border-[#00FF36]"></div>
                  <div className="absolute z-10 -bottom-1.5 -right-1 w-2 h-2 bg-white border-2 border-[#00FF36]"></div>
                </div>

                {work.professor && (
                  <p className={`${suitMedium.className} text-[#1C1C1C] text-[16px] font-[400]`}>
                    지도교수 <strong className="font-[700]">{work.professor}</strong>
                  </p>
                )}
              </div>
              {/* === MODIFICATION END === */}
              
              <h1 className={`${suitMedium.className} text-[20px] lg:text-[32px] font-[700] text-[#1C1C1C] leading-[160%] tracking-[-1px] whitespace-pre-line`}>
                {work.summary}
              </h1>
              <div>
                <p className={`${suitMedium.className} text-[16px] lg:text-[18px] font-[400] text-[#1C1C1C] leading-[170%] tracking-[-1px] whitespace-pre-line`}>
                  {work.description}
                </p>
              </div>

              <div className="block lg:hidden -mx-4 my-4"> 
                {renderCreationContent()}
              </div>

              <div className="mt-10">
                
                {/* 팀 이름 제목 h3은 제거됨 */}
                
                {!work.teamImg && work.designer.length === 1 && work.designer[0] ? (
                  <div className="flex items-start gap-4">
                    <Image
                      src={work.designer[0].profileImg ? `${DOMAIN}${work.designer[0].profileImg}` : TeamProfile}
                      alt={work.designer[0].nameKo}
                      className="w-[218px] h-[327px] object-cover flex-shrink-0"
                      width={218}
                      height={327}
                    />
                    {/* 단독 디자이너: 사진 옆에 이름만 수직으로 배치 (원래 구조) */}
                    <div className="pt-2"> 
                      <Link
                        key={work.designer[0].id}
                        href={PATHS.DESIGNER_DETAIL.replace(':designerId', String(work.designer[0].id))}
                        className={`${suitMedium.className} flex items-center gap-10 text-[#1C1C1C] text-[16px] font-[500] hover:text-[#00FF36] transition-colors`}
                      >
                        <p>{work.designer[0].nameKo}</p>
                        <svg
                          className="-ml-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                        >
                          <path
                            d="M0.629395 0.915527H6.99997M6.99997 0.915527V7.2861M6.99997 0.915527L0.629395 7.2861"
                            stroke="currentColor"
                            strokeWidth="0.910082"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ) : (
                  
                  <>
                    {work.teamImg && (
                      <Image
                        src={`${DOMAIN}${work.teamImg}`}
                        alt={work.teamName || 'Team Profile'}
                        className="w-[334px] h-auto object-contain mb-7" 
                        width={334}
                        height={334} 
                      />
                    )}

                    {!work.teamImg && work.designer.length > 1 && (
                      <div className="w-full w-[334px] grid grid-cols-2 gap-4 mb-7">
                        {work.designer.map((designer) => (
                          <div key={designer.id}>
                            <Image
                              src={designer.profileImg ? `${DOMAIN}${designer.profileImg}` : TeamProfile}
                              alt={designer.nameKo}
                              className="w-full h-auto aspect-square object-cover rounded-md" 
                              width={150}
                              height={150}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* ⭐ 팀/다수 디자이너 레이아웃 수정: justify-between -> gap-8로 간격 좁힘 */}
                    <div className="flex items-start pt-4 gap-13"> 
                      <h3 className={`${suitMedium.className} text-[#1C1C1C] text-[16px] font-[700] flex-shrink-0`}>
                        {work.teamName || (work.designer.length > 1 ? "Designers" : "")}
                      </h3>
                      
                      {/* 우측 팀원 이름 목록 (2열 그리드) */}
                      <div className="grid grid-cols-2 gap-x-8 gap-y-2"> 
                        {work.designer.map((designer) => (
                          <Link
                            key={designer.id}
                            href={PATHS.DESIGNER_DETAIL.replace(':designerId', String(designer.id))}
                            className={`${suitMedium.className} flex items-center text-[#1C1C1C] text-[16px] font-[500] hover:text-[#00FF36] transition-colors`}
                          >
                            <p>{designer.nameKo}</p>
                            <svg
                              className="ml-8"
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                            >
                              <path
                                d="M0.629395 0.915527H6.99997M6.99997 0.915527V7.2861M6.99997 0.915527L0.629395 7.2861"
                                stroke="currentColor"
                                strokeWidth="0.910082"
                              />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                  
                )}
              </div>

            </div>
            
            <div className="hidden lg:block lg:w-[1240px] lg:mr-8"> 
               {renderCreationContent()}
            </div>
          </div>
        </div>
      
      </div> 

      {isMounted && (width <= 390 ? <MobileFooter /> : <Footer />)}
      
    </div>
  );
};

export default WorksTeamDetailPage;
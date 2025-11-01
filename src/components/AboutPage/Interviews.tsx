import React from 'react';
import { avantGarde } from '@/styles/fonts';

export default function Interviews() {
  const youtubeEmbedUrl = "https://www.youtube.com/embed/NSw-B3FHRzQ";

  return (
      <div className="bg-white flex flex-col lg:flex-row p-4 lg:p-8 mb-30 lg:mt-10">
        <div className="w-full lg:w-1/3 flex items-start justify-start">
          <div>
            <h1 className={`${avantGarde.className} text-[24px] lg:text-[70px] font-[400] text-[#1C1C1C]`}>
              Interviews
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex justify-center lg:justify-end items-center mt-8 lg:mt-40">
          <div 
            style={{ 
              position: 'relative', 
              width: '100%',
              paddingBottom: '56.25%',
              height: 0, 
              overflow: 'hidden',
              maxWidth: '878px'
            }}
          >
            <iframe
              src={youtubeEmbedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            ></iframe>
          </div>
        </div>
      </div>
  );
}
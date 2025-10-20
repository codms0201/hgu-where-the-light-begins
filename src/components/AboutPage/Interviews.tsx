import React from 'react';
import { avantGarde } from '@/styles/fonts';

export default function Interviews() {
  const youtubeEmbedUrl = "https://www.youtube.com/embed/-Z0bFfNdIPk";

  return (
      <div className="min-h-screen bg-white flex">
        {/* Left Section - Title */}
        <div className="w-1/3 flex items-start justify-start p-8">
          <div>
            <h1 className={`${avantGarde.className} text-[70px] font-[400] text-[#1C1C1C]`}>
              Interviews
            </h1>
          </div>
        </div>
        
        {/* Right Section - Content (YouTube Embedded Video) */}
        <div className="w-2/3 flex justify-end items-end p-8">
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
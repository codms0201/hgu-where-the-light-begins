import React from 'react';
import { avantGarde, suitMedium } from '@/styles/fonts';

export default function Executives() {
  return (
    <div className="bg-white flex flex-col lg:flex-row p-4 lg:p-8 ">
      <div className="w-full lg:w-1/3 flex items-start justify-start">
        <div>
          <h1 className={`${avantGarde.className} text-[24px] lg:text-[70px] font-[400] text-[#1C1C1C] mt-28`}>
            Executives
          </h1>
        </div>
      </div>
      <div className={`${suitMedium.className} w-full flex flex-col justify-end mt-8 lg:mt-50 lg:ml-70`}>
        <div className="space-y-8">
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-4 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[600] leading-normal">위원장</div>
              <div className="col-span-4 lg:col-span-3"></div>
              <div className="col-span-4 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">오신영</div>
            </div>
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-4 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[600] leading-normal">부위원장</div>
              <div className="col-span-4 lg:col-span-3"></div>
              <div className="col-span-4 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">장수민</div>
            </div>
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-4 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[600] leading-normal">회계</div>
              <div className="col-span-4 lg:col-span-3"></div>
              <div className="col-span-4 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">홍현지</div>
            </div>
          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-4 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[600] leading-normal">아이덴티티</div>
            <div className="col-span-4 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">Leader</div>
            <div className="col-span-4 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">최현성</div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-start -mt-4 lg:-mt-8">
            <div className="col-span-4"></div>
            <div className="col-span-4 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">Member</div>
            <div className="col-span-4 lg:col-span-5 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
              <span>박예빈</span>
              <span>강하라</span>
              <span>임사랑</span>
            </div>
          </div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-4 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[600] leading-normal">웹사이트</div>
            <div className="col-span-4 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">Leader</div>
            <div className="col-span-4 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">조 환</div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-start -mt-4 lg:-mt-8">
            <div className="col-span-4"></div>
            <div className="col-span-4 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">Member</div>
            <div className="col-span-4 lg:col-span-5 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
              <span>송연수</span>
              <span>정경난</span>
              <span>정승준</span>
            </div>
          </div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-4 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[600] leading-normal">홍보</div>
            <div className="col-span-4 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">Leader</div>
            <div className="col-span-4 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">최현성</div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-start -mt-4 lg:-mt-8">
            <div className="col-span-4"></div>
            <div className="col-span-4 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">Member</div>
            <div className="col-span-4 lg:col-span-5 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal flex flex-col gap-2 lg:gap-0">
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                <span>김종욱</span>
                <span>박정현</span>
                <span>서주빈</span>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                <span>성윤지</span>
                <span>유하은</span>
                <span>육지민</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-4 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[600] leading-normal">설계 & 설치</div>
            <div className="col-span-4 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">Leader</div>
            <div className="col-span-4 lg:col-span-5 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal flex flex-col lg:flex-row gap-2 lg:gap-5">
              <span>권미소</span>
              <span>김채영</span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-start -mt-4 lg:-mt-8">
            <div className="col-span-4"></div>
            <div className="col-span-4 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">Member</div>
            <div className="col-span-4 lg:col-span-5 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal flex flex-col gap-2 lg:gap-0">
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                <span>안민애</span>
                <span>윤규인</span>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                <span>장한나</span>
                <span>최민서</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-4 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[600] leading-normal">웹 개발</div>
            <div className="col-span-4 lg:col-span-3"></div>
            <div className="col-span-4 lg:col-span-3 text-[#1C1C1C] text-[14px] lg:text-[28px] font-[500] leading-normal">권채은</div>
          </div>
        </div>
      </div>
    </div>
  );
}
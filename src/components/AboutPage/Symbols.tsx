import React, { useEffect, useState, useMemo, RefObject } from 'react';
import { avantGarde } from '@/styles/fonts';
import { suitMedium } from '@/styles/fonts';

type Point = {
  x: number;
  y: number;
};

interface SymbolsProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

const designCategories = [
  { id: 1, title: 'Communication Design' },
  { id: 2, title: 'Service Design' },
  { id: 3, title: 'UX Design' },
  { id: 4, title: 'Industrial Design' },
];

const contentData = {
  1: {
    text: "커뮤니케이션 디자인은 메시지를 ‘확산’시키는 작업입니다.\n 중심에서 바깥으로 뻗어나가는 방사형 구조는 아이디어와 메시지가\n 다양한 매체를 통해 확장되고 연결되는 과정을 상징합니다.",
  },
  2: {
    text: "서비스 디자인은 사용자의 ‘경험’을 설계하는 일입니다.\n 겹겹이 쌓인 원형 구조는 중심에서 바깥으로 확장되는 여정을 상징하며,\n 사용자를 중심으로 다양한 접점과 관계가 유기적으로 이어지는 시스템을 나타냅니다.\n 단순하지만 반복적인 원의 흐름은 지속적인 개선과 확장을 통해\n 안정적인 경험을 만들어내는 서비스 디자인의 본질을 표현합니다.",
  },
  3: {
    text: "UX/UI 디자인은 사용자의 ‘흐름’을 설계하는 과정입니다.\n 교차된 선이 만든 구조는 길과 방향을 상징하며, 사용자가 화면 속에서 선택과\n 결정을 반복해 나아가는 과정을 나타냅니다. 원 안에서 교차된 형태는 복잡한\n 시스템 안에서도 명확한 경로를 제시하고, 일관된 흐름과 질서를 만들어내는\n UX/UI 디자인의 역할을 드러냅니다.",
  },
  4: {
    text: "제품 디자인은 ‘구조와 기능’을 탐구하는 작업입니다.\n 모듈화된 정사각형들이 질서 있게 배열된 격자 구조는 제품이 가진 체계성과\n 조립적 특성을 상징합니다. 단순한 반복 속에서도 변주를 만들어내는 형태는\n 기능과 미학이 만나는 순간을 보여주며, 끊임없는 발전과 혁신을 통해\n 새로운 가능성을 제시하는 제품 디자인의 본질을 담고 있습니다.",
  },
};


const Symbols = ({ containerRef }: SymbolsProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const { top, height } = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollDistance = height - windowHeight;
      const progress = Math.max(0, Math.min(1, -top / scrollDistance));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerRef]);
  
  const { circlePoints, octagonPoints } = useMemo(() => {
    const numPoints = 80;
    const frameRadius = 132;
    const canvasSize = 350;
    const radiusPercent = (frameRadius / canvasSize) * 100;
    const center = 50;
    const newCirclePoints: Point[] = [];
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * 2 * Math.PI - (Math.PI / 2);
      const x = center + radiusPercent * Math.cos(angle);
      const y = center + radiusPercent * Math.sin(angle);
      newCirclePoints.push({ x, y });
    }
    const octagonCorners = [{ x: 34.57, y: 12.8 }, { x: 65.33, y: 12.8 }, { x: 87.1, y: 34.57 }, { x: 87.1, y: 65.33 }, { x: 65.33, y: 87.1 }, { x: 34.57, y: 87.1 }, { x: 12.8, y: 65.33 }, { x: 12.8, y: 34.57 }];
    const newOctagonPoints: Point[] = [];
    const pointsPerSide = numPoints / 8;
    for (let i = 0; i < 8; i++) {
      const startCorner = octagonCorners[i];
      const endCorner = octagonCorners[(i + 1) % 8];
      for (let j = 0; j < pointsPerSide; j++) {
        const factor = j / pointsPerSide;
        const x = startCorner.x + (endCorner.x - startCorner.x) * factor;
        const y = startCorner.y + (endCorner.y - startCorner.y) * factor;
        newOctagonPoints.push({ x, y });
      }
    }
    const pointOffset = pointsPerSide / 2;
    const reorderedOctagonPoints = newOctagonPoints.map((_, index) => {
      const newIndex = (index + pointOffset) % numPoints;
      return newOctagonPoints[newIndex];
    });
    return { circlePoints: newCirclePoints, octagonPoints: reorderedOctagonPoints };
  }, []);

  const interpolateColor = (color1: string, color2: string, factor: number) => {
    const hex1 = color1.replace('#', '');
    const hex2 = color2.replace('#', '');
    const r1 = parseInt(hex1.slice(0, 2), 16), g1 = parseInt(hex1.slice(2, 4), 16), b1 = parseInt(hex1.slice(4, 6), 16);
    const r2 = parseInt(hex2.slice(0, 2), 16), g2 = parseInt(hex2.slice(2, 4), 16), b2 = parseInt(hex2.slice(4, 6), 16);
    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);
    return `rgb(${r}, ${g}, ${b})`;
  };

  let shapeColor = '#37F6FF';
  let outerCircleRadius = 0;
  let holeRadius = 0;
  let apertureWidth = 0;
  let apertureRotation = 0;
  let quadrantCutWidth = 0;
  const minOuterRadius = 2;
  const maxOuterRadius = 132;
  const fixedInnerCircleRadius = 40;
  const maxHoleRadius = 84;
  const maxApertureWidth = 45;
  const maxQuadrantCutWidth = 40;
  const phaseDuration = 1 / 7;
  const frameRadius = 132;
  const canvasSize = 350;

  if (scrollProgress <= phaseDuration) {
    const factor = scrollProgress / phaseDuration;
    shapeColor = interpolateColor('#37F6FF', '#A2FB74', factor);
    outerCircleRadius = minOuterRadius + (maxOuterRadius - minOuterRadius) * factor;
  } else if (scrollProgress <= phaseDuration * 2) {
    const factor = (scrollProgress - phaseDuration) / phaseDuration;
    shapeColor = interpolateColor('#A2FB74', '#FDFF00', factor);
    outerCircleRadius = maxOuterRadius;
    holeRadius = fixedInnerCircleRadius + (maxHoleRadius - fixedInnerCircleRadius) * factor;
  } else if (scrollProgress <= phaseDuration * 3) {
    const factor = (scrollProgress - phaseDuration * 2) / phaseDuration;
    shapeColor = interpolateColor('#FDFF00', '#D1B96E', factor);
    outerCircleRadius = maxOuterRadius;
    holeRadius = maxHoleRadius - (maxHoleRadius * factor);
  } else if (scrollProgress <= phaseDuration * 4) {
    const factor = (scrollProgress - phaseDuration * 3) / phaseDuration;
    if (factor <= 0.5) shapeColor = interpolateColor('#D1B96E', '#B791AA', factor / 0.5);
    else shapeColor = interpolateColor('#B791AA', '#945AFF', (factor - 0.5) / 0.5);
    outerCircleRadius = maxOuterRadius;
    apertureWidth = maxApertureWidth * factor;
  } else if (scrollProgress <= phaseDuration * 5) {
    const factor = (scrollProgress - phaseDuration * 4) / phaseDuration;
    shapeColor = interpolateColor('#945AFF', '#C85CB8', factor);
    outerCircleRadius = maxOuterRadius;
    apertureWidth = maxApertureWidth;
    apertureRotation = 45 * factor;
  } else if (scrollProgress <= phaseDuration * 6) {
    const factor = (scrollProgress - phaseDuration * 5) / phaseDuration;
    shapeColor = interpolateColor('#C85CB8', '#FF586F', factor);
    outerCircleRadius = maxOuterRadius;
    apertureWidth = maxApertureWidth;
    apertureRotation = 45;
    quadrantCutWidth = maxQuadrantCutWidth * factor;
  } else {
    shapeColor = '#FF586F';
    outerCircleRadius = maxOuterRadius;
    apertureWidth = maxApertureWidth;
    apertureRotation = 45;
    quadrantCutWidth = maxQuadrantCutWidth;
  }

  const innerBorderRadius = scrollProgress <= phaseDuration ? '50%' : '0%';
  const quadrantCenterOffset = 55;
  const quadrantPositions = [{ name: 'top-right', cx: canvasSize / 2 + quadrantCenterOffset, cy: canvasSize / 2 - quadrantCenterOffset }, { name: 'top-left', cx: canvasSize / 2 - quadrantCenterOffset, cy: canvasSize / 2 - quadrantCenterOffset }, { name: 'bottom-left', cx: canvasSize / 2 - quadrantCenterOffset, cy: canvasSize / 2 + quadrantCenterOffset }, { name: 'bottom-right', cx: canvasSize / 2 + quadrantCenterOffset, cy: canvasSize / 2 + quadrantCenterOffset }];
  const cutPositionOffset = 20;

  let dynamicClipPath;
  if (scrollProgress > phaseDuration * 6) {
    const progressInLastPhase = (scrollProgress - phaseDuration * 6) / phaseDuration;
    const octagonTransitionFactor = Math.min(progressInLastPhase, 1);
    const interpolatedPoints = circlePoints.map((startPoint, index) => {
      const endPoint = octagonPoints[index];
      const x = startPoint.x + (endPoint.x - startPoint.x) * octagonTransitionFactor;
      const y = startPoint.y + (endPoint.y - startPoint.y) * octagonTransitionFactor;
      return `${x.toFixed(2)}% ${y.toFixed(2)}%`;
    });
    dynamicClipPath = `polygon(${interpolatedPoints.join(', ')})`;
  } else {
    dynamicClipPath = `circle(${frameRadius}px at center)`;
  }
  
  let activeId;
  if (scrollProgress <= phaseDuration * 2) {
    activeId = 1; // Communication Design
  } else if (scrollProgress <= phaseDuration * 4) {
    activeId = 2; // UX Design
  } else if (scrollProgress <= phaseDuration * 6) {
    activeId = 3; // Industrial Design
  } else {
    activeId = 4; // Service Design
  }
  const currentText = contentData[activeId as keyof typeof contentData].text;

  return (
    <div style={{ position: 'sticky', top: '90px', height: '100vh', overflow: 'hidden' }}>
      <div className="min-h-screen flex">
        {/* Left Panel: Text Content */}
        <div className="w-1/2 flex items-start justify-start p-8">
          <div className="max-w-md">
            <h2 className={`${avantGarde.className} text-[70px] font-[400] text-[#1C1C1C] mb-8`}>Symbols</h2>
            <ul className="space-y-3">
              {designCategories.map((category) => (
                <li
                  key={category.id}
                  className={`${suitMedium.className} text-[30px] transition-colors duration-300 ${
                    activeId === category.id
                      ? 'font-[600] text-[#1C1C1C]'
                      : 'font-[400] text-[#7C7C7C]'
                  }`}
                >
                  {category.id}{' '}{category.title}
                </li>
              ))}
            </ul>
            <div className='w-2/1 mt-39'>
            <p className={`${suitMedium.className} text-[24px] text-[400] text-[#1C1C1C] leading-[160%] whitespace-pre-line`}>{currentText}</p>
            </div>
          </div>
        </div>

        {/* Right Panel: Animation */}
        <div className="w-2/3 flex items-end justify-end mb-20">
          <div
            className="relative"
            style={{ 
              width: `${canvasSize}px`, 
              height: `${canvasSize}px`,
              clipPath: dynamicClipPath,
              overflow: 'hidden',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" className="absolute inset-0">
              <path d="M90.0796 64.3519C67.38 39.7134 53.5467 22.6343 55.3548 20.8044L20.8044 55.3548C22.6343 53.5249 39.7135 67.38 64.3519 90.0796C72.9351 97.9874 67.0096 112.3 55.3331 111.821C21.8718 110.448 0 108.161 0 105.568V154.431C0 151.839 21.8718 149.574 55.3331 148.179C67.0096 147.7 72.9351 162.013 64.3519 169.92C39.7135 192.62 22.6343 206.453 20.8044 204.645L55.3548 239.196C53.5249 237.366 67.38 220.287 90.0796 195.648C97.9874 187.065 112.3 192.99 111.821 204.667C110.448 238.128 108.161 260 105.568 260H154.432C151.839 260 149.574 238.128 148.179 204.667C147.7 192.99 162.013 187.065 169.92 195.648C192.62 220.287 206.453 237.366 204.645 239.196L239.196 204.645C237.366 206.475 220.287 192.62 195.648 169.92C187.065 162.013 192.99 147.7 204.667 148.179C238.128 149.552 260 151.839 260 154.431V105.568C260 108.161 238.128 110.426 204.667 111.821C192.99 112.3 187.065 97.9874 195.648 90.0796C220.287 67.38 237.366 53.5467 239.196 55.3548L204.645 20.8044C206.475 22.6343 192.62 39.7134 169.92 64.3519C162.013 72.9351 147.7 67.0096 148.179 55.333C149.552 21.8718 151.839 0 154.432 0H105.568C108.161 0 110.426 21.8718 111.821 55.333C112.3 67.0096 97.9874 72.9351 90.0796 64.3519Z" fill={shapeColor} transform="translate(45, 45)" />
            </svg>
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: `${outerCircleRadius * 2}px`, height: `${outerCircleRadius * 2}px`, transform: `translate(-${outerCircleRadius}px, -${outerCircleRadius}px)`, backgroundColor: shapeColor, borderRadius: innerBorderRadius, zIndex: 5, boxSizing: 'border-box' }} />
            {scrollProgress > phaseDuration && scrollProgress <= phaseDuration * 3 && (
              <>
                <div className="absolute top-1/2 left-1/2 bg-white" style={{ width: `${holeRadius * 2}px`, height: `${holeRadius * 2}px`, transform: `translate(-${holeRadius}px, -${holeRadius}px)`, zIndex: 6, borderRadius: '50%' }} />
                <div className="absolute top-1/2 left-1/2" style={{ width: `${fixedInnerCircleRadius * 2}px`, height: `${fixedInnerCircleRadius * 2}px`, backgroundColor: shapeColor, transform: `translate(-${fixedInnerCircleRadius}px, -${fixedInnerCircleRadius}px)`, borderRadius: '50%', zIndex: 7 }} />
              </>
            )}
            {scrollProgress > phaseDuration * 3 && (
              <div className="absolute inset-0" style={{ transform: `rotate(${apertureRotation}deg)`, zIndex: 8 }} >
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 bg-white" style={{ width: '150%', height: `${apertureWidth}px`, transform: 'translate(-50%, -50%) rotate(45deg)' }} />
                  <div className="absolute top-1/2 left-1/2 bg-white" style={{ width: '150%', height: `${apertureWidth}px`, transform: 'translate(-50%, -50%) rotate(-45deg)' }} />
                </div>
              </div>
            )}
            {scrollProgress > phaseDuration * 5 && quadrantCutWidth > 0.1 && (
              <div className="absolute inset-0" style={{ zIndex: 9 }}>
                {quadrantPositions.map((pos) => {
                  const xOffset = pos.name.includes('right') ? cutPositionOffset : -cutPositionOffset;
                  const yOffset = pos.name.includes('bottom') ? cutPositionOffset : -cutPositionOffset;
                  return (
                    <React.Fragment key={pos.name}>
                      <div className="absolute bg-white" style={{ width: `${quadrantCutWidth}px`, height: '150px', left: `${pos.cx + xOffset}px`, top: `${pos.cy}px`, transform: 'translate(-50%, -50%)' }} />
                      <div className="absolute bg-white" style={{ width: '150px', height: `${quadrantCutWidth}px`, left: `${pos.cx}px`, top: `${pos.cy + yOffset}px`, transform: 'translate(-50%, -50%)' }} />
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symbols;
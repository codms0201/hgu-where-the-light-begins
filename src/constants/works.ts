import { WorkCategory } from "../models/category.model";
import { Work } from "../models/work.model";

export const WORKS: { [key in WorkCategory]: Work[] } = {
  COMMUNICATION: [
    {
      id: 1,
      teamName: null,
      teamImg: null,
      designer: [{ id: 70, nameKo: "최예영", studentId: 22100744 }],
      professor: "이진구",
      title: "LAVOKE",
      summary: "GRANHAND | LAVOKE",
      description:
        "서울숲 튤립 축제에서 그랑핸드가 선보이는 새로운 향, ‘LAVOKE’. 4월, 완연한 봄을 맞은 서울숲에는 튤립이 만개합니다. 서울숲에서의 특별한 순간이 오랫동안 기억될 수 있도록, GRANHAND 팝업스토어가 여러분을 기다립니다.",
      thumbnail: "images/works/communication/YeyoungChoi/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/YeyoungChoi/contents_01.webp",
        },
      ],
    },
    {
      id: 2,
      teamName: "기성이변",
      teamImg: "images/designers/team/Kiseongebyeon.jpg",
      designer: [{ id: 7, nameKo: "기은찬", studentId: 21900058}, { id: 35, nameKo: "변지민", studentId: 22000838}, { id: 38, nameKo: "성윤지", studentId: 22000362}],
      professor: "이진구",
      title: "37°",
      summary: "피부가 기억하는 섬, 37도",
      description:
        "37도는 울릉도 위도 북위 37도에서 시작하여 울릉도의 맑은 자연에서 자란 호박을 주원료하는 스킨케어 브랜드입니다.",
      thumbnail: "images/works/communication/GiSeongibyeon/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/GiSeongibyeon/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/communication/GiSeongibyeon/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/GiSeongibyeon/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/communication/GiSeongibyeon/contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/communication/GiSeongibyeon/contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/communication/GiSeongibyeon/contents_06.webp",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/communication/GiSeongibyeon/contents_07.webp",
        },
        {
          id: 8,
          extension: "webp",
          src: "images/works/communication/GiSeongibyeon/contents_08.webp",
        },
        {
          id: 9,
          extension: "webp",
          src: "images/works/communication/GiSeongibyeon/contents_09.webp",
        },
        {
          id: 10,
          extension: "webp",
          src: "images/works/communication/GiSeongibyeon/contents_10.webp",
        },
      ],
    },
    {
      id: 3,
      teamName: null,
      teamImg: null,
      designer: [{ id: 50, nameKo: "윤규인", studentId: 22100471}],
      professor: "이진구",
      title: "공공예식 연",
      summary: "공공예식 연",
      description:
        "연은 서울 북촌한옥마을에 위치한 가상의 공공예식장입니다. 현재 공공예식장들은 실제 예식장으로 활용되기에는 일반적인 강당 같은 모습을 지닌 공간들이 많습니다. 공공예식 연은 예식장으로 사용 가능한 공공시설을 브랜딩한 공간입니다.",
      thumbnail: "images/works/communication/GyuinYun/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/GyuinYun/contents_01.webp",
        },
      ],
    },
    {
      id: 4,
      teamName: "위미",
      teamImg: "images/designers/team/Wimi.jpg",
      designer: [{ id: 1, nameKo: "강예은", studentId: 22000009}, { id: 3, nameKo: "강진희", studentId: 22000012}, { id: 53, nameKo: "이유진", studentId: 22000554}, { id: 75, nameKo: "한지원", studentId: 22000792}],
      professor: "이진구",
      title: "독도런",
      summary: "독도를 향한 새발자국, 독도런",
      description:
        "독도런은 울릉도의 길을 달리며 자연과 역사를 따라, 우리 땅을 기억하고 지키는 국민 마라톤 캠페인입니다. 울릉도를 걷는 한 걸음 한 걸음이 독도를 향한 발걸음이 되며, 참가자들은 러너로서 직접 뛰며 애국의 의미를 몸으로 체험합니다.",
      thumbnail: "images/works/communication/WiMi/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/WiMi/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/communication/WiMi/contents_02.webp",
        },
      ],
    },
    {
      id: 5,
      teamName: null,
      teamImg: null,
      designer: [{ id: 53, nameKo: "이유진", studentId: 22000554}],
      professor: "이진구",
      title: "디클러터 아카이브",
      summary: "디클러터 아카이브",
      description:
        "디클러터 아카이브는 먼지가 사라지는 청소의 순간에 주목합니다. 감각적인 도구를 큐레이션하여, 청소의 즐거움을 찾는 이들을 위한 기록으로 존재합니다.",
      thumbnail: "images/works/communication/YujinLee/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/YujinLee/contents_01.webp",
        },
      ],
    },
    {
      id: 6,
      teamName: "양떼목장",
      teamImg: "images/designers/team/Yanttea.jpg",
      designer: [{ id: 26, nameKo: "박선영", studentId: 22100276}, { id: 52, nameKo: "이어진", studentId: 22000540}, { id: 45, nameKo: "오은경", studentId: 22101051}, { id: 70, nameKo: "최예영", studentId: 22100744}],
      professor: "이진구",
      title: "무릉부릉",
      summary: "울릉도 친환경 버스·정류장 통합 브랜딩,\n무릉부릉",
      description:
        "무릉부릉은 무릉교통의 버스와 버스 정류장 디자인 전반을 개선하여 보다 매력적인 교통 경험을 제공하고자 합니다.",
      thumbnail: "images/works/communication/YangTtemokjang/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/YangTtemokjang/contents_01.webp",
        },
      ],
    },
    {
      id: 7,
      teamName: null,
      teamImg: null,
      designer: [{ id: 6, nameKo: "권미소", studentId: 22100051}],
      professor: "이진구",
      title: "보해 복(福)분자주",
      summary: "술 한 잔에 복을 담아, 보해 복분자주",
      description:
        "예로부터 사람들은 복을 기원하며 서로의 안녕을 빌었습니다.\n부귀영화를 뜻하는 ‘모란도’와 장수와 복을 기원하는 ‘백수백복도’를\n모티프로 삼아 전통의 상징을 현대적인 감각으로 담아냈습니다.\n복을 나누는 술, 보해 복분자주로 사랑하는 이에게 마음을 전하세요",
      thumbnail: "images/works/communication/MisoGwon/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/MisoGwon/contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/works/communication/MisoGwon/contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/MisoGwon/contents_03.webp",
        },
      ],
    },
    {
      id: 8,
      teamName: null,
      teamImg: null,
      designer: [{ id: 52, nameKo: "이어진", studentId: 22000540}],
      professor: "이진구",
      title: "숲칫둠칫: 마음이 춤추는 숲",
      summary: "숲칫둠칫, 유한양행 청년 마음 건강을 위한 숲 체험 브랜드",
      description:
        "몸의 건강에서 마음의 건강까지.\n유한양행의 전인적 건강 철학은 숲으로 이어집니다.\n끝없는 경쟁과 불안 속에 살아가는 청년들에게,\n‘숲칫둠칫’은 잠시 멈춰 설 수 있는 초대장을 건넵니다.\n숲의 살아있는 움직임 속에서\n마음의 소리에 귀 기울여 보세요!",
      thumbnail: "images/works/communication/EojinLee/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/EojinLee/contents_01.webp",
        },
      ],
    },
    {
      id: 9,
      teamName: "알덴테",
      teamImg: "images/designers/team/Aldente.jpg",
      designer: [{ id: 24, nameKo: "류하나", studentId: 22100256}, { id: 28, nameKo: "박예빈", studentId: 21900288}, { id: 44, nameKo: "오신영", studentId: 22000427}, { id: 76, nameKo: "홍현지", studentId: 22001079}],
      professor: "이진구",
      title: "슬로울릉",
      summary: "슬로우한 울릉 스테이, 슬로울릉",
      description:
        "‘슬로울릉’은 바쁜 일상 속에서 잠시 멈춰,\n느림의 시간을 경험하고 싶은 사람들이 모이는 게스트 하우스입니다.\n울릉도의 고유한 자연과 삶의 속도를 따라가며, 잠시 머무는 그 순간 속에서 잃어버린 삶의 리듬을 다시 찾아갑니다.",
      thumbnail: "images/works/communication/Aldente/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/Aldente/contents_01.webp",
        },
      ],
    },
    {
      id: 10,
      teamName: null,
      teamImg: null,
      designer: [{ id: 3, nameKo: "강진희", studentId: 22000012}],
      professor: "이진구",
      title: "아케이드 서울 리브랜딩",
      summary: "아케이드 서울 리브랜딩",
      description:
        "Arcade Seoul은 브랜드, 디자인, 공연 등 다양한 콘텐츠와 함께 확장된 큐레이팅의 의미를 새롭게 발견하는 데 목표를 둔 복합문화공간입니다. 현재 홍대점과 문래점을 기반으로 운영 중인 아케이드 서울을 용산점이라는 가상의 공간으로 리브랜딩했습니다.",
      thumbnail: "images/works/communication/JinheeKang/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/JinheeKang/contents_01.webp",
        },
      ],
    },
    {
      id: 11,
      teamName: null,
      teamImg: null,
      designer: [{ id: 60, nameKo: "장한나", studentId: 22100642}],
      professor: "이진구",
      title: "어린이 동화구독 서비스, 밀리키즈",
      summary: "어린이 동화구독 서비스, 밀리키즈",
      description:
        "밀리의 서재가 선보이는 밀리키즈는 1세부터 6세 미취학 아동을 위한 동화 구독 서비스입니다. 아이의 발달 단계와 흥미에 맞춘 맞춤형 큐레이션으로, 글자를 읽기 전 단계부터 자연스럽게 책과 친해지도록 돕습니다. 밀리키즈와 함께 우리 아이의 상상력을 키워보세요!",
      thumbnail: "images/works/communication/HannaJang/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/HannaJang/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/communication/HannaJang/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/HannaJang/contents_03.webp",
        },
      ],
    },
    {
      id: 12,
      teamName: "울롱울롱",
      teamImg: "images/designers/team/Degreechacha.jpeg",
      designer: [{ id: 12, nameKo: "김민하", studentId: 22000081}, { id: 21, nameKo: "김채영", studentId: 22100209}, { id: 33, nameKo: "박하은", studentId: 22000313}],
      professor: "이진구",
      title: "울롱울롱",
      summary: "울릉도 보드게임형 관광안내 키트 '울롱울롱'",
      description:
        "‘울룽울룽’은 울릉도를 쉽고 재미있게 여행할 수 있도록 돕는 보드게임형 관광안내 키트입니다. 뚜벅이 여행객을 위한 이 키트는 울릉도의 볼거리, 먹거리, 즐길거리를 카드로 구성해, 여행자가 카드를 조합하며 나만의 여행 코스를 만들 수 있습니다.",
      thumbnail: "images/works/communication/Ullongullong/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/Ullongullong/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/communication/Ullongullong/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/Ullongullong/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/communication/Ullongullong/contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/communication/Ullongullong/contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/communication/Ullongullong/contents_06.webp",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/communication/Ullongullong/contents_07.webp",
        },
        {
          id: 8,
          extension: "webp",
          src: "images/works/communication/Ullongullong/contents_08.webp",
        },
        {
          id: 9,
          extension: "webp",
          src: "images/works/communication/Ullongullong/contents_09.webp",
        },
        {
          id: 10,
          extension: "webp",
          src: "images/works/communication/Ullongullong/contents_10.webp",
        },
        {
          id: 11,
          extension: "webp",
          src: "images/works/communication/Ullongullong/contents_11.webp",
        },
        {
          id: 12,
          extension: "webp",
          src: "images/works/communication/Ullongullong/contents_12.webp",
        },
        {
          id: 13,
          extension: "webp",
          src: "images/works/communication/Ullongullong/contents_13.webp",
        },
        {
          id: 14,
          extension: "webp",
          src: "images/works/communication/Ullongullong/contents_14.webp",
        },
        {
          id: 15,
          extension: "webp",
          src: "images/works/communication/Ullongullong/contents_15.webp",
        },
      ],
    },
    {
      id: 13,
      teamName: "데데디디",
      teamImg: "images/designers/team/Dededidi.jpg",
      designer: [{ id: 46, nameKo: "유은강", studentId: 22100465}, { id: 56, nameKo: "임사랑", studentId: 22100609}, { id: 60, nameKo: "장한나", studentId: 22100642}, { id: 65, nameKo: "조하민", studentId: 22000727}],
      professor: "이진구",
      title: "울링",
      summary: "울릉도 공공 자전거길, 울링",
      description:
        "‘울링’은 울릉도의 순환형 자전거길입니다.\n자연을 해치지 않는 이동 수단인 자전거를 통해 지속 가능한\n여행 방식을 제안하며, 섬의 자연과 사람, 여행이 하나의 순환\n안에서 연결되는 순간을 나타내고자 합니다.",
      thumbnail: "images/works/communication/Dededidi/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/Dededidi/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/communication/Dededidi/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/Dededidi/contents_03.webp",
        },
        {
          id: 4,
          extension: "gif",
          src: "images/works/communication/Dededidi/contents_04.gif",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/communication/Dededidi/contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/communication/Dededidi/contents_06.webp",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/communication/Dededidi/contents_07.webp",
        },
        {
          id: 8,
          extension: "webp",
          src: "images/works/communication/Dededidi/contents_08.webp",
        },
        {
          id: 9,
          extension: "webp",
          src: "images/works/communication/Dededidi/contents_09.webp",
        },
        {
          id: 10,
          extension: "webp",
          src: "images/works/communication/Dededidi/contents_10.webp",
        },
        {
          id: 11,
          extension: "webp",
          src: "images/works/communication/Dededidi/contents_11.webp",
        },
        {
          id: 12,
          extension: "webp",
          src: "images/works/communication/Dededidi/contents_12.webp",
        },
        {
          id: 13,
          extension: "webp",
          src: "images/works/communication/Dededidi/contents_13.webp",
        },
        {
          id: 14,
          extension: "webp",
          src: "images/works/communication/Dededidi/contents_14.webp",
        },
      ],
    },
    {
      id: 14,
      teamName: "울멍",
      teamImg: "images/designers/team/APE.jpg",
      designer: [{ id: 2, nameKo: "강주찬", studentId: 21900015}, { id: 10, nameKo: "김민준", studentId: 21800075}, { id: 49, nameKo: "육지민", studentId: 22100470}, { id: 57, nameKo: "임정훈", studentId: 21700619}],
      professor: "이진구",
      title: "울멍 FESTA",
      summary: "울릉도에서 즐기는 물멍과 별멍 힐링 축제: 울명 FESTA",
      description:
        "“울멍 FESTA — 울릉도의 파도와 별 사이에서 ‘멍’의 예술을 즐기다.”\n울릉도에서만 만날 수 있는 특별한 힐링 페스티벌, 울멍 FESTA는 바다 위의 물멍, 그리고 별빛 아래의 별멍으로 이어지는 감성 축제입니다.",
      thumbnail: "images/works/communication/APE/thumbnail.webp", //안보임
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/APE/contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "JsjN8ry_-Xc",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/APE/contents_03.webp",
        },
      ],
    },
    {
      id: 15,
      teamName: null,
      teamImg: null,
      designer: [{ id: 1, nameKo: "강예은", studentId: 22000009}],
      professor: "이진구",
      title: "자연韓첩",
      summary: "퍼스널 보약 커스텀 브랜드:\n자연韓첩",
      description:
        "몸이 편안히 받아들이는 건강은 몸의 속도를 따라 나에게 맞게 조율할 때 완성됩니다.\n자연의 재료를 정성껏 달여, 맛과 농도를 느끼며 스스로에게 맞는 건강을 만들어가는 경험. 자연韓첩은 그 과정 속에서 ‘내 몸이 천천히 회복해가는 건강의 시간’을 이야기합니다.",
      thumbnail: "images/works/communication/YeeunKang/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/YeeunKang/contents_01.webp",
        },
      ],
    },
    {
      id: 16,
      teamName: null,
      teamImg: null,
      designer: [{ id: 56, nameKo: "임사랑", studentId: 22100609}],
      professor: "이진구",
      title: "전주 국제단편영화제 리브랜딩",
      summary: "전주 국제단편영화제 리브랜딩",
      description:
        "전주 국제단편영화제 리브랜딩은 단편영화의 순간을\n핀라이트(Pin Light)와 필름(Film)으로 재해석한 프로젝트입니다.\n전주에서 한 편의 영화같은 기억을 담아보세요.",
      thumbnail: "images/works/communication/SarangIm/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/SarangIm/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/communication/SarangIm/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/SarangIm/contents_03.webp",
        },
      ],
    },
    {
      id: 17,
      teamName: null,
      teamImg: null,
      designer: [{ id: 73, nameKo: "한상일", studentId: 21900782}],
      professor: "이진구",
      title: "정찬1962",
      summary: "한식 기반 반찬 브랜드 정찬1962 리브랜딩",
      description:
        "아들을 위해 정성껏 끼니를 만드시던 어머니의 사랑으로, 아들은 멋진 사업가가 됩니다.\n사랑과 정성이 듬뿍 담긴 어머니의 반찬을 세상에 선보이겠다던 아들의 꿈은 반찬가게 ‘정찬1962’로 실현됩니다.\n아들에게 먹였던 반찬 그대로, 여러분의 식탁을 찾아갑니다.",
      thumbnail: "images/works/communication/SangilHan/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/SangilHan/contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "NLXeXu7Ae6w",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/SangilHan/contents_03.webp",
        },
      ],
    },
    {
      id: 18,
      teamName: null,
      teamImg: null,
      designer: [{ id: 75, nameKo: "한지원", studentId: 22000792}],
      professor: "이진구",
      title: "토종씨앗도서관",
      summary: "토종씨앗도서관 브랜딩",
      description:
        "토종씨앗도서관은 각지의 씨앗을 수집해 절기에 맞는 심기 좋은 씨앗을 대출하고 반납 받습니다. 재배 과정에서 겪을 수 있는 여러 일상적 고민 해결을 돕는 가이드와 기록 도구로, 파종부터 채종까지 씨앗과 함께하는 매일이 즐거운 탐험이 되도록 곁에서 돕습니다.",
      thumbnail: "images/works/communication/JiwonHan/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/JiwonHan/contents_01.webp",
        },
      ],
    },
    {
      id: 19,
      teamName: "독땅",
      teamImg: "images/designers/team/Dokthang.jpg",
      designer: [{ id: 14, nameKo: "김선우", studentId: 21900108}, { id: 25, nameKo: "모리야 토모키", studentId: 22100819}, { id: 27, nameKo: "박아나", studentId: 22100821}, { id: 73, nameKo: "한상일", studentId: 21900782}],
      professor: "이진구",
      title: "한잔에 담긴 울릉도",
      summary: "술릉술릉",
      description:
        "울릉도의 특산품인 마가열매, 동백꽃, 헛개꿀을 담아,\nMZ세대가 ‘가볍게 마시고 깊은 이야기를 나눌 수 있는 술’을 제안합니다.\n울릉도 고유의 재료를 활용해 지역성과 현대성을 동시에 담아내며,\n울릉도에서의 특별한 기억을 선사합니다.",
      thumbnail: "images/works/communication/Dokttang/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/Dokttang/contents_01.webp",
        },
      ],
    },
    {
      id: 20,
      teamName: "구조",
      teamImg: "images/designers/team/Gujo.jpg",
      designer: [{ id: 55, nameKo: "이지애", studentId: 21900566}, { id: 50, nameKo: "윤규인", studentId: 22100471}, { id: 42, nameKo: "연승아", studentId: 21800437}],
      professor: "이진구",
      title: "해보길 | 해바라길",
      summary: "해보길 | 해바라길",
      description:
        "울릉도 저동항에 조성된 이 산책길은, 하루의 시작과 끝을 아름답게 담아내는 장소입니다. ‘해보길’은 해를 바라보며 걷는 길이자, 하고 싶은 것을 해보라는 응원의 길입니다. ‘해바라길’은 해가 지는 바다를 바라보며, 자신의 꿈과 바람을 바라보는 길입니다.",
      thumbnail: "images/works/communication/GuJo/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/GuJo/contents_01.webp",
        },
      ],
    },
    {
      id: 21,
      teamName: "섭씨 25도",
      teamImg: "images/designers/team/Degree25.jpg",
      designer: [{ id: 6, nameKo: "권미소", studentId: 22100051}, { id: 30, nameKo: "박정현", studentId: 21800312}, { id: 40, nameKo: "안민애", studentId: 22101048}, { id: 48, nameKo: "유하은", studentId: 22200478}],
      professor: "이진구",
      title: "해보이소",
      summary: "와달리 휴게소 리디자인 공공디자인 프로젝트 ‘해보이소’",
      description:
        "‘해보이소’는 울릉도 해안도로 끝자락, 와달리 휴게소를 새롭게 해석한 공간 브랜딩 프로젝트입니다. 한반도에서 가장 먼저 해가 뜨는 지리적 상징성을 기반으로, 여행자들에게 새로운 하루를 응원하는 첫 인사를 전합니다.",
      thumbnail: "images/works/communication/Seopssi25do/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/Seopssi25do/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/communication/Seopssi25do/contents_02.webp",
        },
      ],
    },
    {
      id: 22,
      teamName: null,
      teamImg: null,
      designer: [{ id: 20, nameKo: "김종욱", studentId: 22000169}],
      professor: "이진구",
      title: "A2F",
      summary: "A2F: Heatmaps of Korean Football Abroad",
      description:
        "A2F는 해외로 이적한 한국 축구 선수들의 커리어 데이터를 시각화한 프로젝트입니다. 히트맵 개념을 확장해 체류 기간과 구단 색을 결합한 그라디언트로 커리어의 시간성과 이동성을 표현합니다. 이를 통해 데이터가 시각적 아이덴티티로 전환되는 과정을 보여줍니다.",
      thumbnail: "images/works/communication/JongwookKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/JongwookKim/contents_01.webp",
        },
      ],
    },
    {
      id: 23,
      teamName: null,
      teamImg: null,
      designer: [{ id: 24, nameKo: "류하나", studentId: 22100256}],
      professor: "이진구",
      title: "And Job",
      summary: "토스 N잡 페스티벌 ‘And Job’",
      description:
        "개인 브랜딩의 시대, 우리는 스스로의 가능성을 탐구하는 ‘나’라는 브랜드로 살아갑니다. ‘And Job’ 페스티벌은 토스의 철학을 재해석한 가상 페스티벌로, 당신의 가능성이 세상과 연결되는 방식을 제안합니다. 일, 그 이상의 발견을 경험하세요.",
      thumbnail: "images/works/communication/HanaRyu/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/HanaRyu/contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/works/communication/HanaRyu/contents_02.gif",
        },
      ],
    },
    {
      id: 24,
      teamName: null,
      teamImg: null,
      designer: [{ id: 42, nameKo: "연승아", studentId: 21800437}],
      professor: "이진구",
      title: "ANT STRATEGY:",
      summary: "ANT STRATEGY: 일하는 개미와 일하지 않는 개미",
      description:
        "개미 사회에서 ‘일하지 않는 개체들’의 존재와 그 의미를 과학적 관점에서 탐구하고, 이를 인간 사회에 비추어 질문을 던지는 시각예술 전시입니다.\n개미라는 작은 생명체를 통해 우리는 보이지 않는 역할의 가치, 다양성의 중요성, 쉼의 필요성을 새롭게 조명합니다.",
      thumbnail: "images/works/communication/SeungahYeon/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/SeungahYeon/contents_01.webp",
        },
      ],
    },
    {
      id: 25,
      teamName: null,
      teamImg: null,
      designer: [{ id: 45, nameKo: "오은경", studentId: 22101051}],
      professor: "이진구",
      title: "Avo Haus",
      summary: "아토피 케어 라이프스타일 브랜드 ‘Avo Haus’",
      description:
        "'Avo Haus'는 아토피로부터 편안히 보호받는 공간을 제안하는 라이프스타일 브랜드이다. 'Design to Protect'라는 철학 아래, 피부를 포함한 생활 전반의 편안함을 디자인한다. 배려의 미학, 아보하우스가 전하고자 하는 진정한 아름다움이다.",
      thumbnail: "images/works/communication/EunkyungOh/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/EunkyungOh/contents_01.webp",
        },
      ],
    },
    {
      id: 26,
      teamName: null,
      teamImg: null,
      designer: [{ id: 4, nameKo: "강하라", studentId: 21900018}],
      professor: "이진구",
      title: "Coree ",
      summary: "을유문화사 85주년 빛나는 순간을 기록하는 Coree",
      description:
        "출판은 곧 건국사업이라는 정신으로 창립된 을유문화사,\n2030년 85주년을 맞아 기록 앱 꼬레를 선보입니다.\n꼬레는 곡선처럼 자유롭게 삶을 기록하며, 건강하고 밝은\n대한민국을 만들어갑니다. Flow in curves, write your light!",
      thumbnail: "images/works/communication/HaraKang/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/HaraKang/contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "d0P4CMA6ePs",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/HaraKang/contents_03.webp",
        },
        {
          id: 4,
          extension: "gif",
          src: "images/works/communication/HaraKang/contents_04.gif",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/communication/HaraKang/contents_05.webp",
        },
        {
          id: 6,
          extension: "gif",
          src: "images/works/communication/HaraKang/contents_06.gif",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/communication/HaraKang/contents_07.webp",
        },
        {
          id: 8,
          extension: "gif",
          src: "images/works/communication/HaraKang/contents_08.gif",
        },
        {
          id: 9,
          extension: "webp",
          src: "images/works/communication/HaraKang/contents_09.webp",
        },
      ],
    },
    {
      id: 27,
      teamName: null,
      teamImg: null,
      designer: [{ id: 27, nameKo: "박아나", studentId: 22100821}],
      professor: "이진구",
      title: "Cotidi",
      summary: "홈 에센셜 브랜드 ‘Cotidi’",
      description:
        "홈 에센셜 브랜드 Cotidi는 평범한 일상을 특별한 순간으로 바꾸며, 삶에 아늑하고 기분 좋은 편안함을 더합니다. 사랑스러움과 세련미가 섬세하게 조화를 이룬 디자인의 Cotidi 제품들은 당신의 공간에 자연스럽게 스며듭니다.",
      thumbnail: "images/works/communication/AnaPark/Cotidi/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/AnaPark/Cotidi/contents_01.webp",
        },
      ],
    },
    {
      id: 28,
      teamName: null,
      teamImg: null,
      designer: [{ id: 33, nameKo: "박하은", studentId: 22000313}],
      professor: "이진구",
      title: "Dang",
      summary: "스케이트보드 기반 모자브랜드, Dang",
      description:
        "Dang은 스케이트 문화에서 영감을 받은 모자 브랜드이다.\nDang은 보드를 통해서만 느낄 수 있는 자유로움과 열정을 다시 한 번 느끼고 싶은 모든 이들을 위해 시작되었다. ",
      thumbnail: "images/works/communication/HaeunPark/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/HaeunPark/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/communication/HaeunPark/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/HaeunPark/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/communication/HaeunPark/contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/communication/HaeunPark/contents_05.webp",
        },
      ],
    },
    {
      id: 29,
      teamName: null,
      teamImg: null,
      designer: [{ id: 27, nameKo: "박아나", studentId: 22100821}],
      professor: "이진구",
      title: "DAWN",
      summary: "가상 영화 트레일러 ‘DAWN’",
      description:
        "가상 영화 트레일러 DAWN은 정체불명의 질병 '블라이트'가 세상의 종말을 가져오는 암울한 미래를 그립니다.  생성형 AI를 활용하여 재앙의 공포를 효과적으로 담은 영상을 제작하였고, 적절한 편집과 문구로 긴장감이 넘치는 트레일러를 연출했습니다.",
      thumbnail: "images/works/communication/AnaPark/DAWN/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/AnaPark/DAWN/contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "lymzaZDOv5w",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/AnaPark/DAWN/contents_03.webp",
        },
      ],
    },
    {
      id: 30,
      teamName: null,
      teamImg: null,
      designer: [{ id: 76, nameKo: "홍현지", studentId: 22001079}],
      professor: "이진구",
      title: "ETUDE",
      summary: "에뛰드 공주의 새로운 변신, 화장놀이",
      description:
        "화장은 어릴 적 놀이에서 나를 표현하는 언어로 변합니다.\n오늘, 에뛰드와 함께\n나만의 플레이리스트로 나만의 색을 찾아가는 새로운 공주가 되어보세요.\n평범한 공주와 달리, 나는 나만의 룰로!\nMake your playlist with Etude!",
      thumbnail: "images/works/communication/HyeonjiHong/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/HyeonjiHong/contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "y-vCzh8-ZFA",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/HyeonjiHong/contents_03.webp",
        },
      ],
    },
    {
      id: 31,
      teamName: null,
      teamImg: null,
      designer: [{id: 21, nameKo: "김채영", studentId: 22100209}],
      professor: "이진구",
      title: "eve:lot",
      summary: "수면을 돕는 라이프스타일 브랜드 ‘eve:lot’",
      description:
        "‘eve:lot’은 포근하고 편안한 나만의 밤의 공간을 디자인하는 라이프스타일 브랜드입니다. 다양한 제품을 통해 즐거운 꿈의 기억을 담아내며, 단순한 수면을 넘어 나만의 공간을 완성하는 경험을 제공합니다.",
      thumbnail: "images/works/communication/ChaeyoungKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/ChaeyoungKim/contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/works/communication/ChaeyoungKim/contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/ChaeyoungKim/contents_03.webp",
        },
      ],
    },
    {
      id: 32,
      teamName: null,
      teamImg: null,
      designer: [{ id: 35, nameKo: "변지민", studentId: 22000838}],
      professor: "이진구",
      title: "Fairy Lab",
      summary: "일상 속 작은 즐거움을 실험하는 데스크테리어 브랜드",
      description:
        "Fairy Lab은 반복된 일상 속 책상 위에서 피어나는 작은 즐거움을 요정 캐릭터로 시각화한 데스크테리어 브랜드로, 사소하지만 확실한 '재미'를 다시 꺼내 보여줍니다.",
      thumbnail: "images/works/communication/JeeminByon/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/JeeminByon/contents_01.webp",
        },
      ],
    },
    {
      id: 33,
      teamName: null,
      teamImg: null,
      designer: [{ id: 7, nameKo: "기은찬", studentId: 21900058}],
      professor: "이진구",
      title: "Fender: Korea",
      summary: "Fender 리브랜딩",
      description:
        "악기는 누구나 배울 수 있지만, 본 전시는 단순한 학습을 넘어 잠들어 있던 감각과 가능성이 깨어나는 순간을 시각적으로 표현했습니다. 형태와 색, 공간으로 구성된 이번 전시는 관람객 여러분이 그 영감을 시각과 감각으로 직접 느낄 수 있도록 기획되었습니다.",
      thumbnail: "images/works/communication/EunchanKi/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/EunchanKi/contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "images/works/communication/EunchanKi/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/EunchanKi/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/communication/EunchanKi/contents_04.webp",
        },
        {
          id: 5,
          extension: "youtube",
          src: "x6kFcXGriaw",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/communication/EunchanKi/contents_06.webp",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/communication/EunchanKi/contents_07.webp",
        },
      ],
    },
    {
      id: 34,
      teamName: null,
      teamImg: null,
      designer: [{ id: 67, nameKo: "천예은", studentId: 22000746}],
      professor: "이진구",
      title: "FLEUR",
      summary: "플라워 브랜드, FLEUR",
      description:
        "플레르는 잠깐의 아름다움을 넘어, 마음에 오래도록 남는\n‘기억의 흔적’을 전하는 야생화 브랜드입니다. 흔하지\n않기에 더 소중한 가치를 담아, 특별한 시간을 기념하고\n마음을 전하며 위로를 건네는 — 꽃과 함께하는 모든 순간\n플레르가 함께합니다.",
      thumbnail: "images/works/communication/YeeunCheon/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/YeeunCheon/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/communication/YeeunCheon/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/YeeunCheon/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/communication/YeeunCheon/contents_04.webp",
        },
      ],
    },
    {
      id: 35,
      teamName: null,
      teamImg: null,
      designer: [{ id: 72, nameKo: "최현성", studentId: 22001072}],
      professor: "이진구",
      title: "GARC",
      summary: "Gwangju Arcade and Reel Complex",
      description:
        "GARC는 e스포츠 경기를 관람하기만 하는 경기장에서 탈피하여 프로게이머와 팬, 스트리머가 모여 관람·체험·소통하는\n오프라인 게이밍 멀티플렉스입니다.",
      thumbnail: "images/works/communication/DanielChoi/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/DanielChoi/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/communication/DanielChoi/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/DanielChoi/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/communication/DanielChoi/contents_04.webp",
        },
      ],
    },
    {
      id: 36,
      teamImg: null,
      teamName: null,
      designer: [{ id: 40, nameKo: "안민애", studentId: 22101048}],
      professor: "이진구",
      title: "giutgiut",
      summary: "맞춤형 북 큐레이션 서점, giutgiut",
      description:
        "기웃기웃은 아직 선명하지 않은 마음과 취향을 기웃거리며, 책을 통해 나를 이해하는 시간을 제안하는 북 큐레이션 서점입니다. 이곳에서 당신의 기웃거림이 나를 이해하는 여정의 시작이 되길 바랍니다.",
      thumbnail: "images/works/communication/MinaeAn/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/MinaeAn/contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/works/communication/MinaeAn/contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/MinaeAn/contents_03.webp",
        },
      ],
    },
    {
      id: 37,
      teamName: null,
      teamImg: null,
      designer: [{ id: 38, nameKo: "성윤지", studentId: 22000362}],
      professor: "이진구",
      title: "JIMCarry",
      summary: "여행 준비 브랜드, JIMCarry",
      description:
        "짐캐리(JIMCarry)는 ‘여행을 나답게!’ 라는 슬로건을 바탕으로, 떠남의 설렘을 준비하는 모든 순간을 돕는 여행 준비 브랜드입니다. 떠나고 싶은 모든 이들의 더 넓은 세상을 위해 짐캐리(JIMCarry) ‘나다운 여행’을 설계하는 법을 고민합니다.",
      thumbnail: "images/works/communication/YoonjiSung/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/YoonjiSung/contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/works/communication/YoonjiSung/contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/YoonjiSung/contents_03.webp",
        },
        {
          id: 4,
          extension: "gif",
          src: "images/works/communication/YoonjiSung/contents_04.gif",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/communication/YoonjiSung/contents_05.webp",
        },
        {
          id: 6,
          extension: "gif",
          src: "images/works/communication/YoonjiSung/contents_06.gif",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/communication/YoonjiSung/contents_07.webp",
        },
      ],
    },
    {
      id: 38,
      teamName: null,
      teamImg: null,
      designer: [{ id: 69, nameKo: "최서우", studentId: 22100732}],
      professor: "이진구",
      title: "KARENCIA",
      summary: "II COMBINED의 5번째\n가상 브랜드 KARENCIA",
      description:
        "II COMBINED의 가상 브랜드 KARENCIA는 공간을 완성하는\n라이프센스를 제안합니다. 기능보다 무드를, 조형미를 중시하며\n감각을 빚어 분위기의 급과 태도를 완성합니다. 취향이 공간을 바꾸는 순간, 당신의 라이프센스를 펼쳐보세요.",
      thumbnail: "images/works/communication/SeowooChoi/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/SeowooChoi/contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "xOqE8crwM6s",
        },
        {
          id: 3,
          extension: "gif",
          src: "images/works/communication/SeowooChoi/contents_03.gif",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/communication/SeowooChoi/contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/communication/SeowooChoi/contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/communication/SeowooChoi/contents_06.webp",
        },
      ],
    },
    {
      id: 39,
      teamName: null,
      teamImg: null,
      designer: [{ id: 41, nameKo: "양진솔", studentId: 22000414}],
      professor: "이진구",
      title: "Kissy Journey",
      summary: "키스오프라이프 3주년 팬미팅 'Kissy Journey'",
      description:
        "2026년, 데뷔 3주년을 맞이하는 키스오프라이프의  첫 국내 정식 팬미팅은 키오프와 팬(KISSY)이 함께 ‘처음’을 맞이하며 미래를 꿈꾸는 여정의 출발점입니다. 서로가 서로의 나침반이자 꿈을 향한 원동력이 되어 함께 꿈을 완성해나갈 '여정'을 시작합니다.",
      thumbnail: "images/works/communication/JinsolYang/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/JinsolYang/contents_01.webp",
        },
      ],
    },
    {
      id: 40,
      teamName: null,
      teamImg: null,
      designer: [{ id: 26, nameKo: "박선영", studentId: 22100276}],
      professor: "이진구",
      title: "KOMOREBI",
      summary: "29cm 수요입점회 X 독서용품 브랜드 코모레비",
      description:
        "코모레비는 29cm 수요입점회에서 소개되는 독서용품 브랜드입니다. 흔들리는 나뭇잎 사이로 일렁이는 햇살을 의미하는 코모레비는 책 속에 일렁이는 문장이 사람 그리고 세상을 움직일 것을 믿음으로, 그 순간에만 존재하는 것들을 위해 독서용품을 아카이빙하고 있습니다.",
      thumbnail: "images/works/communication/SeonyeongPark/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/SeonyeongPark/contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/works/communication/SeonyeongPark/contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/SeonyeongPark/contents_03.webp",
        },
      ],
    },
    {
      id: 41,
      teamName: null,
      teamImg: null,
      designer: [{ id: 36, nameKo: "서주빈", studentId: 22000348}],
      professor: "이진구",
      title: "light, Many",
      summary: "아티스트 백현진 앨범 리브랜딩\n<light, Many>",
      description:
        "백현진의 정규 2집 <가볍고 수많은>은 지극히 평범한 일상을 그의 독특한 시선으로 바라보며 듣는 이에게 낯선 감정을 전합니다. 앨범이 던지는 감정의 파편을 수집하듯, 음악이 남긴 잔향을 시각적 리듬으로 번역하며 들리는 것을 보이게 하는 과정을 탐구했습니다.",
      thumbnail: "images/works/communication/JubinSeo/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/JubinSeo/contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/works/communication/JubinSeo/contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/JubinSeo/contents_03.webp",
        },
        {
          id: 4,
          extension: "youtube",
          src: "kxim0bnUKAo",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/communication/JubinSeo/contents_05.webp",
        },
        {
          id: 6,
          extension: "youtube",
          src: "8WI9H9eBSTA",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/communication/JubinSeo/contents_07.webp",
        },
      ],
    },
    {
      id: 42,
      teamName: null,
      teamImg: null,
      designer: [{ id: 49, nameKo: "육지민", studentId: 22100470}],
      professor: "이진구",
      title: "LOOP",
      summary: "LOOP",
      description:
        "LOOP는 “무너짐은 곧 회복이다”라는 메시지를 담은 아티스트의 데뷔 앨범이자 브랜딩 프로젝트다. 뉴턴의 진자에서 영감을 받아 순환과 에너지의 흐름을 시각화했으며, 강렬한 비주얼과 사운드로 회복의 서사를 전한다.",
      thumbnail: "images/works/communication/JiminYuk/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/JiminYuk/contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/works/communication/JiminYuk/contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/JiminYuk/contents_03.webp",
        },
        {
          id: 4,
          extension: "youtube",
          src: "kxim0bnUKAo",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/communication/JiminYuk/contents_05.webp",
        },
        {
          id: 6,
          extension: "youtube",
          src: "8WI9H9eBSTA",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/communication/JiminYuk/contents_07.webp",
        },
      ],
    },
    {
      id: 43,
      teamName: "디용즈",
      teamImg: "images/designers/team/Dyeoz.jpg",
      designer: [{ id: 4, nameKo: "강하라", studentId: 21900018}, { id: 20, nameKo: "김종욱", studentId: 22000169}, { id: 43, nameKo: "오사랑", studentId: 22000424}, { id: 69, nameKo: "최서우", studentId: 22100732}],
      professor: "이진구",
      title: "O'rum",
      summary: "울릉도 헛개꿀, 오름",
      description:
        "울릉도의 맑은 자연과 가장 먼저 떠오르는 해에서\n영감을 받아 탄생한 오름은 정직함과 회복의 가치를\n담은 프리미엄 헛개꿀 브랜드입니다.",
      thumbnail: "images/works/communication/DiYongJeu/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/DiYongJeu/contents_01.webp",
        },
      ],
    },
    {
      id: 44,
      teamName: null,
      teamImg: null,
      designer: [{ id: 12, nameKo: "김민하", studentId: 22000081}],
      professor: "이진구",
      title: "poti",
      summary: "식물 큐레이션 브랜드, poti",
      description:
        "poti는 단순히 식물을 판매하는 것이 아닌 각자의 공간과 취향, 리듬에 맞는 식물을 큐레이션하는 브랜드입니다.\n식물은 하루하루 작은 변화를 만들어가고, 그 안에서 나의 이야기가 자라납니다. poti를 통해 그 과정 속에서, 나의 이야기를 발견하길 기대합니다.",
      thumbnail: "images/works/communication/MinhaKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/MinhaKim/contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "Bej9ODYq-lA",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/MinhaKim/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/communication/MinhaKim/contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/communication/MinhaKim/contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/communication/MinhaKim/contents_06.webp",
        },
      ],
    },
    {
      id: 45,
      teamName: null,
      teamImg: null,
      designer: [{ id: 65, nameKo: "조하민", studentId: 22000727}],
      professor: "이진구",
      title: "PREKA",
      summary: "PREKA",
      description:
        "PREKA는 만화 애호가를 위한 프리미엄 공간이다.\n회원제 큐레이션을 통해 취향에 맞는 만화를 제안하며,\n숨은 명작과 독립 만화를 발견하는 즐거움을 선사한다.",
      thumbnail: "images/works/communication/ChoHamin/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/ChoHamin/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/communication/ChoHamin/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/ChoHamin/contents_03.webp",
        },
      ],
    },
    {
      id: 46,
      teamName: "PUUM",
      teamImg: "images/designers/team/PUUM.jpg",
      designer: [{ id: 36, nameKo: "서주빈", studentId: 22000348}, { id: 41, nameKo: "양진솔", studentId: 22000414}, { id: 67, nameKo: "천예은", studentId: 22000746}, { id: 72, nameKo: "최현성", studentId: 22001072}],
      professor: "이진구",
      title: "PUUM",
      summary: "호박씨 디저트 브랜드 PUUM",
      description:
        "울릉도에서는 오래전부터 호박씨를 이곳저곳 뿌려 키워 왔습니다. 우리는 그 호박씨의 성장을 닮고 싶습니다. 낯설지만 건강한 재료, 새롭지만 익숙하게 다가오는 맛. 울릉도를 감각적으로 경험할 수 있는 호박씨 디저트 브랜드 ‘펌 PUUM’입니다.",
      thumbnail: "images/works/communication/PUUM/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/PUUM/contents_01.webp",
        },
      ],
    },
    {
      id: 47,
      teamName: null,
      teamImg: null,
      designer: [{ id: 57, nameKo: "임정훈", studentId: 21700619}],
      professor: "이진구",
      title: "Redbull X Cybertruck",
      summary: "Redbull X Cybertruck : CAMPING",
      description:
        "에너지 드링크 레드불과 테슬라의 사이버트럭의 가상의 협업 프로젝트.\n에너지의 상징 레드불과 미래적 디자인의 아이콘 사이버트럭이 만나, 사이버펑크 감성과 익스트림 스포츠 감각이 결합된 새로운 캠핑 경험을 제안합니다.",
      thumbnail: "images/works/communication/JunghoonLim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/JunghoonLim/contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "watch?v=bHvhz1OAhso",
        },
      ],
    },
    {
      id: 48,
      teamName: null,
      teamImg: null,
      designer: [{ id: 25, nameKo: "모리야 토모키", studentId: 22100819}],
      professor: "이진구",
      title: "SALIGHT",
      summary: "크리스천 굿즈 브랜드 ‘SALIGHT’",
      description:
        "SALIGHT는 ‘신앙을 곁에 두는 경험’을 전하는 라이프스타일 브랜드입니다. 일상 속 물건을 통해 신앙을 자연스럽게 표현할 수 있는 새로운 방법을 제안합니다.",
      thumbnail: "images/works/communication/TomokiMoriya/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/TomokiMoriya/contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "mdYtu9fsfqg",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/TomokiMoriya/contents_03.webp",
        },
      ],
    },
    {
      id: 49,
      teamName: null,
      teamImg: null,
      designer: [{ id: 10, nameKo: "김민준", studentId: 21800075}],
      professor: "이진구",
      title: "Soolé",
      summary: "진로 프리미엄 와인 리브랜딩 'Soolé'",
      description:
        "술래 soole〉는 한국의 풍류를 현대 과일와인으로 번역한 작업입니다. 바람의 곡선과 산수의 여백으로 사계의 향과 풍류의 리듬을 한 잔에 응축해, 가벼운 첫모금과 오래 남는 잔향을 느낄 수 있도록 만들었습니다.",
      thumbnail: "images/works/communication/MinJunKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/MinJunKim/contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/works/communication/MinJunKim/contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/MinJunKim/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/communication/MinJunKim/contents_04.webp",
        },
      ],
    },
    {
      id: 50,
      teamName: null,
      teamImg: null,
      designer: [{ id: 44, nameKo: "오신영", studentId: 22000427}],
      professor: "이진구",
      title: "SŌUL",
      summary: "닥터 마틴 팝업스토어 ‘닥터 마틴, 소울을 걷다’",
      description:
        "‘닥터 마틴, 소울을 걷다’는 브랜드 메시지를 담은 팝업스토어입니다.\n투박하지만 단단한 닥터 마틴과 함께 나만의 SŌUL을 느껴보세요.\n“Too much for them, enough for me” 세상의 평가에 흔들리지 않고 나답게 걷는 이를 위한 응원",
      thumbnail: "images/works/communication/GloriaOh/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/GloriaOh/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/communication/GloriaOh/contents_02.webp",
        },
        {
          id: 3,
          extension: "youtube",
          src: "UW-g1rWHrL8",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/communication/GloriaOh/contents_04.webp",
        },
      ],
    },
    {
      id: 51,
      teamName: null,
      teamImg: null,
      designer: [{ id: 43, nameKo: "오사랑", studentId: 22000424}],
      professor: "이진구",
      title: "SOUND採掘團",
      summary: "ALPS 5주년 기념 팝업스토어:\nSOUND採掘團",
      description:
        "플랫폼 중심의 음악 소비가 일상이 된 지금, 우리는 다시금 함께 듣고 나누던 아날로그적 경험을 갈망합니다. 뮤직&컬처 컴퍼니\nALPS의 5주년 기념 팝업스토어, ‘SOUND採掘團’에서 사소한 공유와 시간 낭비로 시작되는 행복을 느껴보세요.",
      thumbnail: "images/works/communication/SarangO/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "gif",
          src: "images/works/communication/SarangO/contents_01.gif",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/communication/SarangO/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/SarangO/contents_03.webp",
        },
      ],
    },
    {
      id: 52,
      teamName: null,
      teamImg: null,
      designer: [{ id: 28, nameKo: "박예빈", studentId: 21900288}],
      professor: "이진구",
      title: "TeaAmo",
      summary: "카페인 없는 차 브랜드, TeaAmo",
      description:
        "TeaAmo는 카페인 없는 차 브랜드로, 하루의 끝을\n분위기 있게 마무리하는 경험을 선물합니다.\n브랜드명은 ti amo(사랑해)에서 착안했으며,\n카페인 없는 건강한 차를 마시는 순간이 자신을 돌보고\n사랑하는 작은 의식이 되길 바라는 마음을 담았습니다.",
      thumbnail: "images/works/communication/YebinPark/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/YebinPark/contents_01.webp",
        },
      ],
    },
    {
      id: 53,
      teamName: null,
      teamImg: null,
      designer: [{ id: 55, nameKo: "이지애", studentId: 21900566}],
      professor: "이진구",
      title: "The Final Cut",
      summary: "쿠엔틴 타란티노 은퇴 전시 'The Final Cut'",
      description:
        "쿠엔틴 타란티노는 오래전부터 ‘영화 10편을 찍으면 은퇴하겠다’고 예고했습니다. 단 한 편의 작품만 남은 지금, 아홉 편을 돌아보며 그의 가상 은퇴를 기리는 전시입니다. 영화에 대한 그의 열정, 폭력과 유머, 그리고 그가 오래 사랑한 컬트 문화를 되감습니다.",
      thumbnail: "images/works/communication/JiaeLee/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/JiaeLee/contents_01.webp",
        },
      ],
    },
    {
      id: 54,
      teamName: null,
      teamImg: null,
      designer: [{ id: 2, nameKo: "강주찬", studentId: 21900015}],
      professor: "이진구",
      title: "UNDID",
      summary: "마무리를 거부하는 패션 브랜드 : UNDID",
      description:
        "“모든 이야기는 반드시 끝나야 할까?”우리는 어느 순간부터 ‘마무리’에 대한 강박 속에 살고 있다. 하지만 어떤 이야기들은 완벽한 마무리의 강박 대신, 열린 채 남아있을 때 오히려 더 진실하게 다가온다. UNDID는 이 질문에서 출발한 브랜드다.",
      thumbnail: "images/works/communication/JuchanKang/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/JuchanKang/contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "0S14u7TJV6Y",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/JuchanKang/contents_03.webp",
        },
      ],
    },
    {
      id: 55,
      teamName: null,
      teamImg: null,
      designer: [{ id: 46, nameKo: "유은강", studentId: 22100465}],
      professor: "이진구",
      title: "UNHYANG",
      summary: "전통 꽃차 브랜드 운향",
      description:
        "운향은 자연과 전통의 시간을 향으로 잇는 꽃차 브랜드입니다.\n한국의 오방색과 색동에서 영감을 받아 전통의 아름다움을\n현대적으로 재해석한 디자인을 담았습니다.\n꽃이 피고 지는 순간을 사라짐이 아닌 ‘기억의 형태’로 바라보며,\n그 시간을 차에 담아냅니다.",
      thumbnail: "images/works/communication/EunkangYou/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/EunkangYou/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/communication/EunkangYou/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/EunkangYou/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/communication/EunkangYou/contents_04.webp",
        },
      ],
    },
    {
      id: 56,
      teamName: null,
      teamImg: null,
      designer: [{ id: 14, nameKo: "김선우", studentId: 21900108}],
      professor: "이진구",
      title: "UNIQ:LO",
      summary: "유니클로 리브랜딩 ‘UNIQ:LO’",
      description:
        "UNIQ:LO는 유니클로의 ‘LifeWear’를 스트릿 감성으로 재해석한 브랜드입니다.\n\n“Quietly Unique”, 화려함보다 조용한 디테일 속에서 차별성을 추구합니다.\n누구에게나 어울리지만 누구의 것도 아닌,\n나만의 자유와 개성을 제안합니다.",
      thumbnail: "images/works/communication/SunWooKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/SunWooKim/contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "watch?v=w5mIakcp4Ck",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/SunWooKim/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/communication/SunWooKim/contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/communication/SunWooKim/contents_05.webp",
        },
      ],
    },
    {
      id: 57,
      teamName: null,
      teamImg: null,
      designer: [{ id: 48, nameKo: "유하은", studentId: 22200478}],
      professor: "이진구",
      title: "What's Your BGM?",
      summary: "Spotify X Cyworld 팝업스토어\n'What's Your BGM?'",
      description:
        "2000년대, 우린 모두 각자의 배경음이 있었습니다.\n‘What’s Your BGM?’은 음악의 감성적 경험을 기억하는 스포티파이와 싸이월드의 추억을 잇습니다.\n과거의 추억과 현재의 취향이 공존하는 이곳에서 당신의 하루를 물들일 노래를 찾아보세요.",
      thumbnail: "images/works/communication/HaeunYou/thumbnai.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/HaeunYou/contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/works/communication/HaeunYou/contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/HaeunYou/contents_03.webp",
        },
      ],
    },
    {
      id: 58,
      teamName: null,
      teamImg: null,
      designer: [{ id: 30, nameKo: "박정현", studentId: 21800312}],
      professor: "이진구",
      title: "X : 열 번째 계절",
      summary: "정승환 데뷔 10주년 스페셜 앨범\n〈X : 열 번째 계절〉",
      description:
        "〈X : 열 번째 계절〉은 정승환의 데뷔 10주년을 기념한 스페셜 앨범이다.‘발라드의 왕세자’가 걸어온 십 년의 겨울을 음악으로 되짚는다. X는 시간과 정승환, 그리고 다시 만나는 순간을 상징하며, 그의 노래는 기억과 위로의 자리를 만든다.",
      thumbnail: "images/works/communication/JeonghyunPark/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/communication/JeonghyunPark/contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "rSe6ck6OeTA",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/communication/JeonghyunPark/contents_03.webp",
        },
        {
          id: 4,
          extension: "youtube",
          src: "mkH2UO2uSLU",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/communication/JeonghyunPark/contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/communication/JeonghyunPark/contents_06.webp",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/communication/JeonghyunPark/contents_07.webp",
        },
      ],
    },
  ],
  INDUSTRIAL: [
    {
      id: 1,
      teamName: null,
      teamImg: null,
      designer: [{ id: 31, nameKo: "박지윤", studentId: 22100308}],
      professor: "박찬송",
      title: "2100: New Access",
      summary: "2100 Aquapolis: New Access",
      description:
        "해수면 상승으로 물과 공존하게 될 미래, 22세기.\n도시와 바다 그 사이를 잇는 새로운 접근 시스템을 제안한다.",
      thumbnail: "images/works/industrial/JiyoonPark/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/industrial/JiyoonPark/contents_01.webp",
        },
      ],
    },
    {
      id: 2,
      teamName: null,
      teamImg: null,
      designer: [{ id: 13, nameKo: "김서영", studentId: 22100106}],
      professor: "박찬송",
      title: "LumiON",
      summary: "알파세대 맞춤형 교육환경 혁신 디자인 연구",
      description:
        "알파세대는 디지털 기기에 익숙하지만, 현 교육 환경은 여전히 아날로그에 머물러 있습니다. 본 연구는 현재 상황의 한계를 검증하며, 단순한 '기기 제공'에 그치지 않고, 디지털의 핵심 특성을 학습경험에 통합하여 알파세대에 최적화된 학습 환경을 제안합니다.",
      thumbnail: "images/works/industrial/SeoyeongKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/industrial/SeoyeongKim/contents_01.webp",
        },
      ],
    },
    {
      id: 3,
      teamName: null,
      teamImg: null,
      designer: [{ id: 68, nameKo: "최민서", studentId: 22000750}],
      professor: "박찬송",
      title: "MV 2T",
      summary: "MOBILITY INTERIOR DESIGN\nFOR IDEATOR",
      description:
        "미래의 창작자, 아이디에이터(IDEATOR)는 이동하며\n세상을 관찰하고 경험을 수집해 영감을 만든다.\n이 작품은 그들을 위한 이동형 창작 공간,\n사고하고 느끼며 창조할 수 있는 모빌리티 인테리어 디자인이다.",
      thumbnail: "images/works/industrial/MinseoCho/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/industrial/MinseoCho/contents_01.webp",
        },
      ],
    },
    {
      id: 4,
      teamName: null,
      teamImg: null,
      designer: [{ id: 54, nameKo: "이재은", studentId: 22000562}],
      professor: "박찬송",
      title: "Therra",
      summary: "Re-imagining clinical therapy tools",
      description:
        "Gen MZ lives at the intersection of hyper-connection and solitude.\nTherra bridges nature and technology, supporting clinical psychologists\nthrough EMDR, bilateral stimulation, and intelligent data analysis.",
      thumbnail: "images/works/industrial/JaeeunLee/thumbnail.png",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/industrial/JaeeunLee/contents_01.webp",
        },
      ],
    },
    {
      id: 5,
      teamName: null,
      teamImg: null,
      designer: [{ id: 19, nameKo: "김은수", studentId: 22100169}],
      professor: "박찬송",
      title: "Waterless Shower",
      summary: "물 없이 샤워 가능해질 2050년",
      description:
        "2050년, 야외 캠핑 시 사용할 수 있는 무수 샤워기. 평소에는 에어컨으로 사용하다 샤워를 원할 시 모드 전환으로 간편히 청결을 유지할 수 있다. 물에 대한 수요 증가와 물 부족을 예상하여 디자인된 모델.",
      thumbnail: "images/works/industrial/EunsooKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/industrial/EunsooKim/contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/works/industrial/EunsooKim/contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/industrial/EunsooKim/contents_03.webp",
        },
      ],
    },
  ],
  SERVICE: [
    {
      id: 1,
      teamName: "BEYONIC",
      teamImg: "images/designers/team/BEYONIC.jpg",
      designer: [{ id: 35, nameKo: "변지민", studentId: 22000838}, { id: 42, nameKo: "연승아", studentId: 21800437}, { id: 50, nameKo: "윤규인", studentId: 22100471}],
      professor: "이중섭",
      title: "길찾기가 쉬워지는 도로명주소 시스템",
      summary: "길찾기가 쉬워지는 도로명주소 시스템 서비스 개선 방안 제안",
      description:
        "도로명주소에 주소만 보고 길을 찾을 수 있게 하는 역할이 있다는 것을 알고 계신가요? 현행 도로명주소가 도입된 지 거의 10년, 도로명주소가 익숙하지 않은 이유는 무엇일지 파헤치고 더욱 나아질 수 있도록 분석했습니다.",
      thumbnail: "images/works/service/BEYONIC/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/service/BEYONIC/contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "-r8Z5b4Kn8Q",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/service/BEYONIC/contents_03.webp",
        },
      ],
    },
    {
      id: 2,
      teamName: "APE +",
      teamImg: "images/designers/team/APE.jpg",
      designer: [{ id: 2, nameKo: "강주찬", studentId: 21900015}, { id: 10, nameKo: "김민준", studentId: 21800075}, { id: 49, nameKo: "육지민", studentId: 22100470}, { id: 57, nameKo: "임정훈", studentId: 21700619}],
      professor: "이중섭",
      title: "내오시옷",
      summary: "내 옷 데이터 기반의 옷 추천 서비스",
      description:
        "내오시옷은 사용자의 핸드폰 갤러리에 있는 ‘내 옷 데이터’로부터 시작하는 AI 코디 추천 서비스입니다.\n내가 가진 옷을 자동으로 등록하고, 날씨와 상황에 맞게 조합을 제안하여 현실적인 패션 솔루션을 제공합니다.",
      thumbnail: "images/works/service/APE/thumbnail.webp", // 안보임
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/service/APE/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/service/APE/contents_02.webp",
        },
      ],
    },
    {
      id: 3,
      teamName: "디그리차차!",
      teamImg: "images/designers/team/Degrechacha.jpg",
      designer: [{ id: 12, nameKo: "김민하", studentId: 22000081}, { id: 21, nameKo: "김채영", studentId: 22100209}, { id: 33, nameKo: "박하은", studentId: 22000313}, { id: 38, nameKo: "성윤지", studentId: 22000362}],
      professor: "이중섭",
      title: "머뭄",
      summary: "유기동물 예비 임시보호자를 위한 맞춤형 임시보호 서비스",
      description:
        "‘머무름’의 순간을 소중히 여기며, 임시보호자와 유기동물이 서로에게 포근한 쉼이 되어 주는 시간을 만들어갑니다. 따스한 집의 온기, 새로운 희망의 시작. 머뭄은 이 모든 가치를 담아, 유기동물과 사람이 함께하는 더 나은 내일을 만들어갑니다.",
      thumbnail: "images/works/service/Degreechacha!/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/service/Degreechacha!/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/service/Degreechacha!/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/service/Degreechacha!/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/service/Degreechacha!/contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/service/Degreechacha!/contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/service/Degreechacha!/contents_06.webp",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/service/Degreechacha!/contents_07.webp",
        },
        {
          id: 8,
          extension: "webp",
          src: "images/works/service/Degreechacha!/contents_08.webp",
        },
        {
          id: 9,
          extension: "webp",
          src: "images/works/service/Degreechacha!/contents_09.webp",
        },
        {
          id: 10,
          extension: "webp",
          src: "images/works/service/Degreechacha!/contents_10.webp",
        },
        {
          id: 11,
          extension: "webp",
          src: "images/works/service/Degreechacha!/contents_11.webp",
        },
        {
          id: 12,
          extension: "webp",
          src: "images/works/service/Degreechacha!/contents_12.webp",
        },
        {
          id: 13,
          extension: "webp",
          src: "images/works/service/Degreechacha!/contents_13.webp",
        },
        {
          id: 14,
          extension: "webp",
          src: "images/works/service/Degreechacha!/contents_14.webp",
        },
      ],
    },
    {
      id: 4,
      teamName: "섭씨 25도",
      teamImg: "images/designers/team/Degree25.jpg",
      designer: [{ id: 6, nameKo: "권미소", studentId: 22100051}, { id: 30, nameKo: "박정현", studentId: 21800312}, { id: 40, nameKo: "안민애", studentId: 22101048}, { id: 48, nameKo: "유하은", studentId: 22200478}],
      professor: "이중섭",
      title: "배우보죠",
      summary: "배우의 연기 연습을 도와주는\nAI 연기 파트너 ‘배우보죠'",
      description:
        "배우가 되면 혼자서도 연기 연습 잘할 줄 알았어?!\n'배우보죠'는 배우를 위한 AI 인터랙션 기반 연기훈련 서비스입니다.\nAI와 대사를 주고받고, 장면 속 상황에 반응하며  혼자서도 누군가와\n마주 앉은 듯 몰입할 수 있는 새로운 연기 연습 형태를 제안합니다.",
      thumbnail: "images/works/service/Seopssi25do/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/service/Seopssi25do/contents_01.webp",
        },
      ],
    },
    {
      id: 5,
      teamName: "양떼목장",
      teamImg: "images/designers/team/Yanttea.jpg",
      designer: [{ id: 26, nameKo: "박선영", studentId: 22100276}, { id: 52, nameKo: "이어진", studentId: 22000540}, { id: 45, nameKo: "오은경", studentId: 22101051}, { id: 70, nameKo: "최예영", studentId: 22100744}],
      professor: "이재선",
      title: "쑥쏙",
      summary: "학령전기 비만 아동 관리를 돕는 서비스, 쑥쏙",
      description:
        "쑥쏙은 학령전기 비만 아동의 관리 과정을 돕습니다.\n특히 주양육자인 엄마의 영향력이 가장 큰 만큼, 관리 과정에서 일어날 수 있는 실패 지점들의 상황을 아이가 이해할 수 있도록 돕는 양육 서비스를 제안합니다.",
      thumbnail: "images/works/service/YangTtemokjang/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/service/YangTtemokjang/contents_01.webp",
        },
      ],
    },
    {
      id: 6,
      teamName: "띵필+",
      teamImg: "images/designers/team/Thingpill.jpg",
      designer: [{ id: 36, nameKo: "서주빈", studentId: 22000348}, { id: 41, nameKo: "양진솔", studentId: 22000414}, { id: 67, nameKo: "천예은", studentId: 22000746}, { id: 72, nameKo: "최현성", studentId: 22001072}],
      professor: "이중섭",
      title: "온길",
      summary: "초고령 시대 고령자의 이동 편의를 돕는 서비스, 온길",
      description:
        "전동휠체어를 이용하는 고령자를 위한 실내 길안내 서비스 ‘온길’은 초고령 사회에 맞춰 이동을 쉽고 안전하게 돕는 서비스를 제공합니다. ‘온길’은 실내 공간에서의 이동 경험에 초점을 맞춰, 사용자가 목적지까지 편안하게 이동할 수 있는 새로운 길안내를 제시합니다.",
      thumbnail: "images/works/service/ThingPil/thumbnaill.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/service/ThingPil/contents_01.webp",
        },
      ],
    },
    {
      id: 7,
      teamName: "알덴테",
      teamImg: "images/designers/team/Aldente.jpg",
      designer: [{ id: 24, nameKo: "류하나", studentId: 22100256}, { id: 28, nameKo: "박예빈", studentId: 21900288}, { id: 44, nameKo: "오신영", studentId: 22000427}, { id: 76, nameKo: "홍현지", studentId: 22001079}],
      professor: "이재선",
      title: "byBYE",
      summary: "유산을 경험한 여성들을 위한 애도 서비스, byBYE",
      description:
        "byBYE는 유산으로 자녀를 잃고 충분히 애도할 기회를 갖지 못한 여성들을 위한 서비스입니다.\n이 서비스는 여성에게 안전하고 개인적인 공간을 제공하여, 자신의 감정을 자유롭게 표현하고 상실의 의미를 온전히 받아들일 수 있도록 돕습니다.",
      thumbnail: "images/works/service/Aldente/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/service/Aldente/contents_01.webp",
        },
      ],
    },
    {
      id: 8,
      teamName: "디용즈",
      teamImg: "images/designers/team/Dyeoz.jpg",
      designer: [{ id: 4, nameKo: "강하라", studentId: 21900018}, { id: 20, nameKo: "김종욱", studentId: 22000169}, { id: 43, nameKo: "오사랑", studentId: 22000424}, { id: 69, nameKo: "최서우", studentId: 22100732}],
      professor: "이중섭",
      title: "CYRO",
      summary: "효율적인 소방력 투입을\n돕는 서비스, CYRO",
      description:
        "비화재보로 인한 소방력 낭비가 심각한 상황에서, CYRO를 선발대로 투입하여 현장을 우선 확인합니다. 비화재로 판별될 경우 본대의 출동을 중단하거나 복귀시켜, 불필요한 소방력의 낭비를 줄이고 실화재 대응에 집중할 수 있도록 돕는 선제적 대응 서비스입니다.",
      thumbnail: "images/works/service/DiYongJeu/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/service/DiYongJeu/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/service/DiYongJeu/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/service/DiYongJeu/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/service/DiYongJeu/contents_04.webp",
        },
      ],
    },
    {
      id: 9,
      teamName: "데데디디",
      teamImg: "images/designers/team/Dededidi.jpg",
      designer: [{ id: 46, nameKo: "유은강", studentId: 22100465}, { id: 56, nameKo: "임사랑", studentId: 22100609}, { id: 60, nameKo: "장한나", studentId: 22100642}, { id: 65, nameKo: "조하민", studentId: 22000727}],
      professor: "이재선",
      title: "INT",
      summary: "교정사고 저감을 위한 수용자 AI 음성 상담 서비스",
      description:
        "수용자의 재범률과 교도관의 직업의식에 영향을 미치는 교정사고는 교정‧교화 기능을 저하시킵니다. 수용자 AI 음성 상담 서비스를 도입해 수용자의 어려움을 조기에 파악하고, 교도관에게 고위험 수용자를 리포트하여 교정사고를 사전에 예방하는 것을 목표로 합니다.",
      thumbnail: "images/works/service/Dededidi/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/service/Dededidi/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/service/Dededidi/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/service/Dededidi/contents_03.webp",
        },
      ],
    },
    {
      id: 10,
      teamName: "TriKru",
      teamImg: "images/designers/team/TriKru.jpg",
      designer: [{ id: 7, nameKo: "기은찬", studentId: 21900058}, { id: 25, nameKo: "모리야 토모키", studentId: 22100819}, { id: 27, nameKo: "박아나", studentId: 22100821}],
      professor: "이재선",
      title: "LessQ",
      summary: "등산사고 났을 때의 LessQ를 돕는 서비스",
      description:
        "등산 중 사고에서 ‘골든아워’를 지키는 산악 안전 플랫폼입니다. 자동 감지와 위치 추적으로 사고를 즉시 인식해 구조대에 실시간으로 전달하고, 건강 모니터링과 위험 예측으로 사고를 예방하며 구조 지연으로 인한 생명 손실을 최소화합니다.",
      thumbnail: "images/works/service/TriKru/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/service/TriKru/contents_01.webp",
        },
      ],
    },
    {
      id: 11,
      teamName: "옹뜨리옹",
      teamImg: "images/designers/team/Ongtreeong.jpg",
      designer: [{ id: 14, nameKo: "김선우", studentId: 21900108}, { id: 55, nameKo: "이지애", studentId: 21900566}, { id: 73, nameKo: "한상일", studentId: 21900782}],
      professor: "이중섭",
      title: "Myhaus",
      summary: "포항시 중앙동 빈집을 활용한 가족 친화적 숙박 서비스, Myhaus",
      description:
        "포항 중앙동 빈집을 가족형 숙박공간으로 재탄생시킨 숙박 서비스 'My haus'. 가족 친화적 어메니티, 지역 상권 연계와 제휴 할인·로컬 체험으로 체류형 여행과 지역 경제의 활력을 실현합니다. 낯선 도시에서 즐기는 익숙한 휴식, 'Myhaus'에서 즐겨보세요.",
      thumbnail: "images/works/service/Ongtriong/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/service/Ongtriong/contents_01.webp",
        },
      ],
    },
    {
      id: 12,
      teamName: "위미",
      teamImg: "images/designers/team/Wimi.jpg",
      designer: [{ id: 1, nameKo: "강예은", studentId: 22000009}, { id: 3, nameKo: "강진희", studentId: 22000012}, { id: 53, nameKo: "이유진", studentId: 22000554}, { id: 75, nameKo: "한지원", studentId: 22000792}],
      professor: "이재선",
      title: "ZIP",
      summary: "치매노인 실종 대응 서비스, ZIP",
      description:
        "ZIP은 치매 노인의 길 잃음 자각과 보호자의 실종 판단을 돕습니다. 치매 노인의 비공식적 실종 기록을 이용한 경찰의 수색 대응 서비스를 제안합니다.",
      thumbnail: "images/works/service/WiMi/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/service/WiMi/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/service/WiMi/contents_02.webp",
        },
      ],
    },
  ],
  UX: [
    {
      id: 1,
      teamName: "MiMO",
      teamImg: "images/designers/team/Mimo.jpg",
      designer: [{ id: 5, nameKo: "강희", studentId: 22100027}, { id: 17, nameKo: "김수아", studentId: 22000108}, { id: 34, nameKo: "백송이", studentId: 22100340}, { id: 47, nameKo: "유재선", studentId: 22000461}, { id: 66, nameKo: "조환", studentId: 21900719}],
      professor: "이은종",
      title: "All About Me",
      summary: "All About Me: Beyond View",
      description:
        "All About Me는 ‘나’를 비추는 능동적 매개체로, 기존에 보기 어려웠던 자신의 모습을 다양한 각도에서 새로운 시야로 자신을 인식하고 가꾸도록 합니다.",
      thumbnail: "images/works/ux/MiMO/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/ux/MiMO/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/ux/MiMO/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/ux/MiMO/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/ux/MiMO/contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/ux/MiMO/contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/ux/MiMO/contents_06.webp",
        },
        {
          id: 7,
          extension: "gif",
          src: "images/works/ux/MiMO/contents_07.gif",
        },
        {
          id: 8,
          extension: "webp",
          src: "images/works/ux/MiMO/contents_08.webp",
        },
        {
          id: 9,
          extension: "youtube",
          src: "lLULkqZPm-0",
        },
        {
          id: 10,
          extension: "webp",
          src: "images/works/ux/MiMO/contents_10.webp",
        },
      ],
    },
    {
      id: 2,
      teamName: "Fourest✿",
      teamImg: "images/designers/team/Fourest.jpg",
      designer: [{ id: 23, nameKo: "김혜나", studentId: 22100238}, { id: 51, nameKo: "이수빈", studentId: 22000528}, { id: 61, nameKo: "정경난", studentId: 22100657}, { id: 77, nameKo: "홍휘영", studentId: 22100805}],
      professor: "이은종",
      title: "Bridge Talk",
      summary: "Bridge Talk :\n톡과 통화를 잇는 5가지 순간",
      description:
        "Bridge Talk은 카카오톡 보·페톡이 채팅과 자연스럽게 이어지는\n생활형 통화 플랫폼이라는 점에 주목한다. 통화 전과 중, 그리고\n후의 다섯 핵심 순간에 브릿지를 제안해 대화의 맥락을 지키며,\n통화와 채팅이 자연스럽게 전환되도록 돕는다.",
      thumbnail: "images/works/ux/Fourest/Bridge Talk/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/ux/Fourest/Bridge Talk/contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/works/ux/Fourest/Bridge Talk/contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/ux/Fourest/Bridge Talk/contents_03.webp",
        },
      ],
    },
    {
      id: 3,
      teamName: "HIPPY DEEPY",
      teamImg: "images/designers/team/HIPPYDEEPY.jpg",
      designer: [{ id: 17, nameKo: "김수아", studentId: 22000108}, { id: 66, nameKo: "조환", studentId: 21900719}],
      professor: "이은종",
      title: "CHRISTHON",
      summary: "CHRISTHON: Christ+Hackathon",
      description:
        "CHRISTHON은 인간 중심 디자인(Human-Centered Design)을 기반으로 한 혁신적인 ‘영적 공급 방법론’입니다. 개인의 라이프스타일과 영적 맥락(Context)에 맞춰 전달하여 성경의 진리가 당신의 일상 속에서 살아 움직이게 합니다.",
      thumbnail: "images/works/ux/HIPPYDEEPY/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "gif",
          src: "images/works/ux/HIPPYDEEPY/contents_01.gif",
        },
        {
          id: 2,
          extension: "youtube",
          src: "images/works/ux/HIPPYDEEPY/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/ux/HIPPYDEEPY/contents_03.webp",
        },
        {
          id: 4,
          extension: "gif",
          src: "images/works/ux/HIPPYDEEPY/contents_04.gif",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/ux/HIPPYDEEPY/contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/ux/HIPPYDEEPY/contents_06.webp",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/ux/HIPPYDEEPY/contents_07.webp",
        },
        {
          id: 8,
          extension: "webp",
          src: "images/works/ux/HIPPYDEEPY/contents_08.webp",
        },
        {
          id: 9,
          extension: "webp",
          src: "images/works/ux/HIPPYDEEPY/contents_09.webp",
        },
      ],
    },
    {
      id: 4,
      teamName: "CREA:PATH",
      teamImg: "images/designers/team/CREAPATH.jpg",
      designer: [{ id: 8, nameKo: "김고은", studentId: 22100071}, { id: 16, nameKo: "김수빈", studentId: 21900127}, { id: 63, nameKo: "조예은", studentId: 22100705}, { id: 71, nameKo: "최찬희", studentId: 21900768}],
      professor: "이은종",
      title: "CLORBIT",
      summary: "CLORBIT, 나의 패션에 가장 스마트한 Answer",
      description:
        "자신의 개성을 적극적으로 드러내는 Gen Z에게 패션은 개성 표현의 핵심이지만. 복합적인 조건과 상황은 고민의 연속입니다. 이제 나의 패션을 위한 모든 고민들은 CLORBIT에게 맡기고 '실용적인’, ‘감성적인’, ‘도전적인’ 패션라이프를 집에서 경험해보세요.",
      thumbnail: "images/works/ux/CREA_PATH/CLORBIT/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/ux/CREA_PATH/CLORBIT/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/ux/CREA_PATH/CLORBIT/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/ux/CREA_PATH/CLORBIT/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/ux/CREA_PATH/CLORBIT/contents_04.webp",
        },
      ],
    },
    {
      id: 5,
      teamName: "Marimo",
      teamImg: "images/designers/team/Marimo.jpg",
      designer: [{ id: 5, nameKo: "강희", studentId: 22100027}, { id: 34, nameKo: "백송이", studentId: 22100340}, { id: 47, nameKo: "유재선", studentId: 22000461}],
      professor: "손성찬",
      title: "EVERPORT",
      summary: "EVERPORT: Unfold your dreams, whenEVER, whatEVER",
      description:
        "EVERPORT는 ‘항상 깨어있는 허브 터미널’이라는 개념 아래, 다양한 액티비티가 끊임없이 이어지고 교차되는 도시의 공공 공원으로써, 기존 공원이 가진 경계와 한계를 넘어서 새로운 도시 공간 혁신을 제안합니다.",
      thumbnail: "images/works/ux/Marimo/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/ux/Marimo/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/ux/Marimo/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/ux/Marimo/contents_03.webp",
        },
        {
          id: 4,
          extension: "gif",
          src: "images/works/ux/Marimo/contents_04.gif",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/ux/Marimo/contents_05.webp",
        },
        {
          id: 6,
          extension: "gif",
          src: "images/works/ux/Marimo/contents_06.gif",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/ux/Marimo/contents_07.webp",
        },
        {
          id: 8,
          extension: "webp",
          src: "images/works/ux/Marimo/contents_08.webp",
        },
        {
          id: 9,
          extension: "youtube",
          src: "7YgUu3-A7FI",
        },
        {
          id: 10,
          extension: "webp",
          src: "images/works/ux/Marimo/contents_10.webp",
        },
        {
          id: 11,
          extension: "webp",
          src: "images/works/ux/Marimo/contents_11.webp",
        },
        {
          id: 12,
          extension: "webp",
          src: "images/works/ux/Marimo/contents_12.webp",
        },
      ],
    },
    {
      id: 6,
      teamName: "Fourest✿",
      teamImg: "images/designers/team/Fourest.jpg",
      designer: [{ id: 23, nameKo: "김혜나", studentId: 22100238}, { id: 51, nameKo: "이수빈", studentId: 22000528}, { id: 61, nameKo: "정경난", studentId: 22100657}, { id: 77, nameKo: "홍휘영", studentId: 22100805}],
      professor: "이은종",
      title: "Haven",
      summary: "Haven: 나만의 공간에서\n나만의 방식대로",
      description:
        "Haven은 사용자의 의도에 따라 자유롭게 변형되며, 자신만의 세계를 구성할 수 있는 Screen-Centered Micro Space를 만든다.\n집은 단순한 생활 공간을 넘어 취향과 라이프스타일을 담는 개인적 영역이 되고, 그 중심에는 Haven이 있다.",
      thumbnail: "images/works/ux/Fourest/Haven/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/ux/Fourest/Haven/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/ux/Fourest/Haven/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/ux/Fourest/Haven/contents_03.webp",
        },
      ],
    },
    {
      id: 7,
      teamName: "FRIGUYS",
      teamImg: "images/designers/team/FRIGUYS.jpg",
      designer: [{ id: 15, nameKo: "김소영", studentId: 22200102}, { id: 18, nameKo: "김수정", studentId: 22000112}, { id: 22, nameKo: "김채영", studentId: 22000191}, { id: 62, nameKo: "정승준", studentId: 22000675}],
      professor: "이은종",
      title: "HOMING",
      summary: "Meet Your New Companion, Homing",
      description:
        "Homing은 Z세대의 집에서 사용자와 공간의 맥락, 그리고 사용자의 감정과 리듬에 따라 반응하고 변화하는 새로운 형태의 홈 스크린 경험을 제안합니다.",
      thumbnail: "images/works/ux/FRIGUYS/HOMING/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/ux/FRIGUYS/HOMING/contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "watch?v=bG5XyCA2rc0",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/ux/FRIGUYS/HOMING/contents_03.webp",
        },
        {
          id: 4,
          extension: "gif",
          src: "images/works/ux/FRIGUYS/HOMING/contents_04.gif",
        },
        {
          id: 5,
          extension: "gif",
          src: "images/works/ux/FRIGUYS/HOMING/contents_05.gif",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/ux/FRIGUYS/HOMING/contents_06.webp",
        },
      ],
    },
    {
      id: 8,
      teamName: "好樂好樂: 호락호락",
      teamImg: "images/designers/team/Horakhorak.jpg",
      designer: [{ id: 9, nameKo: "김근희", studentId: 22000052}, { id: 37, nameKo: "석예슬", studentId: 22000356}, { id: 58, nameKo: "장수민", studentId: 22000623}, { id: 64, nameKo: "조예준", studentId: 22000721}],
      professor: "이은종",
      title: "LooME",
      summary: "LooME: Light That Moves You.",
      description:
        "LooME는 공간의 흐름과 나의 리듬을 이해해, 건강한 home life를 만들어주는 AI\ncompanion입니다.\n익숙한 공간 속 작은 변화를 통해 나다운 일상의 균형을 찾아갑니다",
      thumbnail: "images/works/ux/Horakorak/LooMe/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/ux/Horakorak/LooMe/contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/works/ux/Horakorak/LooMe/contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/ux/Horakorak/LooMe/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/ux/Horakorak/LooMe/contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/ux/Horakorak/LooMe/contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/ux/Horakorak/LooMe/contents_06.webp",
        },
      ],
    },
    {
      id: 9,
      teamName: "Bando",
      teamImg: "images/designers/team/Bando.jpg",
      designer: [{ id: 11, nameKo: "김민지", studentId: 22100098}, { id: 39, nameKo: "송연수", studentId: 22100393}, { id: 59, nameKo: "장주영", studentId: 21900631}],
      professor: "이은종",
      title: "Pipe-lo",
      summary: "Pipe-lo\n: 맞춤형 통화를 위한 파이프라인",
      description:
        "Pipe-lo는 얽혀 있던 통화를 네 개의 파이프라인으로 나누어 목적에 따라 정리합니다. 구조화된 대화는 시작, 전환, 기억, 실행의 흐름 속에서 필요한 행위를 지원하며, 원활한 커뮤니케이션과 회상을 가능하게 합니다.",
      thumbnail: "images/works/ux/Bando/Pipe-lo/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/ux/Bando/Pipe-lo/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/ux/Bando/Pipe-lo/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/ux/Bando/Pipe-lo/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/ux/Bando/Pipe-lo/contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/ux/Bando/Pipe-lo/contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/ux/Bando/Pipe-lo/contents_06.webp",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/ux/Bando/Pipe-lo/contents_07.webp",
        },
      ],
    },
    {
      id: 10,
      teamName: "DE:CODE",
      teamImg: "images/designers/team/DECODE.jpg",
      designer: [{ id: 29, nameKo: "박정민", studentId: 22100295}, { id: 32, nameKo: "박창휘", studentId: 21900321}, { id: 74, nameKo: "한지영", studentId: 22100779}],
      professor: "손성찬",
      title: "Project NAIN",
      summary: "Project NAIN\n: Where Nature Inspires Ideas",
      description:
        "Project NAIN은 스타트업 파크 내 사용자들의 영감, 회복, 연결, 협력과 몰입을 위한 새로운 공간을 제안합니다. 자연에서 느낄 수 있는 감각과 동굴에서 모티브를 얻었으며, 누구나 자신만의 방식으로 머물 수 있는 자유롭고 경험의 밀도가 높은 공간입니다.",
      thumbnail: "images/works/ux/Decode/ProjectNAIN/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/ux/Decode/ProjectNAIN/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/ux/Decode/ProjectNAIN/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/ux/Decode/ProjectNAIN/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/ux/Decode/ProjectNAIN/contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/ux/Decode/ProjectNAIN/contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/ux/Decode/ProjectNAIN/contents_06.webp",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/ux/Decode/ProjectNAIN/contents_07.webp",
        },
        {
          id: 8,
          extension: "webp",
          src: "images/works/ux/Decode/ProjectNAIN/contents_08.webp",
        },
        {
          id: 9,
          extension: "webp",
          src: "images/works/ux/Decode/ProjectNAIN/contents_09.webp",
        },
        {
          id: 10,
          extension: "webp",
          src: "images/works/ux/Decode/ProjectNAIN/contents_10.webp",
        },
        {
          id: 11,
          extension: "webp",
          src: "images/works/ux/Decode/ProjectNAIN/contents_11.webp",
        },
        {
          id: 12,
          extension: "webp",
          src: "images/works/ux/Decode/ProjectNAIN/contents_12.webp",
        },
      ],
    },
    {
      id: 11,
      teamName: "好樂好樂: 호락호락",
      teamImg: "images/designers/team/Horakhorak.jpg",
      designer: [{ id: 9, nameKo: "김근희", studentId: 22000052}, { id: 37, nameKo: "석예슬", studentId: 22000356}, { id: 58, nameKo: "장수민", studentId: 22000623}, { id: 64, nameKo: "조예준", studentId: 22000721}],
      professor: "손성찬",
      title: "Proto-Hour",
      summary: "Proto-Hour: Anchoring the City",
      description:
        "도시의 새로운 중심이자 연결의 거점이 되는 ‘프로토아워’는\n아이디어가 모이고 실험이 일어나는 앵커 스페이스입니다.\n시민과 창업가가 함께 도시의 변화를 설계하며, 관계와 가능성이\n교차하는 시간과 공간을 만듭니다.",
      thumbnail: "images/works/ux/Horakorak/Proto-Hour/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/ux/Horakorak/Proto-Hour/contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/works/ux/Horakorak/Proto-Hour/contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/ux/Horakorak/Proto-Hour/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/ux/Horakorak/Proto-Hour/contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/ux/Horakorak/Proto-Hour/contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/ux/Horakorak/Proto-Hour/contents_06.webp",
        },
      ],
    },
    {
      id: 12,
      teamName: "DE:CODE",
      teamImg: "images/designers/team/DECODE.jpg",
      designer: [{ id: 29, nameKo: "박정민", studentId: 22100295}, { id: 32, nameKo: "박창휘", studentId: 21900321}, { id: 74, nameKo: "한지영", studentId: 22100779}],
      professor: "이은종",
      title: "stayz.",
      summary: "stay in bed, stayz.",
      description:
        "Z세대의 또 하나의 생활공간, 침대. 그 위 순간을 가장 퍼스널하게 완성해줄 홈디스플레이 stayz. 활동 및 컨텍스트에 맞춘 서라운딩 조명과 콘텐츠가 무드를 연출해주고, 어떤 자세에도 조절 가능한 스크린으로 감각적이고 Effortless한 경험을 즐겨보세요.",
      thumbnail: "images/works/ux/Decode/stayz/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/ux/Decode/stayz/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/ux/Decode/stayz/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/ux/Decode/stayz/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/ux/Decode/stayz/contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "s3://degree-upload-files/images/works/ux/Decode/stayz/contents_05.webp",
        },
        {
          id: 6,
          extension: "youtube",
          src: "q6mAzBoP2Ag",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/ux/Decode/stayz/contents_07.webp",
        },
        {
          id: 8,
          extension: "webp",
          src: "images/works/ux/Decode/stayz/contents_08.webp",
        },
        {
          id: 9,
          extension: "webp",
          src: "images/works/ux/Decode/stayz/contents_09.webp",
        },
        {
          id: 10,
          extension: "webp",
          src: "images/works/ux/Decode/stayz/contents_10.webp",
        },
      ],
    },
    {
      id: 13,
      teamName: "CREA:PATH",
      teamImg: "images/designers/team/CREAPATH.jpg",
      designer: [{ id: 8, nameKo: "김고은", studentId: 22100071}, { id: 16, nameKo: "김수빈", studentId: 21900127}, { id: 63, nameKo: "조예은", studentId: 22100705}, { id: 71, nameKo: "최찬희", studentId: 21900768}],
      professor: "이은종",
      title: "Talk-Zip",
      summary: "KAKAO: 보페톡 개선 프로젝트",
      description:
        "보페톡의 모든 불편함과 아쉬움을 해결할 8가지 새로운 기능을 소개합니다. 연결부터 대화, 기록, 마무리에 이르기까지 통화의 모든 순간을 의미 있는 과정으로 만들며, 가장 편안한 소통을 제공합니다. 새로워진 보페톡을 지금 만나보세요!",
      thumbnail: "images/works/ux/CREA_PATH/Talk-Zip/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/ux/CREA_PATH/Talk-Zip/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/ux/CREA_PATH/Talk-Zip/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/ux/CREA_PATH/Talk-Zip/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/ux/CREA_PATH/Talk-Zip/contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/works/ux/CREA_PATH/Talk-Zip/contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/ux/CREA_PATH/Talk-Zip/contents_06.webp",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/ux/CREA_PATH/Talk-Zip/contents_07.webp",
        },
        {
          id: 8,
          extension: "webp",
          src: "images/works/ux/CREA_PATH/Talk-Zip/contents_08.webp",
        },
      ],
    },
    {
      id: 14,
      teamName: "FRIGUYS",
      teamImg: "images/designers/team/FRIGUYS.jpg",
      designer: [{ id: 15, nameKo: "김소영", studentId: 22200102}, { id: 18, nameKo: "김수정", studentId: 22000112}, { id: 22, nameKo: "김채영", studentId: 22000191}, { id: 62, nameKo: "정승준", studentId: 22000675}],
      professor: "이은종",
      title: "Threads Hub",
      summary: "Threads Hub\n: 통화 흐름부터 삶의 흐름까지 한 번에",
      description:
        "Threads Hub는 통화 기반의 일상 기록을 새롭게 정의한 프로젝트입니다. 흩어진 통화들을 주제별로 묶어, 사람과 일상의 흐름을 하나의 스레드로 이어줍니다. 대화의 맥락 속에서 삶의 이야기를 다시 발견하게 하는 AI 기반 통화 허브입니다.",
      thumbnail: "images/works/ux/FRIGUYS/Threads Hub/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/ux/FRIGUYS/Threads Hub/contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/works/ux/FRIGUYS/Threads Hub/contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/ux/FRIGUYS/Threads Hub/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/ux/FRIGUYS/Threads Hub/contents_04.webp",
        },
      ],
    },
    {
      id: 15,
      teamName: "Bando",
      teamImg: "images/designers/team/Bando.jpg",
      designer: [{ id: 11, nameKo: "김민지", studentId: 22100098}, { id: 39, nameKo: "송연수", studentId: 22100393}, { id: 59, nameKo: "장주영", studentId: 21900631}],
      professor: "이은종",
      title: "TUK",
      summary: "TUK: 무심한 듯 ‘툭’ 존재하는 sentient being",
      description:
        "TUK은 집 안의 중심에서 나를 바라보고, 느끼고, 조용히 반응하는 지적인 존재입니다. 무심코 스친 Momentary한 순간에도 TUK은 알아채고, 작지만 분명한 방식으로 응답합니다. 짧지만 깊은 교감은 일상의 순간들을 더 특별하고 생동감 넘치게 합니다.",
      thumbnail: "images/works/ux/Bando/TUK/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/works/ux/Bando/TUK/contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/works/ux/Bando/TUK/contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/works/ux/Bando/TUK/contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/works/ux/Bando/TUK/contents_04.webp",
        },
        {
          id: 5,
          extension: "youtube",
          src: "Gcd7joh2WXo",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/works/ux/Bando/TUK/contents_06.webp",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/works/ux/Bando/TUK/contents_07.webp",
        },
      ],
    },
  ]
}
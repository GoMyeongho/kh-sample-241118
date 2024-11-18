import Article from "./Article";

const data = [
	{
		title: "정치",
		description: "[서울=뉴시스] 조성봉 기자 = 우원식 국회의장과 추경호 국민의힘 원내대표가 18일 서울 여의도 국회의장실에서 국회의장-여야 원내대표 회동에 앞서 악수하고 있다. 오른쪽은 박찬대 더불어민주당 원내대표. (공동취재) 2024.11.18. photo@new",
		date: "2024-11-18"
	},
	{
		title: "경제",
		description: "서울=뉴시스]이현주 기자 = CJ그룹이 18일 CJ주식회사 경영지원대표로 허민회 CJ CGV 대표이사를 선임하는 내용의 2025 정기임원인사를 단행했다.\n" +
			"\n" +
			"CJ CGV 신임 대표이사에는 정종민 CJ CGV 터키법인장이, CJ ENM 커머스부문 대표에는 이선영 CJ ENM 커머스부문 사업총괄이 내정됐다.",
		date: "2024-11-18"
	},
	{
		title: "사회",
		description: "[청주=뉴시스] 김재광 기자 = 충북도교육청은 18일 호찌민 한국국제학교(교장 손성호), 하노이 한국교육원 등에 교육용 물품을 기탁했다.\n",
		date: "2024-11-18"
	},
	{
		title: "세계",
		description: "[서울=뉴시스] 구자룡 기자 = 키어 스타머 영국 총리는 브라질에서 열리는 주요 20개국(G20) 정상회의에서 중국의 시진핑 국가주석을 만날 예정이라고 말했다.\n",
		date: "2024-11-18"
	}
]



const Articles = () => {
	return (
		<>
			<h1>오늘의 뉴스</h1>
			{data && data.map((e) => <Article data={e} />)}
		</>
	);
};

export default Articles;
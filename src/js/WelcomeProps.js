
// 컴포넌트 : 리액트에서 UI를 구성하는 독립적인 모듈
// UI와 상태(State)를 가짐
// 대문자로 시작해야 함(소문자로 시작하면 html 태그로 판단 해버림)
// 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달할 때는 props 로 전달해햐 함.
// props 는 키워드가 아님
const WelcomeProps = (props) => {
	return(
		<>
			<h1>안녕하세요 {props.name}님</h1>
			<p>직업 : {props.job}</p>
			<p>주소 : {props.addr}</p>
			{props.isAdult ? (<p>성인 입니다.</p>) : (<p>미성년자 입니다.</p>)}
		</>
	);
};

export default WelcomeProps;
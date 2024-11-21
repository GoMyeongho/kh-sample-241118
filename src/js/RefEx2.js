import { useRef, useEffect } from "react";

const InnerValueKeep = () => {
	// 특정한 DOM 의 위치를 가리키기 위해서 사용
	const myButtonRef = useRef(null);
	
	useEffect(() => {
		// 내부 값을 유지하기 위한 current 라는 필드가 생김
		if (myButtonRef.current) {
			myButtonRef.current.innerText = "클릭하세요";
		}
	},[]);
	
	// 컴포넌트 내부 변수값 유지
	const count = useRef(0);
	
	const handleClick = () => {
		count.current++;
		alert(`클릭 횟수 : ${count.current}`);
	}
	return (
		<>
			<button ref={myButtonRef} onClick={handleClick}>확인</button>
			
		</>
	)
}
export default InnerValueKeep;
// 복잡한 로직을 가진 상태들을 관리하는데에 유용

import { useReducer } from "react";
// state : 상태를 바꿀 대상
// action : 바꾸는 형태
function reducer(state, action) {
	// 액션 타입에 따라 다른 작업 수행
	switch(action.type) {
		case "INCREMENT":
			return {value:state.value + 1};
		case "DECREMENT":
			return {value:state.value - 1};
		default :
			return state;
	}
}
// 관례상의 이름들 : state, dispatch, reducer, action
// dispatch : 형태를 선택하기 위한 함수
const ReducerCnt = () => {
	const [state, dispatch] = useReducer(reducer, {value:0}); // 상태값이 객체
	return (
		<>
			<p>
				현재 카운터 값은 {state.value}
			</p>
			<button onClick={() => dispatch({type:"INCREMENT"})}>증가</button>
			<button onClick={() => dispatch({type:"DECREMENT"})}>감소</button>
		</>
	);
}
export default ReducerCnt;
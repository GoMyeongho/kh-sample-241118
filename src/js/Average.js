import {useCallback, useMemo, useState} from "react";

const getAverage = numbers => {
	console.log("평균값 계산중")
	if(numbers.length === 0) {return 0}
	// acc : reduce 의 결과가 저장되는 변수
	// curr : reduce 로 처리해줄 새로운 변수
	const sum = numbers.reduce((acc, curr) => acc + curr, 0);
	return sum / numbers.length;
}

const Average = () => {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState("")
	// mount 될때만 만들고 리렌더링시에는 만들지 않음
	const onChange = useCallback(e => setNumber(e.target.value),[]);
	
	// nextList 값이 바뀔 때에 변수를 지정해준다면, 리렌더링시 유지가 안됨
	const avg = useMemo(() => getAverage(list), [list]);
	
	const onInsert = useCallback(() => {
		const nextList = list.concat(parseInt(number));
		// 입력받은 값을 정수로 변환
		setList(nextList);
		// 새로 만들어진 배열로 상태 변경
		setNumber("");
	}, [number]);
	// 이벤트 핸들러 안에서는 참조, 아니면 즉시 호출로
	return(
		<>
			<input value={number} onChange={onChange}/>
			<button onClick={onInsert}>등록</button>
			<ul>
				{list && list.map((item, index) => <li key={index}>{item}</li>)}
				<p>평균값 : {avg}</p>
			</ul>
		</>
	)
}
export default Average;
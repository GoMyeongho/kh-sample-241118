import {useState, useEffect} from 'react';

const Clock = () => {
	const [date, setDate] = useState(new Date());
	// setInterval 이 리렌더링 될때마다 만들어지기 때문에 이러면 메모리 소모가 너무나 큼
	// 따라서 useEffect 를 사용해서 마운트 될때 한번만 불러주게 만듦
	useEffect(() => {
		const intervalID = setInterval(() => setDate(new Date()), 1000);
		return () => clearInterval(intervalID); // 마운트 끝날때 할 것 : 인터벌 지우기
	}, []) // 의존성 배열이라고 하며, []빈 배열이면 마운트 시점을 의미
	// [] 안에는 업데이트 될때마다 실행되는 부분
	
	return(
		<>
			<h1>현재 시간을 표시 합니다.</h1>
			<h2>현재 시간은 {date.toLocaleTimeString()}</h2>
		</>
	)
}


export default Clock;
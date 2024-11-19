import { useState } from 'react';

const EventPractice = () => {
	const [message,setMessage] = useState('');
	const [userName,setUserName] = useState('');
	const changeMessage = event => setMessage(event.target.value);
	const changeUserName = event => setUserName(event.target.value);
	const onClick = () => {
		alert(`${userName} : ${message} `)
		setUserName(''); // 입력창 비우기
		setMessage('');
	}
	// Enter Key 가 입력되면 onClick() 호출
	const onKeyPress = event => {
		if(event.key === 'Enter') onClick();
	}
	// onChange 이벤트는 매개변수 없이도 자동으로 들어감
	return (
		<>
			<h1>이벤트 연습</h1>
			<input type="text" placeholder="사용자명" onChange={changeUserName} value={userName}/>
			<input type="text" placeholder="아무거나 입력" value={message} onChange={changeMessage} onKeyDown={onKeyPress} />
			<button onClick={onClick}>확인</button>
		</>
	)
}

export default EventPractice;
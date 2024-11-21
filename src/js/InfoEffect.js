import {useEffect, useState} from "react";


const InfoEffect =() => {
	const [name, setName] = useState('');
	const [nickName, setNickName] = useState('');
	// useEffect 에 빈배열 없으면 useEffect 없는 것과 같음, 그리고 안에 setter 을 넣으면 무한루프 걸릴 수도 있음
	useEffect(() => {
		console.log("렌더링이 완료 되었습니다.")
		console.log("name : ", name);
		console.log("nickName : ", nickName);
	},[]);
	
	const onChangeName = e => setName(e.target.value);
	const onChangeNickName = e => setNickName(e.target.value);
	return (
		<>
			<input value={name} onChange={onChangeName} type="text"/>
			<input value={nickName} onChange={onChangeNickName} type="text"/>
			<br/>
			<p>이름 : {name}, 닉네임 : {nickName}</p>
		</>
	)
}

export default InfoEffect;
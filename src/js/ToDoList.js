import {useEffect, useState} from "react";

// concat : 불변성의 원칙을 지키기 위해

const ToDoList = () => {
	// const [names, setNames] = useState([
	// 	{id: 1, text: "HTML"},
	// 	{id: 2, text: "CSS"},
	// 	{id: 3, text: "JavaScript"},
	// 	{id: 4, text: "React"},
	// ]);
	
	const [names, setNames] = useState(() => {
		// Try to retrieve names from localStorage, or use the initial array if not present
		const storedNames = localStorage.getItem("names");
		return storedNames
			? JSON.parse(storedNames)
			: [
				{ id: 1, text: "HTML 연습" },
				{ id: 2, text: "CSS 복습" },
				{ id: 3, text: "자바스트립트 이해" },
				{ id: 4, text: "리액트프로젝트" },
			];
	});
	// names 가 상태가 바뀌고 난 다음에 불려짐
	useEffect(() => {
		localStorage.setItem("names", JSON.stringify(names));
	}, [names]);
	
	const [inputText, setInputText] = useState("");
	const [nextId, setNextId] = useState(5);
	const onChange = e => setInputText(e.target.value);
	const onClick = () => {
		// const nextNames = names.concat({id: nextId, text: inputText});
		const nextNames = [...names, {id: nextId, text: inputText}];
		// 렌더링이 2~3개 정도는 괜찮지만 for문 안에 넣거나 여러개 넣으면 렌더링이 너무 잦아 좋지 않음
		setNextId(nextId + 1);  // id를 증가시킴
		setNames(nextNames);          // to do list 갱신
		setInputText("");       // 입력창을 초기화
	};
	const onRemove = id => {
		// 조건에 맞는 요소만 반환받아서 새로운 배열 생성
		const nextNames = names.filter(name => name.id !== id);
		setNames(nextNames);
	}
	
	return (
		<>
			<input value={inputText} onChange={onChange} type="text"/>
			<button onClick={onClick}>추가</button>
			<ul>
				{names && names.map(name => (
					<li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
				))}
			</ul>
			
		</>
	)
};
export default ToDoList
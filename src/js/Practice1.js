import {useState} from "react";
import styled from "styled-components";

const Div = styled.div`
		width: 500px;
		margin: 20px auto;
		display: flex;
		flex-direction: column;
		align-items: end;
		border-radius: 10px;
		background-color: #aaa;
		color: #fff;
		input{
				width: 300px;
				padding: 10px 20px;
				margin : 20px 20px;
				border-radius: 8px;
		}
		button{
				background-color: #333;
				color: #fff;
				width: 150px;
				border : 1px solid #fff;
				box-shadow: 2px 4px 6px 0 black;
				margin: 20px auto;
				padding: 10px 20px;
				border-radius: 8px;
				transition: all 0.1s;
		}
		button:active{
				box-shadow: 1px 2px 4px 0 black;
				color: #ccc;
				border : 1px solid #ccc;
		}
		h1{
				margin: 20px auto;
		}
`;

const Practice1 = () => {
	const [info, setInfo] = useState({
		name: '',
		job: '',
		company: '',
		addr: '',
		email: '',
		phone: ''
	})
	
	const onChange = (e) => {
		const {name, value} = e.target
		setInfo({
			...info,
			// 계산된 속성명 : ES6 에서 추가, []안에 표현식을 넣으면 됨
			[name]: value
		})
	}
	
	const onClick = () => {
		console.log(info)
		alert(
			`이름 : ${info.name}, 직책 : ${info.job}, 회사명 : ${info.company}, 회사주소 : ${info.addr}, 이메일 : ${info.email}, 전화번호 : ${info.phone}`
		)
		setInfo({
			name: '',
			job: '',
			company: '',
			addr: '',
			email: '',
			phone: ''
		})
	}
	
	return(
		<Div>
			<h1>입력하세요</h1>
			<label htmlFor="name">
				이름 :
				<input name="name" value={info.name} onChange={onChange}/>
			</label>
			<label htmlFor="job">
				직책 :
				<input name="job" value={info.job} onChange={onChange}/>
			</label>
			<label htmlFor="company">
				회사명 :
				<input name="company" value={info.company} onChange={onChange}/>
			</label>
			<label htmlFor="addr">
				회사 주소 :
				<input name="addr" value={info.addr} onChange={onChange}/>
			</label>
			<label htmlFor="email">
				이메일 :
				<input name="email" value={info.email} onChange={onChange}/>
			</label>
			<label htmlFor="phone">
				전화번호 :
				<input name="phone" value={info.phone} onChange={onChange}/>
			</label>
			<button onClick={onClick}>출력</button>
		</Div>
	)
}
export default Practice1;
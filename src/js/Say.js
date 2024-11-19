import React, { useState } from 'react';
import styled from "styled-components";

const Container = styled.div`
		width: 500px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 20px auto;
		gap: 20px;
		input {
				width: 300px;
				height: 30px;
				border-radius: 8px;
		}
`;

const BtnContainer = styled.div`
		display: flex;
		justify-content: center;
		gap: 10px;
		background-color: #fff;
`;
const Button = styled.button`
		box-sizing: border-box;
		width: 150px;
		padding: 10px 20px;
		border-radius: 8px;
		border: 1px solid #fff;
		color: white;
		font-size: 1.4em;
		font-weight: bold;
		background-color: ${props => props.color || "black"};
		box-shadow: 2px 4px 6px 0 black;
		transition: all 0.1s;
		&:hover{
				border-color: #ccc;
				color: #ccc;
				cursor: pointer;
		}
		&:active{
				transform: translateY(2px);
				box-shadow: 1px 2px 4px 0 black;
		}
`;

const Say = () => {
	const [message, setMessage] = useState('');
	const [value, setValue] = useState('black');
	const onClickEnter = () => setMessage('안녕하세요~~~');
	const onClickLeave = () => setMessage('안녕히 가세요~~');
	const onClickMessage = (msg) => setMessage(msg)
	return (
		<Container>
			<input type="text" onChange={(e) => onClickMessage(e.target.value)} />
			<BtnContainer>
				<Button onClick={onClickEnter}>입장</Button>
				<Button onClick={onClickLeave}>퇴장</Button>
			</BtnContainer>
			<h1 style={{color: value}}>{message}</h1>
			<BtnContainer>
				<Button color="red" onClick={() => {
					setValue("red")
				}}>붉은색
				</Button>
				<Button color="blue" onClick={() => {
					setValue("blue")
				}}>푸른색
				</Button>
				<Button color="green" onClick={() => {
					setValue("green")
				}}>초록색
				</Button>
			</BtnContainer>
		
		</Container>
	)
}
export default Say;
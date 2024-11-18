import styled from "styled-components";

const BoxStyle = styled.div`
		border: 1px solid black;
		padding: 10px;
		width: 300px;
		background-color: royalblue;
		color: white;
		text-align: center;
		margin: 10px;
		border-radius: 10px;
		font-size: 1.5em;
`;

const BoxComponent = ({children}) => {
	
	return (
		<>
		<BoxStyle>
			{children}
		</BoxStyle>
		</>
	)
};

export default BoxComponent;
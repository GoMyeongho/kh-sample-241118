import styled from "styled-components";
import {useEffect, useState} from "react";

const Table = styled.table`
		border-collapse: collapse;
		background-color: antiquewhite;
		
		th, td {
				border: 1px solid #ccc;
				padding: 4px 8px
		}
		th{
				background-color: royalblue;
				color: white;
		}
		
`;

const responseData =[
	{
		id: 1,
		name: "민지",
		addr: "서울시 강남구 신사동"
	},
	{
		id: 2,
		name: "하니",
		addr: "서울시 강남구 역삼동",
	},
	{
		id: 3,
		name: "혜린",
		addr: "서울시 강남구 청담동",
	},
	{
		id: 4,
		name: "다니엘",
		addr: "사울시 강남구 삼성동",
	},
	{
		id: 5,
		name: "혜인",
		addr: "서울시 강남구 선릉동",
	}
]

const TableMap = () => {
	const [memberData, setMemberData] = useState([]);
	
	useEffect(() => {
		// 이때 서버와 비동기 통신이 일어남
		setTimeout(() => {
			setMemberData(responseData)
		}, 1000);
	},[]);
	
	const handleTableRowClick = (item) => {
		console.log(item);
	}
	return (
		<Table>
			<tr>
				<th>ID</th>
				<th>이름</th>
				<th>주소</th>
			</tr>
			{memberData && memberData.map(e => (
				<tr key={e.id} onClick={() => handleTableRowClick(e)}>
					<td>{e.id}</td>
					<td>{e.name}</td>
					<td>{e.addr}</td>
				</tr>
			))}
		</Table>
	)
}
// map 에 리턴 없이 하려면 소괄호
// 조건부 렌더링이 없으면 데이터가 없으면 오류가 남
export default TableMap;
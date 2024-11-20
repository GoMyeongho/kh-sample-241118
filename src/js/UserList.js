import styled from "styled-components";

const DivBox = styled.div`
		width: 300px;
		height: 200px;
		background-color: #ccc;
		margin: 10px auto;
		padding: 10px 20px;
		border-radius: 10px;
		font-size: 1.4em;
		display: flex;
		flex-direction: column;
		align-items: center;
`

const data = [
	{
		id: 100,
		userName: 'John',
		email: "john@gmail.com",
	},
	{
		id: 200,
		userName: 'Jane',
		email: "jane@gmail.com",
	},
	{
		id: 300,
		userName: 'Mary',
		email: "mary@gmail.com",
	},
	{
		id: 400,
		userName: 'Bob',
		email: "bob@gmail.com",
	},
	{
		id: 500,
		userName: 'Alice',
		email: "alice@gmail.com",
	},
]
//구조분해되지 않음
// const User = (props) => {
// 	return(
// 		<div>
// 			<p>ID : {props.user.id}</p>
// 			<b>{props.user.userName}</b> <span>: {props.user.email}</span>
// 		</div>
// 	)
// }

// 구조분해
const User = ({user}) => {
	return(
		<DivBox>
			<p>ID : {user.id}</p>
			<b>{user.userName}</b>
			<p>{user.email}</p>
		</DivBox>
	)
}


// // 하드코딩
// const UserList = () => {
// 	return (
// 		<>
// 			<div>
// 				<p>ID : {data[0].id}</p>
// 				<b>{data[0].userName}</b> <span>: {data[0].email}</span>
// 			</div>
// 			<div>
// 				<p>ID : {data[1].id}</p>
// 				<b>{data[1].userName}</b> <span>: {data[1].email}</span>
// 			</div>
// 			<div>
// 				<p>ID : {data[2].id}</p>
// 				<b>{data[2].userName}</b> <span>: {data[2].email}</span>
// 			</div>
// 			<div>
// 				<p>ID : {data[3].id}</p>
// 				<b>{data[3].userName}</b> <span>: {data[3].email}</span>
// 			</div>
// 			<div>
// 				<p>ID : {data[4].id}</p>
// 				<b>{data[4].userName}</b> <span>: {data[4].email}</span>
// 			</div>
// 		</>
// 	);
// }

// // 변수의 개수를 알고 있을 때의 코딩
// const UserList = () => {
// 	return (
// 		<>
// 			<User user={data[0]} />
// 			<User user={data[1]} />
// 			<User user={data[2]} />
// 			<User user={data[3]} />
// 			<User user={data[4]} />
// 		</>
// 	)
// }

// key 값이 중복되면 중복된 항목이 안나올 수 있다. 만약 Unique 한 값인지 긴가하면
// map((user, index) => <User key={index}와 같이 표현
const UserList = () => {
	return(
		<>
			{data && data.map(user => <User key={user.id} user={user} />)}
		</>
	)
}

export default UserList;
import {useState} from "react";


const RadioButton = () => {
	const [selectedValue, setSelectedValue] = useState("apple");
	
	const handleChange = e => setSelectedValue(e.target.value);
	
	return (
		<>
			<label htmlFor="apple">
				<input type="radio" name="fruits" id="apple" value="apple" checked={selectedValue === "apple"}
				       onChange={handleChange}/>사과
			</label>
			<br/>
			<label htmlFor="banana">
				<input type="radio" name="fruits" id="banana" value="banana" checked={selectedValue === "banana"}
				       onChange={handleChange}/>바나나
			</label>
			<br/>
			<label htmlFor="grape">
				<input type="radio" name="fruits" id="grape" value="grape" checked={selectedValue === "grape"}
				       onChange={handleChange}/>포도
			</label>
			<br/>
			<label htmlFor="watermelon">
				<input type="radio" name="fruits" id="watermelon" value="watermelon" checked={selectedValue === "watermelon"}
				       onChange={handleChange}/>사과
			</label>
			<p>선택된 과일 : {selectedValue}</p>
		</>
	)
}
export default RadioButton;
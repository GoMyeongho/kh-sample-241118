import "./App.css"
import JsxSyntax from "./js/JsxSyntax";
import GreetingComponent from "./js/GreetingComponent";
import WelcomeProps from "./js/WelcomeProps";
import Articles from "./js/Articles";

const productInfo = {
  date: "2024-09-01",
  product: "iphone 16 Pro"
}

function App() {
  return (
    <>
      <Articles/>
      
      
      
      {/*<JsxSyntax/>*/}
      {/*<GreetingComponent/>*/}
      {/*<WelcomeProps name="곰돌이사육사" job="개발자" addr="경기도 수원시" isAdult={true} info = {productInfo}/>*/}
      {/*<hr/>*/}
      {/*<WelcomeProps name="안유진" job="아이돌" addr="성심당" isAdult={true} info = {productInfo}/>*/}
      {/*<hr/>*/}
      {/*<WelcomeProps name="장원영" job="아이돌" addr="서울" isAdult={true} info = {productInfo}/>*/}
    </>
  );
}

export default App;

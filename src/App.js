import "./App.css"
import JsxSyntax from "./js/JsxSyntax";
import GreetingComponent from "./js/GreetingComponent";
import WelcomeProps from "./js/WelcomeProps";


function App() {
  return (
    <>
      <h1>여기는 App.js 입니다.</h1>
      {/*<JsxSyntax/>*/}
      {/*<GreetingComponent/>*/}
      <WelcomeProps name="곰돌이사육사" job="개발자" addr="경기도 수원시" isAdult={true} />
    </>
  );
}

export default App;

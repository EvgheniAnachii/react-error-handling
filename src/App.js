import './App.css';
import MyComponent from "./MyComponent";
import {useState} from "react";

function App() {
  const [isToShow, setIsToShow] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setIsToShow(true)}>Render MyComponent with try/catch updating state</button>
      {isToShow && <MyComponent/>}
    </div>
  );
}

export default App;

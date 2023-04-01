import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import PriceList from "./component/Pricelist/PriceList";
import Deshboard from "./component/Deshboard/Deshboard";
import PhoneBar from "./component/PhoneBar/PhoneBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <h1 className="text-7xl text-purple-600 text-center my-4">
        Hello from tailwind
      </h1>
      <PriceList />
      <Deshboard />
      <PhoneBar />
    </div>
  );
}

export default App;

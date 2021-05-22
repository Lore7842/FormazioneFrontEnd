import React, { useState } from "react";
import JoinButton from "./Components/JoinButton";
import LeftContainer from "./Components/LeftContainer";
import { Header, Footer, Info } from "./Components/BasicComponents";
import "./CSS/mycss.css";

//Header dove unisco text,logo e info

function App() {
  const [count, setCount] = useState(1072);
  const c = (val) => {
    setCount(val);
  };
  return (
    <div className="App">
      <Header />
      <LeftContainer
        count={count}
        setCount={c}
        minCaption="È arrivato il 
      momento di adottare un comportamento 
      responsabile e farsi carico dei propri doveri 
      come cittadino e come individuo."
      ></LeftContainer>
      <JoinButton count={count} setCount={c}></JoinButton>
      <Info />
      <Footer></Footer>
    </div>
  );
}

export default App;

import React from "react";
import FirstPage from "./Components/FirstPage"
import SecondPage from "./Components/SecondPage"
import ThirdPage from "./Components/ThirdPage"
import FourthPage from "./Components/FourthPage"




function App() {
  const [page, setPage] = React.useState(0);
  const [animationT, setAnimationT] = React.useState(0);
  const [animationI, setAnimationI] = React.useState(0);
  switch (page) {
    case 0:
      return (
        <div className="App">
          <FirstPage
            page={page}
            changePage={setPage}
            animationI={animationI}
            setAnimationI={setAnimationI}
            animationT={animationT}
            setAnimationT={setAnimationT}
          ></FirstPage>
        </div>
      );
    case 1:
      return (
        <div className="App">
          <SecondPage
            page={page}
            changePage={setPage}
            animationI={animationI}
            setAnimationI={setAnimationI}
            animationT={animationT}
            setAnimationT={setAnimationT}
          ></SecondPage>
        </div>
      );
    case 2:
      return (
        <div className="App">
          <ThirdPage
            page={page}
            changePage={setPage}
            animationI={animationI}
            setAnimationI={setAnimationI}
            animationT={animationT}
            setAnimationT={setAnimationT}
          ></ThirdPage>
        </div>
      );
    case 3:
      return (
        <div className="App">
          <FourthPage page={page} 
          changePage={setPage}
          animationI={animationI}
          setAnimationI={setAnimationI}
          animationT={animationT}
          setAnimationT={setAnimationT}
          ></FourthPage>
        </div>
      );
    default:
      return (
        <h1
          style={{
            color: "red",
            textAlign: "center",
          }}
        >Impossible to reach!
        </h1>
      );
  }
}

export default App;

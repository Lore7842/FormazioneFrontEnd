import React from "react";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import FourthPage from "./Components/FourthPage";

const Pagina = (props) => {
  switch (props.page) {
    case 0:
      return (
        <div className="App">
          <FirstPage
            page={props.page}
            changePage={props.setPage}
            setTraslate={props.setTraslate}
          ></FirstPage>
        </div>
      );
    case 1:
      return (
        <div className="App">
          <SecondPage
            page={props.page}
            changePage={props.setPage}
            setTraslate={props.setTraslate}
          ></SecondPage>
        </div>
      );
    case 2:
      return (
        <div className="App">
          <ThirdPage
            page={props.page}
            changePage={props.setPage}
            setTraslate={props.setTraslate}
          ></ThirdPage>
        </div>
      );
    case 3:
      return (
        <div className="App">
          <FourthPage
            page={props.page}
            changePage={props.setPage}
            setTraslate={props.setTraslate}
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
        >
          Impossible to reach!
        </h1>
      );
  }
};

function App() {
  const [page, setPage] = React.useState(0);
  const [Traslation, setTraslate] = React.useState(0);

  return (
    <div
      className="bigContainer"
      Traslation={Traslation}
      onTransitionEndEnd={() => setTraslate(0)}
    >
      <Pagina
        setPage={setPage}
        setTraslate={setTraslate}
        page={page}
        Traslation={Traslation}
      />
    </div>
  );
}

export default App;

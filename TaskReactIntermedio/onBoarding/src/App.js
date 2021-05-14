import React from "react";

function FirstPage(props) {
  console.log(props);
  return (
    <div className="container">
      <div className="text">
        <div className="title">ONBOARDING</div>Con questo progetto imparerai
        alcune delle funzionalità avanzate del css e inizierai ad utilizzare
        javascript per far prendere vita alla web app.
      </div>
      <div className="image"></div>
      <div className="dots"></div>
      <Button
        numPage={props.page}
        setPage={props.changePage}
        text="Avanti"
      ></Button>
    </div>
  );
}

function SecondPage(props) {
  return (
    <div className="container">
      <div className="text">
        <div className="title">TRANSITION, FLEX E MOLTO ALTRO</div>
        Dovrai utilizzare flexbox per organizzare i componenti nelle varie
        schermate. Inizierai ad aggiungere animazioni semplici grazie
        all’attributo transition
      </div>
      <div className="image2"></div>
      <div className="dots2"></div>
      <Button
        numPage={props.page}
        setPage={props.changePage}
        text="Avanti"
      ></Button>
    </div>
  );
}

function ThirdPage(props) {
  return (
    <div className="container">
      <div className="text">
        <div className="title">SE HAI DUBBI, CHIEDI!</div>
        CSS non è semplice da imparare. Non esitare dunque a contattare un’altro
        IT per chiedere consigli.
      </div>
      <div className="image3"></div>
      <div className="dots3"></div>
      <Button
        numPage={props.page}
        setPage={props.changePage}
        text="Fine"
      ></Button>
    </div>
  );
}

function FourthPage(props) {
  return (
    <div className="container">
      <div className="logo"></div>
      <Button
        numPage={props.page}
        setPage={props.changePage}
        text="Torna all'inizio"
      ></Button>
    </div>
  );
}

function Button(props) {
  // console.log(props.numPage)
  const changePage = () => {
    let pageN = props.numPage;
    console.log(pageN);
    console.log(props.numPage);
    if (pageN === 0) {
      props.setPage(1);
    }
    if (pageN === 1) {
      props.setPage(2);
    }
    if (pageN === 2) {
      props.setPage(3);
    }
    if (pageN === 3) {
      props.setPage(0);
    }
  };
  return (
    <div className="next-button" onClick={changePage}>
      <div className="text-button">{props.text}</div>
    </div>
  );
}

function App() {
  const [page, setPage] = React.useState(0);
  // console.log(page);
  switch (page) {
    case 0:
      return (
        <div className="App">
          <FirstPage page={page} changePage={setPage}></FirstPage>
        </div>
      );
    case 1:
      return (
        <div className="App">
          <SecondPage page={page} changePage={setPage}></SecondPage>
        </div>
      );
    case 2:
      return (
        <div className="App">
          <ThirdPage page={page} changePage={setPage}></ThirdPage>
        </div>
      );
    case 3:
      return (
        <div className="App">
          <FourthPage page={page} changePage={setPage}></FourthPage>
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
}

export default App;

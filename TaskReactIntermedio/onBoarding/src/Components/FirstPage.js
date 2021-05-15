import React from "react"
import Button from "./Button"

function FirstPage(props) {
    console.log(props);
    return (
      <div className="container">
        <div className="text" transition={props.animationT}>
          <div className="title">ONBOARDING</div>Con questo progetto imparerai
          alcune delle funzionalità avanzate del css e inizierai ad utilizzare
          javascript per far prendere vita alla web app.
        </div>
        <div id="image"></div>
        <div id="dots"></div>
        <Button
          numPage={props.page}
          setPage={props.changePage}
          animationI={props.animationI}
          setAnimationI={props.setAnimationI}
          animationT={props.animationT}
          setAnimationT={props.setAnimationT}
          text="Avanti"
        ></Button>
      </div>
    );
  }

  export default FirstPage
  
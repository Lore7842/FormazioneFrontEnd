import React from "react"
import Button from "./Button"

function SecondPage(props) {
    return (
      <div className="container2">
        <div className="text" transition={props.animationT}>
          <div className="title">TRANSITION, FLEX E MOLTO ALTRO</div>
          Dovrai utilizzare flexbox per organizzare i componenti nelle varie
          schermate. Inizierai ad aggiungere animazioni semplici grazie
          all’attributo transition
        </div>
        <div id="image2"></div>
        <div id="dots2"></div>
        <Button
          numPage={props.page}
          setPage={props.changePage}
          onClick={props.setTraslate}
          text="Avanti"
        ></Button>
      </div>
    );
  }
  
  export default SecondPage;
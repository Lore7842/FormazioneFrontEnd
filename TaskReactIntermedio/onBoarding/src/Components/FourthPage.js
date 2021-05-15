import React from "react"
import Button from "./Button"

function FourthPage(props) {
    return (
      <div className="container">
        <div id="logo"></div>
        <Button
          numPage={props.page}
          setPage={props.changePage}
          animationI={props.animationI}
          setAnimationI={props.setAnimationI}
          animationT={props.animationT}
          setAnimationT={props.setAnimationT}
          text="Torna all'inizio"
        ></Button>
      </div>
    );
  }

  export default FourthPage;
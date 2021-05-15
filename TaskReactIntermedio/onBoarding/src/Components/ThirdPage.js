import React from "react"
import Button from "./Button"

function ThirdPage(props) {
    return (
      <div className="container">
        <div className="text">
          <div className="title">SE HAI DUBBI, CHIEDI!</div>
          CSS non è semplice da imparare. Non esitare dunque a contattare un’altro
          IT per chiedere consigli.
        </div>
        <div id="image3"></div>
        <div id="dots3"></div>
        <Button
          numPage={props.page}
          setPage={props.changePage}
          animationI={props.animationI}
          setAnimationI={props.setAnimationI}
          animationT={props.animationT}
          setAnimationT={props.setAnimationT}
          text="Fine"
        ></Button>
      </div>
    );
  }

  export default ThirdPage;
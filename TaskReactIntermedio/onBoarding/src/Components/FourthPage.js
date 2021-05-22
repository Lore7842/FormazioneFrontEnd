import React from "react"
import Button from "./Button"

function FourthPage(props) {
    return (
      <div className="container4" id = "container4">
        <div id="logo"></div>
        <Button
          numPage={props.page}
          setPage={props.changePage}
          onClick={props.setTraslate}
          text="Torna all'inizio"
        ></Button>
      </div>
    );
  }

  export default FourthPage;
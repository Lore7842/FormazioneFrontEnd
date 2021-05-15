import React from "react"

function Button(props) {
    console.log(props)
  
    const endAnimation = () => {
      props.setAnimationI(0);
      props.setAnimationT(0);
    };
  
    const changePage = () => {
      let pageN = props.numPage;
      props.setAnimationI(1);
      props.setAnimationT(1);
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
    console.log(props.animationT)
    return (
      <div
        className="next-button"
        onClick={changePage}
        onTransitionEnd={endAnimation}
      >
        <div class="text-button">{props.text}</div>
      </div>
    );
  }

  export default Button;

import React from "react"

function Button(props) {
    console.log(props)
  
    const changePage = () => {
      props.onClick(1);
      let pageN = props.numPage;
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
      >
        <div class="text-button">{props.text}</div>
      </div>
    );
  }

  export default Button;
import React from "react";
import "../CSS/mycss.css";

function Header(props) {
  return (
    <div className="Header">
      <div id="IRAC">
        <mark>#</mark>IORESTOA<mark>CASA</mark>
      </div>
      <div id="logo"></div>
      <div id="left-image"></div>;
    </div>
  );
}

function Footer() {
  return <footer></footer>;
}

function Button(props) {
  return (
    <div id="join-button" onClick={() => props.changeCount(props.count)}></div>
  );
}

//unire in classe le due info
function Info(props) {
  return (
    <div id="Menu">
      <div id="WhoWeAre">
        <span>Chi siamo</span>
        <div id="Contact-US">
          <span>Contattaci</span>
        </div>
      </div>
    </div>
  );
}

export {Header, Footer, Button, Info };

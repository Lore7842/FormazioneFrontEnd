import React from "react"
import {state,setState} from "react"



function Text(props){
  return <div className="IRAC"><mark>#</mark>IORESTOA<mark>CASA</mark></div>
}

function Logo(){
  return <div className="logo"></div>
}

function LeftI(){
  return <div className="left-image"></div>
}

function Footer(){
  return <footer></footer>
}

function Button(props){
  return <div className="join-button" onClick={() => props.changeCount(props.count)}></div>
}

function Info(props){
  return(
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <div className="WhoWeAre"><a href="#">Chi siamo</a><div className="Contact-US"><a href="#">Contattaci</a></div></div>
  )
}

function LeftContainer(props){
  return (
    <div>
      <div className="left-caption">Restiamo a <mark>casa</mark>.</div>
      <div className="left-minor-caption">{props.minCaption}</div>
      <div className="box-people-joined"><div className="text-box-major">{props.count} <div className="sub-caption">persone si 
      sono fatte avanti</div> <div className="progress-container"><div className="progress"></div></div></div></div>
    </div>
  )
}

function JoinButton(props){
  const progressbar = document.querySelector(".progress")
 // progressbar.style.width=`${props.count/50} %`; Errore(?)
  function changeProgress(count){
    if(count === 1072){
      props.setCount(props.count+1)
      return ;
    }
    props.setCount(props.count+1);
    progressbar.style.width = `${(count/5000)*100}%`;
  }
  return (<Button changeCount={changeProgress} count = {props.count}></Button>)
}

function App() {
  const [count,setCount] = React.useState(1072)
  return (
  <div className="App">
      <Text></Text>
      <Logo></Logo>
      <LeftI></LeftI>
      <LeftContainer count={count} setCount = {setCount} initialValue="1000" minCaption="È arrivato il 
      momento di adottare un comportamento 
      responsabile e farsi carico dei propri doveri 
      come cittadino e come individuo." ></LeftContainer>
      <JoinButton count={count} setCount = {setCount}></JoinButton>
      <Info></Info>
      <Footer></Footer>
  </div>
  );
}

export default App;

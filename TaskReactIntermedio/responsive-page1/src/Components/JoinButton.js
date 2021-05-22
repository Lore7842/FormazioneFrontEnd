import React from 'react'
import {Button} from './BasicComponents'
import '../CSS/mycss.css'

function JoinButton(props){
    const progressbar = document.querySelector(".progress")
   
    
   // progressbar.style.width=`${props.count/50} %`; Errore(?)
    function changeProgress(count){
      if(count === 1072){
        props.setCount(props.count+1)
        return;
      }
      props.setCount(props.count+1);
      progressbar.style.width = `${(count/5000)*100}%`;
    }
    return (<Button changeCount={changeProgress} count = {props.count}></Button>)
  }

  export default JoinButton;
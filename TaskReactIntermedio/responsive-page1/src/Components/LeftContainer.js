import React from 'react'
import '../CSS/mycss.css'

function LeftContainer(props){
    return (
      <div class="left-container">
        <div id="left-caption">Restiamo a <mark>casa</mark>.</div>
        <div id="left-minor-caption">{props.minCaption}</div>
        <div id="box-people-joined"><div id="text-box-major">{props.count} <div id="sub-caption">persone si 
        sono fatte avanti</div> <div className="progress-container"><div className="progress"></div></div></div><div id="reachTo">Ancora {5000-props.count}</div></div>
      </div>
    )
  }
  
  export default LeftContainer;
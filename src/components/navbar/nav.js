import React from 'react'
import "./nav.css";

const nav = () => {
  return (
    <div className="Nav">
    <div className="Nav_Background"></div>
    <div className="Logo" style={{flex:1,justifyContent:'flex-end'}}>
      <div className="Flex" style={{justifyContent:'flex-end'}}> Flex </div>
    </div>
    <div className="Mute" style={{flex:1,justifyContent:'flex-end'}}>
      <div className="Rectangle">
        <div className="Volume">
          <div className="Vector"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default nav

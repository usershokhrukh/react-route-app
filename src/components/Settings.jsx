import React, {useState} from 'react'
import History from "./History";
const Settings = () => {
  const [color, setColor] = useState("");  
  const body = document.querySelector("body");
  body.style.cssText = `background-color: ${color}`
  const history = {
    text: `Background color changed to: ${color}`,
  }
  localStorage.setItem("color", JSON.stringify(history))
  return (
    <div className='settings'>
      <div className='settings__boxes'>
        <p className='settings__text'>Change Background: </p>
        <input onChange={(e) => setColor(e.target.value)} type="color" />
      </div>
    </div>
  )
}

export default Settings
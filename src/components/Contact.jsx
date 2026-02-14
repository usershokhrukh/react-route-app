import React, { useState } from 'react'
import { useAsyncError } from 'react-router-dom'

const Contact = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name) {
      setUsername(name);
      e.target.reset();
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() +1;
      const year = today.getFullYear();
      setDate(`${day}-${month}-${year}`)
    }
  }
  return (
    <div className='contact'>
      <form onSubmit={(e) => handleSubmit(e)} className='contact__form'>
        <label htmlFor="contact" className='contact__label'>Name:</label>
        <input onChange={(e) => setName(e.target.value.trim())} id='contact' className='contact__input' type="text" />
        <button className='contact__button'>Create</button>
      </form>
      <div className='contact__bottom'>
        <p className='contact__info'>Name: <span className='contact__name'>{username}</span></p>
        <p className='contact__info'>Created: <span className='contact__name'>{date}</span></p>
      </div>
    </div>
  )
}

export default Contact
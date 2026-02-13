import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <form className='contact__form'>
        <label htmlFor="contact" className='contact__label'>Name:</label>
        <input id='contact' className='contact__input' type="text" />
        <button className='contact__button'>Create</button>
      </form>
      <div className='contact__bottom'>
        <p className='contact__info'>Name: <span className='contact__name'>Shokhrukh</span></p>
        <p className='contact__info'>Created: <span className='contact__name'>13.02.26</span></p>
      </div>
    </div>
  )
}

export default Contact
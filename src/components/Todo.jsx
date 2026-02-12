import React from 'react'

const Todo = () => {
  return (
    <div className='main__todo'>
      <form className='main__form' action="">
        <input className='main__input' type="text" />
        <button className='main__todo-button'>Add</button>
      </form>
      <div className='main__todos'>
        <div className='main__todo-item'>
          <span className='main__todo-id'>1</span>
          <p className='main__todo-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sunt?</p>
          <button className='main__todo-del'>delete</button>
        </div>
        <div className='main__todo-item'>
          <span className='main__todo-id'>1</span>
          <p className='main__todo-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sunt?</p>
          <button className='main__todo-del'>delete</button>
        </div>
      </div>
    </div>
  )
}

export default Todo
import React from 'react'

export const AddTask = () => {
  return (
    <section className='addTask'>
      <form>
        <input type='text' placeholder='Add Task' name='task' autoComplete='off' maxLength='25' />
        <button type='submit' className='btn'>Add</button>
      </form>
    </section>
  )
}

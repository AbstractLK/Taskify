import React from 'react'

export const AddTask = ({taskList, setTaskList}) => {
	const handleSubmit = (e) => {
    e.preventDefault();
		const date = new Date();
		const newTask = {
			id: date.getTime(),
			name: e.target.task.value,
			date: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
		};
	setTaskList([newTask, ...taskList])
    e.target.task.value = "";
	}

  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Add Task' name='task' autoComplete='off' maxLength='25' />
        <button type='submit' className='btn'>Add</button>
      </form>
    </section>
  )
}

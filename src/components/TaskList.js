import React from 'react'

export const TaskList = ({taskList, setTaskList}) => {

  return (
    <section className='taskList'>
      <div className='taskListHeader'>
        <div>
          <span className='title'>Task List</span>
          <span className='count'>{taskList.length}</span>
        </div>
        <button className='hideBtn primary' onClick={() => setTaskList([])}>Clear All</button>
      </div>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className='name'>{task.name}</span><br/>
              <span className='time'>{task.date}</span>
            </p>
            <div>
              <i className="bi bi-pencil-square" style={{color: 'blue'}}></i>
              <i className="bi bi-trash" style={{color:'red'}}></i>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

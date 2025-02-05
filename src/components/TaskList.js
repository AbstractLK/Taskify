import React from 'react'

export const TaskList = () => {
  const tasks = [
    {id: 1, name: 'Task 1', date: '2021-09-01'},
    {id: 2, name: 'Task 2', date: '2021-09-02'},
    {id: 3, name: 'Task 3', date: '2021-09-03'},
    {id: 4, name: 'Task 4', date: '2021-09-04'},
    {id: 5, name: 'Task 5', date: '2021-09-05'},
    {id: 6, name: 'Task 6', date: '2021-09-06'},
    {id: 7, name: 'Task 7', date: '2021-09-07'},    
  ];

  return (
    <section className='taskList'>
      <div className='taskListHeader'>
        <div>
          <span className='title'>Task List</span>
          <span className='count'>5</span>
        </div>
        <button className='hideBtn primary'>Hide Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
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

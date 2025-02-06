import { useState, useEffect} from 'react'
import { Header} from './components/Header'
import { AddTask } from './components/AddTask'
import { TaskList } from './components/TaskList'
import { Footer} from './components/Footer'
import './App.css';

function App() {
	const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
	const [editTask, setEditTask] = useState({});

	useEffect(() => {
		localStorage.setItem("taskList", JSON.stringify(taskList))
	}, [taskList]);

  return (
    <div className="App">
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} editTask={editTask} setEditTask={setEditTask}/>
      <TaskList taskList={taskList} setTaskList={setTaskList} editTask={editTask} setEditTask={setEditTask} />
      <Footer />
    </div>
  );
}

export default App;

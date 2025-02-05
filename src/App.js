import { useState} from 'react'
import { Header} from './components/Header'
import { AddTask } from './components/AddTask'
import { TaskList } from './components/TaskList'
import { Footer} from './components/Footer'
import './App.css';

function App() {
	const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
      <Footer />
    </div>
  );
}

export default App;

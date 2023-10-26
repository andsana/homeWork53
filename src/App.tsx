import './App.css';
import {ChangeEvent, useState} from 'react';
import AddTaskForm from './AddTaskForm';

function App() {
  const [currentTask, setCurrentTasK] = useState('');

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTasK(e.target.value);
  };

  const handleAddTask = () => {
    console.log('Task added:', currentTask);
    setCurrentTasK('');
  };

  return (
    <div>
      <AddTaskForm
        currentTask={currentTask}
        handleTaskChange={handleTaskChange}
        handleAddTask={handleAddTask}
      />
    </div>
  );
}

export default App;

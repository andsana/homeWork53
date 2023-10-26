import './App.css';
import {ChangeEvent, useState} from 'react';
import AddTaskForm from './AddTaskForm';
import Task from './Task';

function App() {
  const [tasks, setTasks] = useState([
    {id: '1', text: 'task 1'},
    {id: '2', text: 'task 2'},
    {id: '3', text: 'task 3'},
  ]);

  const [currentTask, setCurrentTasK] = useState('');

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTasK(e.target.value);
  };

  const handleAddTask = () => {
    if (currentTask !== '') {
      const newTask = {id: String(Date.now()), text: currentTask};
      setTasks([...tasks, newTask]);
      setCurrentTasK('');
    }
  };

  const handleDelete = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <AddTaskForm
        currentTask={currentTask}
        handleTaskChange={handleTaskChange}
        handleAddTask={handleAddTask}
      />
      {tasks.map((task) => (
        <Task key={task.id} task={task} handleDelete={handleDelete}/>
      ))}
    </div>
  );
}

export default App;

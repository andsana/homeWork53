import React from 'react';

interface Props {
  currentTask: string;
  handleTaskChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTask: () => void;
}

const AddTaskForm: React.FC<Props> = ({currentTask, handleTaskChange, handleAddTask}) => {
  return (
    <div className="input-container">
      <input className="input" type="text" value={currentTask} onChange={handleTaskChange}/>
      <button className="add-btn" onClick={handleAddTask}>ADD</button>
    </div>
  );
};

export default AddTaskForm;
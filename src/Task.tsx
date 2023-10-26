import React from 'react';

interface Props {
  task: { id: string; text: string };
  handleDelete: (id: string) => void;
}

const Task: React.FC<Props> = ({task, handleDelete}) => {
  return (
    <div className='task-container'>
      <span className='task'>{task.text}</span>
      <button className='delete-btn' onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
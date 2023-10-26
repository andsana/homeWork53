import React from 'react';

interface Props {
  task: { id: string; text: string };
  handleDelete: (id: string) => void;
}

const Task: React.FC<Props> = ({task, handleDelete}) => {
  return (
    <div>
      <span>{task.text}</span>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
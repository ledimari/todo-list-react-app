import './styles.css';
import {useState} from 'react';

const CreateTask =  ({addTask}) => {
  const [taskName, setTaskName] = useState(0);
  const [redirect, finish] = useState([taskName, setTaskName]);


  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  }


  return (
    <div className="create-task__container">
      <input onChange={handleInputChange} className="task__input" placeholder="type your task" type="text" />
      <button onClick={() => addTask(taskName)} className="create__button">
        <div className="create__button_text">Add Task</div>
      </button>
    </div>
  )
}


export default CreateTask;
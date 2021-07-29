import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button';
import {
  Link 
} from "react-router-dom";


const TaskList = ({data}) => {
  return (
    <div className="taskList__container">
      <ul className="taskList__list">
        {data.map((value, index) => {
          return (
            <li className="taskList__link">
              <FontAwesomeIcon className="circle-icon" icon={['far', 'circle']} size="1x" />
              <div className="taskList__task">
                {value}
              </div>
              <FontAwesomeIcon className="trash-icon" icon={['far', 'trash-alt']} size="1x" />
            </li>
          )
        })}
      </ul>
      <Link to="/create">
        <Button />
      </Link>
    </div>
  )
}

export default TaskList;
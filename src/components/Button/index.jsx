import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = () => {
  return (
    <button className="button">
      <FontAwesomeIcon className="plus-icon" icon={['fas', 'plus']} size="1x" />
      <div className="button__text">
        New Task
      </div>
    </button>
  )
}


export default Button;
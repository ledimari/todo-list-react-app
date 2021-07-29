import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  console.log(location);

  const activeIcon = 
    location.pathname === '/create'
      ? <FontAwesomeIcon className="close" icon={['far', 'times-circle']} />
      : <FontAwesomeIcon className="humburger-menu" icon={['fas', 'bars']} />;

  return (
    <div className="header">
      <Link to='/'>
        {activeIcon}
      </Link>
      <h1 className="header__text">Website Todo</h1>
    </div>
  )
}

export default Header
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation(props) {
  const loggedInMenu = () => {
    return (
      <div className='login-btn'>
        <span className='welcome'>{props.user.name}</span>
        <button
          type='button'
          className='btn-a'
          onClick={() => {
            props.logOut();
          }}
        >
          로그아웃
        </button>
      </div>
    );
  };
  return (
    <div>
      <nav>
        <div className='logo'></div>
        <ul className='nav-links'>
          <li>
            <Link to='/'>프로필</Link>
          </li>
          <li>
            <Link to='/book'>책</Link>
          </li>
          {props.user.admin ? null : null}
          <li>
            <Link to='/board'>게시판</Link>
          </li>
        </ul>
        {props.user.loggedin ? (
          loggedInMenu()
        ) : (
          <div className='login-btn'>
            <button
              type='button'
              className='btn-a'
              onClick={() => {
                props.showSignInModalWindow();
              }}
            >
              로그인
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

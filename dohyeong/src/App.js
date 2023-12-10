import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Nav from './Navigation';
import Home from './Home';
import BookContainer from './Book';
import Board from './Board.js';
import ErrorNotFoundPage from './ErrorNotFoundPage.js';
import { SignInModalWindow } from './modalwindows.js';

export default function App() {
  // admin: 관리자를 위한 속성
  const [user, setUser] = useState({
    name: '가나다',
    loggedin: true,
    admin: false,
  });
  const logOut = () => {
    const newUser = { name: '', loggedin: false, admin: false };
    setUser(newUser);
  };
  const [showSignIn, setShowSignIn] = useState(false);
  const showSignInModalWindow = () => {
    setShowSignIn(true);
  };
  const toggleSignInModalWindow = () => {
    setShowSignIn(false);
  };
  return (
    <div>
      <Nav
        user={user}
        logOut={logOut}
        showSignInModalWindow={showSignInModalWindow}
      />
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route
          path='/book'
          element={<BookContainer location='book.json' />}
        ></Route>
        {user.admin ? null : null}
        <Route path='/board' Component={Board}></Route>
        <Route path='*' Component={ErrorNotFoundPage}></Route>
      </Routes>
      <SignInModalWindow
        showModal={showSignIn}
        toggle={toggleSignInModalWindow}
      />
    </div>
  );
}

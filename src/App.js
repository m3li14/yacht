import React, { useState } from 'react';
// import SignUp from './features/auth/SignUp';
import SignIn from './features/auth/SignIn';
import { BrowserRouter as Router } from 'react-router-dom';
import AppHeader from './features/AppHeader/AppHeader';
import AppHome  from './features/AppHome/AppHome';
import YachtsManager from './features/YachtsManager/YactsManager';
import Admin from './features/Admin/Admin'
import PublicRoute from './features/auth/PublicRoute';
import PrivateRoute from './features/auth/PrivateRoute';

function App() {
  const [appState, setAppState] = useState({ User: {} });
  const handleOnSignedIn = (fbUser) => {
    if (fbUser) {
      setAppState(s => s = { ...appState, User: fbUser });
    }
  }
  const handleOnSignOut = (fbUser) => {
      setAppState({ User: {} });
  }

  const handleOnEnableImport = ()=> {
    const newState = {...appState};
    newState.User.enableImport = true;
    setAppState(newState);
  }

  return (
    <Router>
      <AppHeader user={appState.User} onSignOut={handleOnSignOut}></AppHeader>
      <PublicRoute exact path="/" component={() => <AppHome fbUser={appState.User} />} fbUser={appState.User}></PublicRoute>
      <PublicRoute restricted={true} exact path="/signin" component={() => <SignIn onSignedIn={handleOnSignedIn} />} fbUser={appState.User}></PublicRoute>
      <PrivateRoute exact path="/yachts" component={() => <YachtsManager fbUser={appState.User} />} fbUser={appState.User}></PrivateRoute>
      <PrivateRoute exact path="/admin" component={() => <Admin fbUser={appState.User} onEnableImport={handleOnEnableImport} />} fbUser={appState.User}></PrivateRoute>
    </Router>
  );
}

export default App;

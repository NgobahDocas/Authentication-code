import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';



const App = () => {
  return (
    <Router>
    <div className='app-container'>
    <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/login' exact Component={Login} />
        <Route path='/signup' exact Component={SignUp} />
     </Routes>
    </div>
    </Router>
  );
};

export default App;

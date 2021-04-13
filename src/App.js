import React from 'react';
import CharacterList from './components/CharacterList';
import AddPost from './components/AddPost';
import { HashRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import PersonalPage from './components/PersonalPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='nav'>

          <NavLink to='/main' className='links' activeClassName='active-nav'>Characters</NavLink>
          <NavLink to='/addPost' className='links' activeClassName='active-nav'>Add own characters</NavLink>
          <button className='btnLight' onClick={() => {
            window.localStorage.setItem('theme', 'light');
            window.location.reload();
          }}>Light</button>
          <button className='btnDark' onClick={() => {
            window.localStorage.setItem('theme', 'dark');
            window.location.reload();
          }}>Dark</button>


        </div>
      </Router>
      <Switch>
        <Route exact path='/main' component={CharacterList} />
        <Route path='/addPost' component={AddPost} />
        <Route path='/character/:id' component={PersonalPage} />
        <Route path='/' exact render={() => <Redirect to='/main' />} />
      </Switch>
    </div>
  );
}

export default App;

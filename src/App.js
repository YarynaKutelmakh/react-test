import React from 'react';
import CharacterList from './components/CharacterList';
import OwnCharacters from './components/OwnCharacters';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import PersonalPage from './components/PersonalPage';
import FilterCharacters from './components/FilterCharacters';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='nav'>
          <NavLink to='/' className='links' activeClassName='active-nav'>Characters</NavLink>
          <NavLink to='/addOwnCharacters' className='links' activeClassName='active-nav'>Add own characters</NavLink>
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
        <Route exact path='/' component={CharacterList} />
        <Route path='/addOwnCharacters' component={OwnCharacters} />
        <Route path='/character/:id' component={PersonalPage} />
      </Switch>
    </div>
  );
}

export default App;

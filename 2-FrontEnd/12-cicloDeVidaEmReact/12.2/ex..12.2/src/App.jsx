import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/access">Access</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/about" component={ About }/>
          <Route path="/users/:id" component={(props) => <Users {...props} greetingsMessage="Good Morning" /> }/>
          <Route path="/access" component={ () => <StrictAccess user={{ username: 'joao', password: '1234'}} /> }/>
        </Switch>
      </>
    );
  }
}

export default App;

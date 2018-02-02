import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import { Header, Container } from 'semantic-ui-react';

import Home from './Home';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import SingleTask from './SingleTask';
import MyTasks from './MyTasks';
import requireAuthentication from '../components/Auth';
import getUser from '../components/GetUser';
import NavBar from '../components/NavBar';

import AddTask from './AddTask';
import Profile from './Profile';


export default () => (
  <BrowserRouter>
    <Container>
      <Header as="h1" textAlign="center">
        <Link to="/">To Do</Link>
      </Header>
      <Route path="/" render={props => (<NavBar {...props} />)} />
      <Route exact path="/" component={getUser(Home)} />
      <Route path="/login" render={props => (<LoginPage {...props} />)} />
      <Route path="/signup" render={props => (<SignupPage {...props} />)} />
      <Route path="/profile/tasks" component={requireAuthentication(MyTasks)} />
      <Route path="/view/:taskId" component={requireAuthentication(SingleTask)} />
      <Route path="/profile/me" component={requireAuthentication(Profile)} />
      <Route path="/task/add" component={requireAuthentication(AddTask)} />
    </Container>
  </BrowserRouter>
);

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import superagent from 'superagent';
import feathers from 'feathers-client';
import rest from 'feathers-rest/client';
import auth from 'feathers-authentication-client';
import { fork, all } from 'redux-saga/effects';

import { myTasks, currTask } from './task/reducers';
import * as taskSagas from './task/sagas';
import { user } from './user/reducers';
import * as userSagas from './user/sagas';

/*
userSagas = {
  loginSaga: () =>,
  signupSaga: () =>,
}
*/

export const rootReducer = combineReducers({
  currTask,
  myTasks,
  user,
  router: routerReducer,
});

export function* rootSaga() {
  yield all([
    ...Object.values(userSagas),
    ...Object.values(taskSagas),
  ].map(fork));
}

const host = 'http://localhost:3030';
export const app = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(feathers.hooks())
  .configure(auth({ storage: window.localStorage }));

export const usersService = app.service('users');
export const taskService = app.service('tasks');

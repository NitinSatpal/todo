import { takeEvery, call, put } from 'redux-saga/effects';
import { createTask, findTasks, getTask, deleteTask, editTask } from './api';

import {
  receiveMyTasks,
  receiveTask,
  REQUEST_MY_TASKS,
  REQUEST_CREATE_TASK,
  REQUEST_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from './actions';

export function* myTasksSaga() {
  yield takeEvery(REQUEST_MY_TASKS, callMyTasks);
}
function* callMyTasks({ payload }) {
  const myTasks = yield call(findTasks, payload);
  yield put(receiveMyTasks(myTasks.data));
}

export function* addTaskSaga() {
  yield takeEvery(REQUEST_CREATE_TASK, callCreateTask);
}
function* callCreateTask({ payload: { redirect, data } }) {
  const task = yield call(createTask, data);
  redirect(task._id);
}

export function* taskSaga() {
   yield takeEvery(REQUEST_TASK, callTask);
}

function* callTask({ payload }) {
  const currTask = yield call(getTask, payload);
  yield put(receiveTask(currTask));
}

export function* deleteTaskSaga() {
   yield takeEvery(DELETE_TASK, callDeleteTask);
}

function* callDeleteTask({ payload: { redirect, data} }) {
  yield call(deleteTask, data);
  redirect();
}

export function* editTaskSaga() {
   yield takeEvery(EDIT_TASK, callEditTask);
}

function* callEditTask({ payload: { redirect, id, data} }) {
  yield call(editTask, id, data);
  console.log(id+ " , "+JSON.stringify(data));
  //redirect();
}
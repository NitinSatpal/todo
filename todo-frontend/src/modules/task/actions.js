import { createAction } from 'redux-actions';
export const REQUEST_CREATE_TASK = 'REQUEST_CREATE_TASK';
export const REQUEST_MY_TASKS = 'REQUEST_MY_TASKS';
export const RECEIVE_MY_TASKS = 'RECEIVE_MY_TASKS';
export const REQUEST_TASK = 'REQUEST_TASK';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const requestCreateTask = createAction(REQUEST_CREATE_TASK);
export const requestMyTasks = createAction(REQUEST_MY_TASKS);
export const receiveMyTasks = createAction(RECEIVE_MY_TASKS);
export const requestTask = createAction(REQUEST_TASK);
export const receiveTask = createAction(RECEIVE_TASK);
export const deleteTask = createAction(DELETE_TASK);
export const editTask = createAction(EDIT_TASK);
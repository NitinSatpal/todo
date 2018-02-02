import { handleAction } from 'redux-actions';
import {
  receiveTask,
  receiveMyTasks,
} from './actions';

export const currTask = handleAction(receiveTask, {
  next(state, { payload }) {
    return payload;
  },
}, {});

export const myTasks = handleAction(receiveMyTasks, {
  next(state, { payload }) {
    return payload;
  },
}, []);

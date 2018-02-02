import { taskService } from '../index';


export async function findTasks(payload) {
  try {
    return await taskService.find(payload);
  } catch (err) {
    return [];
  }
}

export async function createTask(payload) {
  try {
    return await taskService.create(payload);
  } catch (err) {
    return {};
  }
}

export async function getTask(payload) {
  try {
    return await taskService.get(payload);
  } catch (err) {
    return {};
  }
}

export async function deleteTask(payload) {
  try {
    return await taskService.remove(payload);
  } catch (err) {
    return {};
  }
}

export async function editTask(id, data) {
  //console.log(JSON.stringify(payload));
  try {
    return await taskService.patch(id, data);
  } catch (err) {
    return {};
  }
}
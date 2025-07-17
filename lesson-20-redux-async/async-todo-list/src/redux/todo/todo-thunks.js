import {
  fetchTodoPending,
  fetchTodoFulfilled,
  fetchTodoRejected,
  addTodoPending,
  addTodoFulfilled,
  addTodoRejected,
  deleteTodoPending,
  deleteTodoFulfilled,
  deleteTodoRejected,
  toggleCompletedTodoPending,
  toggleCompletedTodoFulfilled,
  toggleCompletedTodoRejected,
} from "./todo-slice";

import {
  fetchTodoApi,
  addTodoApi,
  deleteTodoApi,
  updateTodoApi,
} from "../../shared/api/todo-api";

export const fetchTodoThunk = () => {
  const func = async (dispatch) => {
    try {
      dispatch(fetchTodoPending());
      const payload = await fetchTodoApi();
      dispatch(fetchTodoFulfilled(payload));
    } catch (error) {
      dispatch(
        fetchTodoRejected(error.response?.data?.message || error.message)
      );
    }
  };

  return func;
};

export const addTodoThunk = (data) => {
  const func = async (dispatch) => {
    try {
      dispatch(addTodoPending());
      const payload = await addTodoApi({ ...data, completed: false });
      dispatch(addTodoFulfilled(payload));
    } catch (error) {
      dispatch(addTodoRejected(error.response?.data?.message || error.message));
    }
  };

  return func;
};

export const deleteTodoThunk = (id) => {
  const func = async (dispatch) => {
    try {
      dispatch(deleteTodoPending());
      await deleteTodoApi(id);
      dispatch(deleteTodoFulfilled(id));
    } catch (error) {
      dispatch(
        deleteTodoRejected(error.response?.data?.message || error.message)
      );
    }
  };
  return func;
};

export const toggleCompletedTodoThunk = (data) => {
  const func = async (dispatch) => {
    try {
      const { id, ...payload } = data;
      payload.completed = !payload.completed;
      dispatch(toggleCompletedTodoPending());
      await updateTodoApi(id, payload);
      dispatch(toggleCompletedTodoFulfilled(id));
    } catch (error) {
      dispatch(
        toggleCompletedTodoRejected(
          error.response?.data?.message || error.message
        )
      );
    }
  };
  return func;
};

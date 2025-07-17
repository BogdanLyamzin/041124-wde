import { createSlice } from "@reduxjs/toolkit";

import { pending, rejected } from "../../shared/utils/redux";

const toDoInitialState = {
  loading: false,
  error: null,
  items: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: toDoInitialState,
  reducers: {
    fetchTodoPending: pending,
    fetchTodoFulfilled: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    fetchTodoRejected: rejected,
    addTodoPending: pending,
    addTodoFulfilled: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    addTodoRejected: rejected,
    deleteTodoPending: pending,
    deleteTodoFulfilled: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter((item) => item.id !== payload);
    },
    deleteTodoRejected: rejected,
    toggleCompletedTodoPending: pending,
    toggleCompletedTodoFulfilled: (store, { payload }) => {
      store.loading = false;
      const todo = store.items.find((item) => item.id === payload);
      todo.completed = !todo.completed;
    },
    toggleCompletedTodoRejected: rejected,
  },
});

export const {
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
} = todoSlice.actions;

export default todoSlice.reducer;

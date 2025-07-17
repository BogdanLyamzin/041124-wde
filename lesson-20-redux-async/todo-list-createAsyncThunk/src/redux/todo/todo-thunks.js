import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchTodoApi,
  addTodoApi,
  deleteTodoApi,
  updateTodoApi,
} from "../../shared/api/todo-api";

export const fetchTodoThunk = createAsyncThunk(
  "todo/fetch",
  async(_, {rejectWithValue})=> {
    try {
      const payload = await fetchTodoApi();
      return payload;
    }
    catch(error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
)

export const addTodoThunk = createAsyncThunk(
  "todo/add",
  async(data, {rejectWithValue})=> {
    try {
      const payload = await addTodoApi(data);
      return payload;
    }
    catch(error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
)

export const deleteTodoThunk = createAsyncThunk(
  "todo/delete",
  async(id, {rejectWithValue})=> {
    try {
      await deleteTodoApi(id);
      return id;
    }
    catch(error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
)

export const toggleCompletedTodoThunk = createAsyncThunk(
  "todo/toggleCompleted",
  async(data, {rejectWithValue})=> {
    try {
      const { id, ...payload } = data;
      payload.completed = !payload.completed;
      await updateTodoApi(id, payload);
      return id;
    }
    catch(error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
)

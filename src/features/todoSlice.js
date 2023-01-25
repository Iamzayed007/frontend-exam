import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com//todos"
  );

  const data = await res.data
  console.log('data', data)
  return data;
});


export const todoSlice = createSlice({
  name: "todos/fetchTodos",
  initialState: {
    isLoading: false,
    todos: [],
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
      state.error = null;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.todos = [];
      state.error = action.error.message;
    });
  },
});

export default todoSlice.reducer;
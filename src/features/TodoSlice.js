import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello Redux" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, // payload is a object
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todoId) => todoId.id !== action.payload
      );
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;

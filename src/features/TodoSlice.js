import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello Redux", completed: false }],
};

export const todoSlice = createSlice({
  name: "ReduxTodo",
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

    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
      }
    },

    toggleCompleted: (state, action) => {
      const existingTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (existingTodo) {
        existingTodo.completed = !existingTodo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;

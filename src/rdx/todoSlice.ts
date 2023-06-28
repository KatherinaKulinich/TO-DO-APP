import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";



interface TodosState {
  listTodos: Todo[];
  selectTodo: Todo
}


const initialState: TodosState = {
  listTodos: [],
  selectTodo: {
    id: '',
    text: '',
    isCompleted: true,
    date: '',
    time: ''
  },
};


const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodos(state) {
      if (localStorage.getItem("todos")) {
        state.listTodos = JSON.parse(localStorage.getItem("todos") || '')
        return
      }
      state.listTodos = []
    },

    addTodo(state, action: PayloadAction<string>) {
        state.listTodos.push({
              id: String(Date.now()),
              text: action.payload,
              isCompleted: false,
              date: new Date().toDateString(),
              time: new Date().toLocaleTimeString("en-US", {hour12: false, hour: "2-digit", minute: "2-digit"}),
          })
        localStorage.setItem('todos', JSON.stringify(state.listTodos))
    },

    toggleTodo(state, action: PayloadAction<string>) {
        const selectedTodo = state.listTodos.find(
            (todo: { id: string; }) => todo.id === action.payload
        );
        
        if (selectedTodo) {
            selectedTodo.isCompleted = !selectedTodo.isCompleted;
            localStorage.setItem('todos', JSON.stringify(state.listTodos))
        }
    },

    removeTodo(state, action: PayloadAction<string>) {
        state.listTodos = state.listTodos.filter(
            (todo) => todo.id !== action.payload
        );
        localStorage.setItem('todos', JSON.stringify(state.listTodos))
    },

    completeAllTodos(state) {
        state.listTodos.map((todo) => (todo.isCompleted = true));
        localStorage.setItem('todos', JSON.stringify(state.listTodos));
    },

    showTodoById(state, action: PayloadAction<string>) {
        const todoToDelete = state.listTodos.find((todo) => todo.id === action.payload);

        if (todoToDelete) {
            state.selectTodo = todoToDelete
        }
    },
    
    chooseTodoItem(state, action: PayloadAction<string>) {
      const todoToDelete = state.listTodos.find((todo) => todo.id === action.payload);

      if (todoToDelete) {
          state.selectTodo = todoToDelete
      }
    },

    editTodo(state, action: PayloadAction<string>) {
      state.listTodos.map((item) => {
        if (item.id === state.selectTodo.id) {
          return item.text = action.payload
        }
      })
      localStorage.setItem('todos', JSON.stringify(state.listTodos));
    },

    deleteAllTodos(state) {
        state.listTodos = []
        localStorage.removeItem('todos')
    }
  },
});

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  completeAllTodos,
  showTodoById,
  deleteAllTodos,
  editTodo,
  getTodos,
  chooseTodoItem
} = todoSlice.actions;

export default todoSlice.reducer;
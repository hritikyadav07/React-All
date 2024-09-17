import { createSlice, nanoid } from "@reduxjs/toolkit";

// create it just like a object , this is my state
const initialState = {
    todos: [
        { id: 0, text: "Hello world!"},
        { id: 1, text: "Learn React" },
        { id: 2, text: "Learn Redux" },
        { id: 3, text: "Build a Todo App" }
    ]
}

// will take objects most of the time
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload   ,// value jo aayi 
            }// a new todo 
            
            state.todos.push(todo) // append the new Todo
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state, action ) => {
            const { id, newText } = action.payload; // Destructure id and new text from action.payload
            state.todos = state.todos.map((todo) => 
                todo.id === id ? { ...todo, text: newText } : todo // Update text if id matches, otherwise return the todo unchanged
            );
        },
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer
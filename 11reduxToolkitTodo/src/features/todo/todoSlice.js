import { createSlice, nanoid } from "@reduxjs/toolkit";

// create it just like a object , this is my state
const initialState = {
    todos: [{ id: 1, text: "Hello world!"}]
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
        }
        // setTodos((prev) => prev.map((prevTodo) => (
        //     prevTodo.id === id ? todo : prevTodo 
        //   )))
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer
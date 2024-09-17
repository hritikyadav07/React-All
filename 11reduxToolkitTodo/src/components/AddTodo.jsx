import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';

function AddTodo({ input, setInput, editingId, setEditingId }) {
  const dispatch = useDispatch();

  const addOrUpdateTodoHandler = (e) => {
    e.preventDefault();

    if (editingId !== null) {
      // Update the todo if we're in editing mode
      dispatch(updateTodo({ id: editingId, newText: input }));
      setEditingId(null); // Reset the editingId after updating
    } else {
      // Add a new todo
      dispatch(addTodo(input));
    }

    setInput(''); // Clear the input after adding/updating
  };

  return (
    <>
    <form onSubmit={addOrUpdateTodoHandler} className="space-x-3 my-12  scale-125">
  <input
    type="text"
    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    placeholder="Enter a Todo..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  <button
    type="submit"
    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
  >
    {editingId !== null ? 'Update Todo' : 'Add Todo'}
  </button>
</form>

    </>
  );
}

export default AddTodo;

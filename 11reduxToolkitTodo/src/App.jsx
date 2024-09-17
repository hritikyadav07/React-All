import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Function to handle when edit is triggered
  const startEditTodo = (todo) => {
    setInput(todo.text); // Set the input to the current todo text
    setEditingId(todo.id); // Store the id to track which todo is being edited
  };

  return (
    <div>
      <div className='text-4xl text-gray-800 font-extrabold my-12 drop-shadow-lg'>My Todo Application</div>
      <Todos editingId={editingId} setEditingId={setEditingId} startEditTodo={startEditTodo} setInput={setInput}/>
      <AddTodo input={input} setInput={setInput} editingId={editingId} setEditingId={setEditingId} />
    </div>
  );
}

export default App

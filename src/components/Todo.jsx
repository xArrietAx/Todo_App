import React from 'react';

export const Todo = ({setData, Data, todo}) => {
  
  function Delete(id) {
    const newData = Data.filter(e => e.id !== id);
    setData(newData);
    localStorage.setItem('todos', JSON.stringify(newData)); 
  }

  return (
    <div className='flex items-center gap-4' >
      <span className='w-11/12 p-2 border-2 rounded-md text-md font-semibold bg-white break-words shadow-md' >{todo.todo}</span>
      <button className='text-red-600 hover:bg' onClick={() => Delete(todo.id)}>-</button>
    </div>
  )
}

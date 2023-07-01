import { useState } from "react";

export const AddTodo = ({setData}) => {

  const [Todo, setTodo] = useState("")
  const [error, setError] = useState(null)

  function AddTodo() {
    if (!/^[a-zA-Z][a-zA-Z0-9\s.,]{1,99}$/.test(Todo)) {
      return setError("❌ Enter a valid task")
    }
    const id = Math.floor(Math.random() * 100 + Date.now()) + 1;
    let newTodo = {
      id,
      todo: Todo
    }
    let oldData = JSON.parse(localStorage.todos || "[]")
    localStorage.setItem("todos", JSON.stringify([...oldData, newTodo]))
    setData([...oldData, newTodo])
    setTodo("") 
  }
  
  return (
    <div className='relative flex justify-center gap-4'>
        <input type="text" placeholder='i need to...' className='w-11/12 pl-2 border-2 rounded-md text-xl shadow-lg outline-none ' value={Todo} onChange={e => {setTodo(e.target.value), setError("")}} minLength={1} maxLength={99} />
        <button className='text-green-400' onClick={AddTodo}>+</button>
        <span className="absolute -bottom-7 left-0 text-red-500 font-medium">{error}</span>
    </div>
  )
}
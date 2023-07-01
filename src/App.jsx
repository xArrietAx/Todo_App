import { useEffect, useState } from "react";
import { Name } from "./components/Name";
import { AddTodo } from "./components/AddTodo";
import { Todos } from "./components/Todos";

export function App() {

  const [Data, setData] = useState([])

  useEffect(() => {
    let TODOS = JSON.parse(localStorage.todos || "[]")
    setData(TODOS)
  }, [])

  return (
    <div className="app flex flex-col justify-between gap-3 w-11/12 max-w-xl px-6 py-11 mx-auto rounded-xl bg-white shadow-md shadow-blue-700">
      <Name />
      <Todos setData={setData} Data={Data} />
      <AddTodo setData={setData} />
    </div>
  )
}
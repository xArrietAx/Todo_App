import { Todo } from "./Todo";

export const Todos = ({ setData, Data }) => {
  return (
    <div className="flex flex-col gap-3 p-3 rounded-lg my-4 overflow-hidden overflow-y-auto ">
      {
        Data.length === 0 ? <span className="font-semibold text-center" >There's nothing!</span>
          : Data.map((e, i) => {
            return <Todo setData={setData} Data={Data} todo={e} key={e.id} />
          }
          )
      }
    </div>
  )
}

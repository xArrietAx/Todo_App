import react from "../assets/react.svg";

export const Name = () => {
  return (
    <div className="flex flex-col items-center gap-5">
        <img src={react} alt="react icon" className="w-16 react"/>
    <h1 className="text-2xl text-center sm:text-4xl">TO DO LIST</h1>
    </div>
  )
}

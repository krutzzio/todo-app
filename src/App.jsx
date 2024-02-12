import { useEffect, useState } from 'react'
import './App.css'
import { Tasca } from './Tasca'

function App() {

  const [todoList, setTodoList] = useState([])
  const [fullTask, setFullTask] = useState({
    task: "",
    color: "#ffffff",
  })
  useEffect(() => {
    if (localStorage.getItem("todoList") !== null) {
      setTodoList(JSON.parse(localStorage.getItem("todoList")))
    }

  }, [])

  const addTodo = () => {
    if(fullTask.task === "") return
    let list = [...todoList]
    let task = fullTask
    list.push(task)
    setTodoList(list)
    localStorage.setItem("todoList", JSON.stringify(list))
  }

  function deleteTask(inde) {
    let list = [...todoList]
    list.splice(inde, 1)
    setTodoList(list)
  }


  return (
    <main className='w-full h-full grid grid-rows-3'>
      <h1 className='text-4xl'>TODO APP</h1>
      <section className='grid grid-cols-2'>
        <article className='flex flex-col justify-start items-start gap-4 border-r-2 pr-8 mb-4'>
          <div className=''>
            <label className='mr-4' htmlFor="task">Tasca: </label>
            <input className="p-4 rounded" required name='task' type="text" onChange={(e) => setFullTask({ ...fullTask, task: e.target.value, })} />
          </div>
          <div>
            <label className='mr-4' htmlFor="color">Color:</label>
            <input className="rounded" value={fullTask.color} name='color' type="color" onChange={(e) => setFullTask({ ...fullTask, color: e.target.value, })} />
          </div>
          <button className='bg-blue-600 w-fit px-4 py-2 rounded' onClick={addTodo}>Afegir Tasca</button>
        </article>

        <article className='flex flex-col gap-4 px-4 h-96 overflow-auto'>
          {
            todoList.map((task, index) => <Tasca key={index} task={task} deleteTask={deleteTask} ind={index} />)
          }
        </article>
      </section>
    </main>
  )
}

export default App

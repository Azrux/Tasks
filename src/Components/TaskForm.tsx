import { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Task } from '../Interfaces/task.interface'

type handleInputchange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

interface Props {
  addNewtask: (task: Task) => void
}

const initialState = {
  title: '',
  description: ''
}

export default function TaskForm({ addNewtask }: Props) {

  const [task, setTask] = useState(initialState)

  function handleInputchange({ target: { name, value } }: handleInputchange) {
    setTask({ ...task, [name]: value })
  }

  function handleNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addNewtask(task)
    setTask(initialState)
  }

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>

      <form onSubmit={handleNewTask}>
        <input type='text' placeholder="Write a title" name='title' className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputchange}
          value={task.title}
        />

        <textarea name='description' rows={2} placeholder='Write a description' className="form-control mb-3 shadow-none border-0" onChange={handleInputchange} value={task.description} ></textarea>

        <button className="btn btn-primary" >
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>

  )
}
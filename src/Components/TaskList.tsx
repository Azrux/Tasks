import { Task } from "../Interfaces/task.interface"
import TaskCard from "./TaskCard"

interface List {
  tasks: Task[];
  deleteTask: (id: number) => void
}

export default function TaskList({ tasks, deleteTask }: List) {
  return (
    <>
      {tasks?.map(t => {
        return (
          <div className="col-md-4 pb-2" key={t.id}>
            <TaskCard task={t} deleteTask={deleteTask} />
          </div>
        )
      }

      )}
    </>
  )
}
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Task } from './Interfaces/task.interface';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';

function App(): JSX.Element {

  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    title: 'Create tasks',
    description: 'Create a new task',
    completed: false
  }])

  function addNewTask(task: Task) {
    setTasks([...tasks, {...task, id: tasks.length + 1, completed: false}])
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container'>
          <div className='navbar-brand'>
            <img src={logo} alt='logo' style={{ width: '4rem' }} />
            Tasks - React & TypeScript
          </div>
        </div>
      </nav>

      <main className="container p-4">
        <div className='row'>
          <div className='col-md-4'>
            <TaskForm addNewtask={addNewTask}/>
          </div>
          <div className='col-md-8'>
            <div className='row'>
              <TaskList tasks={tasks} deleteTask={deleteTask}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

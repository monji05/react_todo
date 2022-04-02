import React, { useState } from 'react';
import Todo from './components/Todo'
import type { task } from './components/Todo'
import FilterButton from './components/filterButton'
import Form from './components/Form'
import { nanoid } from "nanoid"

function App() {

  const tasks: task[] = [
    {
      id: `todo-${nanoid()}`,
      name: "Eat",
      completed: false,
      toggleTaskCompleted: toggleTaskCompleted,
      toggleDelete: toggleDelete,
      editTask: editTask
    },
  ]

  const [taskList, setTasks] = useState(tasks)

  function addTask(name: string) {
    const newTask = {
      id: `todo-${nanoid()}`,
      name: name,
      completed: false,
      toggleTaskCompleted: toggleTaskCompleted,
      toggleDelete: toggleDelete,
      editTask: editTask,
    }
    setTasks([...taskList, newTask])
  }

  function toggleTaskCompleted(id: string) {
    const toggledTaskList = taskList.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(toggledTaskList)
  }

  function toggleDelete(id: string) {
    const remainTaskList = taskList.filter(task => id !== task.id)
    setTasks(remainTaskList)
  }

  function editTask(id: string, newName: string) {
    const editedTaskList = taskList.map(task => {
      if (id === task.id) {
        return { ...task, name: newName }
      }
      return task
    })
    setTasks(editedTaskList)
  }

  const [filter, setFilter] = useState('All')

  const categories = [
    {
      name: "All",
      isPressed: true
    },
    {
      name: "Active",
      isPressed: false
    },
    {
      name: "Completed",
      isPressed: false
    }
  ]

  const categoryList = categories.map(category => (
    <FilterButton
      name={category.name}
      setFilter={() => setFilter(category.name)}
      isPressed={category.name === filter}
    />
  ))

  const todoList = taskList
    .filter(task => {
      switch (filter) {
        case 'All':
          return task
        case 'Active':
          return !task.completed
        case 'Completed':
          return task.completed
        default:
          return task
      }
    })
    .map(task =>
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        toggleDelete={toggleDelete}
        editTask={editTask}
      />
    )


  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {categoryList}
      </div>
      <ul
        className="stack-large stack-exception"
      >
        {todoList}
      </ul>
    </div>
  );
}

export default App;

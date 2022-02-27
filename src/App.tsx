import React, { useState } from 'react';
import Todo from './components/Todo'
import type { task } from './components/Todo'
import FilterButton from './components/FilterButton'
import type { category } from './components/FilterButton'
import Form from './components/Form'
import { nanoid } from "nanoid"

function App() {

  const categories: category[] = [
    {
      name: "All"
    },
    {
      name: "Active"
    },
    {
      name: "Completed"
    }
  ]

  const tasks: task[] = [
    {
      id: `todo-${nanoid()}`,
      name: "Eat",
      completed: false,
      toggleTaskCompleted: toggleTaskCompleted,
      toggleDelete: toggleDelete,
    },

  ]

  const [taskList, setTasks] = useState(tasks);

  const categoryList = categories.map(
    category => <FilterButton name={category.name} />
  )

  function addTask(name: string) {
    const newTask = {
      id: `todo-${nanoid()}`,
      name: name,
      completed: false,
      toggleTaskCompleted: toggleTaskCompleted,
      toggleDelete: toggleDelete,
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

  const todoList = taskList.map(task =>
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      toggleDelete={toggleDelete}
    />
  )

  const remainTaskText = taskList.length > 1 ? "tasks" : "task"

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {categoryList}
      </div>
      <h2 id="list-heading">
        {todoList.length}{remainTaskText} remaining
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
      >
        {todoList}
      </ul>
    </div>
  );
}

export default App;

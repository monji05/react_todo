import React, { useState } from 'react';
import Todo from './components/Todo'
import type { task } from './components/Todo'
import FilterButton from './components/FilterButton'
import Form from './components/Form'
import { nanoid } from "nanoid"

const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
}
const FILTER_NAMES = Object.keys(FILTER_MAP)

function App() {

    const tasks: task[] = [
        {
            id: `todo-${nanoid()}`,
            name: "Eat",
            completed: false,
            toggleTaskCompleted: toggleTaskCompleted,
            toggleDelete: toggleDelete,
            editTask: editTask,
        },

    ]

    const [taskList, setTasks] = useState(tasks);

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
    const [filter, setFilter] = useState("All")
    const filterList = FILTER_NAMES.map(name => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ))

    const todoList = taskList.map(task =>
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

    const remainTaskText = taskList.length > 1 ? "tasks" : "task"

    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <Form addTask={addTask} />
            <div className="filters btn-group stack-exception">
                {}
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

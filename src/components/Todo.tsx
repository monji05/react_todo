import React, { useState } from 'react'
import EditView from "./todo/edit"


export type task = {
  id: string
  name: string
  completed: boolean
  toggleTaskCompleted: Function
  toggleDelete: Function
}

export default function Todo(task: task) {
  const [isEditing, setEditing] = useState(false)
  if (isEditing) {
    return <EditView {...task} />
  }

  return (
    <div>
      <li className="todo stack-small">
        <div className="c-cb">
          <input id="todo-0" type="checkbox" defaultChecked={task.completed} onChange={() => task.toggleTaskCompleted(task.id)} />
          <label className="todo-label" htmlFor={task.id}>
            {task.name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn" onClick={() => setEditing(true)}>
            Edit <span className="visually-hidden">{task.name}</span>
          </button>
          <button type="button" className="btn btn__danger" onClick={() => task.toggleDelete(task.id)}>
            Delete <span className="visually-hidden">{task.name}</span>
          </button>
        </div>
      </li>
    </div>
  );
}
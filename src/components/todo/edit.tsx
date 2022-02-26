import React from "react";
import type { task } from "../Todo"

export default function editView(task: task) {
  return (
    <form className="stack-small">
      <div className="form-group">
        <label className="todo-label" htmlFor={task.id}>
          New name for {task.name}
        </label>
        <input id={task.id} className="todo-text" type="text" />
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel">
          Cancel
          <span className="visually-hidden">renaming {task.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {task.name}</span>
        </button>
      </div>
    </form>
  )
}
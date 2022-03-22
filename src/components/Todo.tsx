import React, { useState } from 'react'
import { Checkbox } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export type task = {
  id: string
  name: string
  completed: boolean
  toggleTaskCompleted: Function
  toggleDelete: Function
  editTask: Function
}

export default function Todo(task: task) {
  const [isEditing, setEditing] = useState(false)
  const [newName, setNewName] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewName(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (newName === "") return
    task.editTask(task.id, newName)
    setNewName("")
    setEditing(false)
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label className="todo-label" htmlFor={task.id}>
          New name for {task.name}
        </label>
        <input id={task.id} className="todo-text" type="text" value={newName} onChange={(e) => handleChange(e)} />
        <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
          Cancel
          <span className="visually-hidden">renaming {task.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {task.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="todo-view">
      <div className="c-cb">
        <Checkbox
          sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
          id={task.id}
          checked={task.completed}
          onChange={() => task.toggleTaskCompleted(task.id)}
        />
        <label className="todo-label" htmlFor={task.id}>
          {task.name}
        </label>
      </div>
      <div className="icon-group">
        <EditIcon
          type="button"
          onClick={() => setEditing(true)}
          sx={{
            fontSize: 30
          }}
        />
        <DeleteIcon
          type="button"
          onClick={() => task.toggleDelete(task.id)}
          sx={{
            fontSize: 30
          }}
        />
      </div>
    </div>
  );

  return <div>{isEditing ? editingTemplate : viewTemplate}</div>;

}
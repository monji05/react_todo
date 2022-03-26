import React, { useState } from 'react'
import { Checkbox } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

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

  function handleCancel() {
    if (newName !== "") {
      setNewName("")
    }
    setEditing(false)
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group form-edit">
        <input id={task.id} className="todo-text" type="text" value={newName} onChange={(e) => handleChange(e)} />
        <button>
          <CloseIcon
            type="button"
            className="button-icon"
            onClick={() => handleCancel()}
            sx={{
              fontSize: 35
            }}
          />
        </button>
        <button>
          <CheckIcon
            type="submit"
            className="button-icon"
            sx={{
              fontSize: 35
            }}
          >
          </CheckIcon>
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
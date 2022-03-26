import React from 'react'
import { Checkbox } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

export type props = {
  id: string
  name: string
  completed: boolean
  toggleTaskCompleted: Function
  toggleDelete: Function
  editTask: Function
  setEditing: any
}

const TodoView = (task: props) => {
  return (
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
          onClick={() => task.setEditing(true)}
          sx={{
            fontSize: 35
          }}
        />
        <DeleteIcon
          type="button"
          onClick={() => task.toggleDelete(task.id)}
          sx={{
            fontSize: 35
          }}
        />
      </div>
    </div>
  )
}

export default TodoView
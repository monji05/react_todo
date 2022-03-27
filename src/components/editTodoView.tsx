import React, { useState } from "react"
import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'

export type props = {
  id: string
  name: string
  completed: boolean
  toggleTaskCompleted: Function
  toggleDelete: Function
  editTask: Function
  setEditing: any
}


const EditTodoView = (task: props) => {
  const [newName, setNewName] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewName(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (newName === "") return
    task.editTask(task.id, newName)
    setNewName("")
    task.setEditing(false)
  }

  function handleCancel() {
    if (newName !== "") {
      setNewName("")
    }
    task.setEditing(false)
  }
  return (
    <form className="stack-small" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group form-edit">
        <input id={task.id} className="input todo-text" type="text" value={newName} onChange={(e) => handleChange(e)} />
        <button>
          <CloseIcon
            type="button"
            className="button-icon"
            onClick={() => handleCancel()}
            sx={{
              fontSize: 25
            }}
          />
        </button>
        <button>
          <CheckIcon
            type="submit"
            className="button-icon"
            sx={{
              fontSize: 25
            }}
          >
          </CheckIcon>
        </button>
      </div>
    </form>
  )
}

export default EditTodoView
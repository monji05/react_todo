import React, { useState } from 'react'
import EditTodoView from './editTodoView'
import TodoView from './todoView'

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

  return <div> {isEditing ?
    <EditTodoView
      {...task}
      setEditing={setEditing}
    /> :
    <TodoView
      {...task}
      setEditing={setEditing}
    />
  }</div>;

}
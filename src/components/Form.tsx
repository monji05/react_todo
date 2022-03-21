import React, { useState } from "react";
import { nanoid } from "nanoid"
import { Fab } from "@mui/material";


export default function Form(props: any) {

  const [name, setName] = useState("")
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (name === "") return
    props.addTask(name)
    setName("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <div className="input-form">
        <input
          type="text"
          id={`todo-${nanoid()}`}
          name="text"
          autoComplete="off"
          className="input input__lg"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        <Fab color="primary" aria-label="+" className="addIcon">
          <button type="submit" className="add-text">
            +
          </button>
        </Fab>
      </div>
    </form>
  )
}
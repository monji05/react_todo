import React, { useState } from "react";
import { nanoid } from "nanoid"

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
      <input
        type="text"
        id={`todo-${nanoid()}`}
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  )
}
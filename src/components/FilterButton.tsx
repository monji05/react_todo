import React from "react"

export type props = {
  name: string,
  setFilter: any
  isPressed: boolean
}

export default function FilterButton(props: props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span>{props.name}</span>
    </button>
  )

}

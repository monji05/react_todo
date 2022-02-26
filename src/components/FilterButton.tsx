import React from "react"


export type category = {
  name: string
}


export default function FilterButton(category: category) {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>{category.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  )
}
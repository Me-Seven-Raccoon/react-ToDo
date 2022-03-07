import React, { useState } from 'react'

import './NewTaskForm.css'

const NewTaskForm = ({ onItemAdded }) => {
  const [label, setLabel] = useState('')

  const onLabelChange = (e) => {
    setLabel(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onItemAdded(label)
    setLabel('')
  }
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          type="text"
          onChange={onLabelChange}
          value={label}
        />
      </label>
    </form>
  )
}

export default NewTaskForm

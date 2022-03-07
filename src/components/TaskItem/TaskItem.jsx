import React, { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import './TaskItem.css'
import { TaskTimer } from '../TaskTimer'

const TaskItem = ({ label, onDeleted, onCompleted, completed, date }) => {
  const [edit, setEdit] = useState(false)
  const [newLabel, setNewLabel] = useState(label)

  const editForm = () => {
    setEdit(true)
  }
  const valueInput = (e) => {
    setNewLabel(e.target.value)
  }
  const newForm = (e) => {
    e.preventDefault()
    setEdit(false)
  }
  let task
  if (label === newLabel) {
    task = label
  } else {
    task = newLabel
  }

  let classNames = ''
  if (completed) {
    classNames += 'completed'
  }
  if (edit) {
    classNames += 'editing'
  }
  return (
    <li className={classNames}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onCompleted} id={label} />
        <label htmlFor={label}>
          <span className="description">{task}</span>
          <TaskTimer />
          <span className="created">
            {formatDistanceToNow(date, {
              includeSeconds: true,
            })}
          </span>
        </label>
        <button title="Изменить" className="icon icon-edit" onClick={editForm} />
        <button title="Удалть" className="icon icon-destroy" onClick={onDeleted} />
      </div>
      <form onSubmit={newForm}>
        <input
          type="text"
          className="edit"
          onChange={valueInput}
          ref={(inputElement) => {
            if (inputElement) {
              inputElement.focus()
            }
          }}
        />
      </form>
    </li>
  )
}
export default TaskItem

TaskItem.defaultProps = {
  label: '',
  onDeleted: () => {},
  onCompleted: () => {},
  completed: true,
  date: new Date(),
}

TaskItem.propTypes = {
  label: PropTypes.string,
  onDeleted: PropTypes.func,
  onCompleted: PropTypes.func,
  completed: PropTypes.bool,
  date: PropTypes.object,
}

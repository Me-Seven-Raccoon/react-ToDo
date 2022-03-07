import React from 'react'
import PropTypes from 'prop-types'

import './TaskListFilter.css'

const TaskListFilter = ({ completedButton, allButton, activeButton }) => {
  return (
    <ul className="filters">
      <li>
        <button className="selected" onClick={allButton}>
          All
        </button>
      </li>
      <li>
        <button onClick={activeButton}>Active</button>
      </li>
      <li>
        <button onClick={completedButton}>Completed</button>
      </li>
    </ul>
  )
}
export default TaskListFilter

TaskListFilter.defaultProps = {
  completedButton: () => {},
  allButton: () => {},
  activeButton: () => {},
}
TaskListFilter.propTypes = {
  completedButton: PropTypes.func,
  allButton: PropTypes.func,
  activeButton: PropTypes.func,
}

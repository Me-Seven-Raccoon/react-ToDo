import React from 'react'
import PropTypes from 'prop-types'

import './TaskListFilter.css'

const TaskListFilter = ({ completedButton, allButton, activeButton, status }) => {
  console.log(status)
  return (
    <ul className="filters">
      <li>
        <button className={status === 'all' ? 'selected' : null} onClick={allButton}>
          All
        </button>
      </li>
      <li>
        <button className={status === 'active' ? 'selected' : null} onClick={activeButton}>
          Active
        </button>
      </li>
      <li>
        <button className={status === 'completed' ? 'selected' : null} onClick={completedButton}>
          Completed
        </button>
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

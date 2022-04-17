import React from 'react'
import PropTypes from 'prop-types'

import './Footer.css'
import { TaskListFilter } from '../TaskListFilter'

const Footer = ({ newCount, completedButton, allButton, activeButton, deleteCompleted, status }) => {
  return (
    <footer className="footer">
      <span className="todo-count"> {newCount} items</span>
      <TaskListFilter
        status={status}
        completedButton={completedButton}
        allButton={allButton}
        activeButton={activeButton}
        deletCompleted={deleteCompleted}
      />
      <button className="clear-completed" onClick={deleteCompleted}>
        Clear completed
      </button>
    </footer>
  )
}
export default Footer

Footer.defaultProps = {
  completedButton: () => {},
  allButton: () => {},
  activeButton: () => {},
  deleteCompleted: () => {},
}
Footer.propTypes = {
  newCount: PropTypes.number.isRequired,
  completedButton: PropTypes.func,
  allButton: PropTypes.func,
  activeButton: PropTypes.func,
  deleteCompleted: PropTypes.func,
}

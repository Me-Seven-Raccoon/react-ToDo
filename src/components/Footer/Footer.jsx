import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Footer.css'
import { TaskListFilter } from '../TaskListFilter'

export default class Footer extends Component {
  render() {
    const { newCount, completedButton, allButton, activeButton, deleteCompleted } = this.props

    return (
      <footer className="footer">
        <span className="todo-count"> {newCount} items</span>
        <TaskListFilter
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
}

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

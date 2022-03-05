import React, { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import './TaskItem.css'
import { TaskTimer } from '../TaskTimer'

export default class TaskItem extends Component {
  state = {
    timer: null,
    edit: false,
    newLabel: this.props.label,
  }

  editForm = () => {
    this.setState({
      edit: true,
    })
  }

  valueInput = (e) => {
    this.setState({
      newLabel: e.target.value,
    })
  }

  newForm = (e) => {
    e.preventDefault()
    this.setState({
      edit: false,
    })
  }

  render() {
    const { label, onDeleted, onCompleted, completed, date } = this.props
    const { timer, edit, newLabel } = this.state
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
            <TaskTimer runTimer={this.runTimer} timer={timer} />
            <span className="created">
              {formatDistanceToNow(date, {
                includeSeconds: true,
              })}
            </span>
          </label>
          <button title="Изменить" className="icon icon-edit" onClick={this.editForm} />
          <button title="Удалть" className="icon icon-destroy" onClick={onDeleted} />
        </div>
        <form onSubmit={this.newForm}>
          <input
            type="text"
            className="edit"
            onChange={this.valueInput}
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
}

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

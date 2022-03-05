import React, { Component } from 'react'
import './TaskTimer.css'

export default class TaskTimer extends Component {
  state = {
    count: 0,
    stop: true,
  }
  startTimer = () => {
    this.setState({
      stop: false,
    })
    let timer = setInterval(() => {
      const { count } = this.state
      this.setState({
        count: count + 1,
      })
      if (this.state.stop) {
        clearInterval(timer)
      }
    }, 1000)
  }
  stopTimer = () => {
    this.setState({
      stop: true,
    })
  }
  render() {
    const { count, stop } = this.state
    const min = Math.floor(count / 60)
    const sec = Math.floor(count - min * 60)
    return (
      <span className="timer">
        <button onClick={stop ? this.startTimer : null} className="icon-play"></button>
        <button onClick={this.stopTimer} className="icon-pause disabled = 'disabled'"></button>
        <span>{`${min}:${sec < 10 ? `0${sec}` : sec}`}</span>
      </span>
    )
  }
}

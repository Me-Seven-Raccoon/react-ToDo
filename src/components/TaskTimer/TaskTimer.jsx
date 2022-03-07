import React, { useState, useEffect } from 'react'
import './TaskTimer.css'

const TaskTimer = () => {
  const [count, setCount] = useState(0)
  const [taimBoolean, setTaimBoolen] = useState(false)
  const [tirmId, setTimerId] = useState(0)

  useEffect(() => {
    let intervalId = null
    if (taimBoolean) {
      intervalId = setInterval(() => {
        setCount((el) => el + 1)
      }, 1000)
      setTimerId(intervalId)
    } else {
      clearInterval(tirmId)
    }
  }, [taimBoolean])

  const min = Math.floor(count / 60)
  const sec = Math.floor(count - min * 60)
  return (
    <span className="timer">
      <button onClick={stop ? () => setTaimBoolen(true) : null} className="icon-play"></button>
      <button onClick={() => setTaimBoolen(false)} className="icon-pause disabled = 'disabled'"></button>
      <span>{`${min}:${sec < 10 ? `0${sec}` : sec}`}</span>
    </span>
  )
}
export default TaskTimer

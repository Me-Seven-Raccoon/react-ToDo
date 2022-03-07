import React, { useState } from 'react'

import './App.css'
import { NewTaskForm } from '../NewTaskForm'
import { TaskList } from '../TaskList'
import { Footer } from '../Footer'

const App = () => {
  const [maxId, setMaxId] = useState(100)
  const [dataList, setDataList] = useState([createItem('Coffee'), createItem('Green tea'), createItem('Orange juice')])
  const [filterViewStatus, setFilterViewStatus] = useState('all')

  function createItem(label) {
    return {
      label,
      edit: false,
      completed: false,
      id: maxId + label,
      date: new Date(),
    }
  }
  const addItem = (text) => {
    if (text.length !== 0 && !text.match(/^[ ]+$/)) {
      setMaxId((e) => e + 1)
      const newItem = createItem(text)
      setDataList((items) => [...items, newItem])
    }
  }

  const deletItem = (id) => {
    setDataList((dataList) => {
      const idx = dataList.findIndex((el) => el.id === id)
      return [...dataList.slice(0, idx), ...dataList.slice(idx + 1)]
    })
  }
  const onCompleted = (id) => {
    setDataList((dataList) => {
      const idx = dataList.findIndex((el) => el.id === id)
      const oldItem = dataList[idx]
      const newItem = { ...oldItem, completed: !oldItem.completed }
      const newArr = [...dataList.slice(0, idx), newItem, ...dataList.slice(idx + 1)]
      return newArr
    })
  }

  const completedButton = () => {
    setFilterViewStatus('completed')
  }
  const allButton = () => {
    setFilterViewStatus('all')
  }
  const activeButton = () => {
    setFilterViewStatus('active')
  }

  const deleteCompleted = () => {
    setDataList((dataList) => {
      const idx = dataList.map((el) => el).filter((el) => el.completed)
      const newIdx = dataList.filter((el) => !idx.includes(el))
      return newIdx
    })
  }

  const completedCount = dataList.filter((el) => el.completed).length
  const newCount = dataList.length - completedCount
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onItemAdded={addItem} />
      </header>
      <section className="main">
        <TaskList todos={dataList} onDeleted={deletItem} onCompleted={onCompleted} status={filterViewStatus} />
        <Footer
          newCount={newCount}
          completedButton={completedButton}
          allButton={allButton}
          activeButton={activeButton}
          deleteCompleted={deleteCompleted}
        />
      </section>
    </section>
  )
}
export default App

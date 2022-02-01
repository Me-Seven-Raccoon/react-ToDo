import React, {Component} from "react";



import './app.css'


import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";
import Footer from "../footer";

export default class App extends Component{

    maxId = 100;
    state ={
        dataList: [
            this.createItem('Coffee'),
            this.createItem('Green tea'),
            this.createItem('Orange juice')
        ]
    }

    createItem(label){
        return {
            label,
            completed: false,
            filters: 'all',
            id: this.maxId++
        }
    }

    addItem = (text) => {
        const newItem = this.createItem(text);
        this.setState(({dataList}) =>{
            const newArr = [
                ...dataList, newItem
            ]
            return {
                dataList: newArr
            }
        })
    }

    deletItem = (id) => {
        this.setState(({dataList}) => {
            const idx = dataList.findIndex((el) => el.id === id);

            const newArr = [
                ...dataList.slice(0, idx),
                ...dataList.slice(idx + 1)
            ];

            return {
                dataList: newArr
            }
        })
    }

    onCompleted = (id) => {
        this.setState(({dataList}) => {
            const idx = dataList.findIndex((el) => el.id === id);

            const oldItem = dataList[idx];
            const newItem = {...oldItem, completed: !oldItem.completed};

            const newArr = [
                ...dataList.slice(0, idx),
                newItem,
                ...dataList.slice(idx + 1)
            ]
            return {
                dataList: newArr
            }
        })
    }

    completedButton = () => {
        this.setState(({dataList}) => {
            const idx = dataList.map((el) => {
               const newItem = {...el, filters: 'completed'}
                return newItem
            })
            return {
                dataList: idx
            }
        })
    }

    allButton =() => {
        this.setState(({dataList}) => {
            const idx = dataList.map((el) => {
                const newItem = {...el, filters: 'all'}
                return newItem
            })
            return {
                dataList: idx
            }
        })
    }

    activeButton =() => {
        this.setState(({dataList}) => {
            const idx = dataList.map((el) => {
                const newItem = {...el, filters: 'active'}
                return newItem
            })
            return {
                dataList: idx
            }
        })
    }

    deleteCompleted = () => {
        this.setState(({dataList}) => {
            const idx = dataList.map((el) => el).filter((el) => el.completed)

            const newIdx = dataList.filter(el => !idx.includes(el))

            return {
                dataList: newIdx
            }

        })
    }


    render() {
        const completedCount = this.state.dataList
                                .filter((el) => el.completed).length;
        const newCount = this.state.dataList.length - completedCount

        return(
            <section className='todoapp'>
                <header className='header'>
                    <h1>todos</h1>
                    <NewTaskForm  onItemAdded = {this.addItem}/>
                </header>
                <section className='main'>
                    <TaskList todos ={this.state.dataList}
                              onDeleted = { this.deletItem }
                              onCompleted = {this.onCompleted}/>
                    <Footer newCount = {newCount}
                           completedButton = {this.completedButton}
                            allButton = {this.allButton}
                            activeButton = {this.activeButton}
                            deleteCompleted = {this.deleteCompleted}
                           />
                </section>
            </section>
        )
    }

}


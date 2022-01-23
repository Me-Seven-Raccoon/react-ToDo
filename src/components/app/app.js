import React, {Component} from "react";



import './app.css'


import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";
import Footer from "../footer";

export default class App extends Component{

    state ={
        dataList: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make Awesome App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]
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

    render() {
        return(
            <section className='todoapp'>
                <header className='header'>
                    <h1>todos</h1>
                    <NewTaskForm/>
                </header>
                <section className='main'>
                    <TaskList todos ={this.state.dataList}
                              onDeleted = { this.deletItem }/>
                    <Footer/>
                </section>
            </section>
        )
    }

}


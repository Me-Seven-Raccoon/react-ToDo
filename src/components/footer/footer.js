import React, {Component} from "react";

import './footer.css'
import TaskListFilter from "../task-list-filter";


export default class Footer extends Component{




    render() {
        const {newCount, completedButton, allButton, activeButton, deleteCompleted} = this.props

        return(
            <footer className='footer'>
                <span className='todo-count'> {newCount} items</span>
                <TaskListFilter
                    completedButton={completedButton}
                    allButton={allButton}
                    activeButton={activeButton}
                    deletCompleted={deleteCompleted}
                />

                {/*<ul className='filters'>*/}
                {/*    <li>*/}
                {/*        <button className='selected'*/}
                {/*                onClick={allButton}>All</button>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <button*/}
                {/*            onClick={activeButton}>*/}
                {/*            Active</button>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <button*/}
                {/*        onClick={completedButton}>Completed</button>*/}
                {/*    </li>*/}
                {/*    <button className='clear-completed'>Clear completed</button>*/}
                {/*</ul>*/}
                <button className='clear-completed'
                onClick={deleteCompleted}>Clear completed</button>
            </footer>
        )
    }

}
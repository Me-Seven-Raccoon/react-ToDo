import React, {Component} from "react";

import './task-list-filter.css'

export default class TaskListFilter extends Component{

    render() {
        const {completedButton, allButton, activeButton} = this.props

        return(
            <ul className='filters'>
                <li>
                    <button className='selected'
                            onClick={allButton}>All</button>
                </li>
                <li>
                    <button
                        onClick={activeButton}>
                        Active</button>
                </li>
                <li>
                    <button
                        onClick={completedButton}>Completed</button>
                </li>
            </ul>
        )
    }
}




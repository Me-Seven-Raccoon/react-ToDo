import React, {Fragment} from "react";
import TaskItem from "../task"


import './task-list.css'

export const TaskList = ({ todos, status, onDeleted, onCompleted }) => {
    let result;

    if(status === 'completed'){
        result = todos.filter((el) => el.completed)
    }
    if(status === 'all'){
        result = todos;
    }
    if(status === 'active'){
        result = todos.filter((el) => !el.completed)
    }


    return (
        <ul className='todo-list'>
            {result.map(({id, ...itemProps}) => (
                <Fragment key={id}>
                    <TaskItem {...itemProps}
                              onDeleted={() => onDeleted(id)}
                              onCompleted={() => onCompleted(id)}/>
                </Fragment>
            ))
            }
        </ul>
    )
}









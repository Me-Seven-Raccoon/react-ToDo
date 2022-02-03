import React, {Fragment} from "react";
import TaskItem from "../task"
import PropTypes from "prop-types";


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


TaskList.defaultProps = {
    status: "all",
    onDeleted: () => {},
    onCompleted: () => {},
}

TaskList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.string,
    onDeleted: PropTypes.func,
    onCompleted: PropTypes.func,
}








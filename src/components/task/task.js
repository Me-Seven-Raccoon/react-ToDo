import React, {Component} from "react";
import { formatDistanceToNow } from 'date-fns'
import PropTypes from "prop-types";

import './task.css'


export default class TaskItem extends Component{




    render() {
        const {label, onDeleted, onCompleted, completed, date} = this.props

        let classNames = ''
        if(completed){
            classNames+= 'completed'
        }
        return (
            <li className={classNames}>
                <div className='view'>
                    <input className='toggle' type='checkbox' onClick={onCompleted}/>
                    <label>
                        <span className='description'>
                            {label}</span>
                        <span className='created'>{formatDistanceToNow(date,
                            { includeSeconds: true })}</span>
                    </label>
                    <button className='icon icon-edit'/>
                    <button className='icon icon-destroy'
                    onClick={onDeleted}/>
                </div>
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

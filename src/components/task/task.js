import React, {Component} from "react";

import './task.css'


export default class TaskItem extends Component{




    render() {
        const {label, onDeleted, onCompleted, completed} = this.props

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
                        <span className='created'>time</span>
                    </label>
                    <button className='icon icon-edit'/>
                    <button className='icon icon-destroy'
                    onClick={onDeleted}/>
                </div>
            </li>
        )
    }
}


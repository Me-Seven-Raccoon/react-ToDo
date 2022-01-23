import React, {Component} from "react";

import './task.css'


export default class TaskItem extends Component{

    state = {
        completed: false
    }

    onInputClick = () => {
        this.setState((state) => {
            return {
                completed: !state.completed
            }
        })
    }


    render() {
        const {label, onDeleted} = this.props

        const { completed } = this.state

        let classNames = ''
        if(completed){
            classNames+= 'completed'
        }
        return (
            <li className={classNames}>
                <div className='view'>
                    <input className='toggle' type='checkbox' onClick={this.onInputClick}/>
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


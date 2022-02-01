import React, {Component, Fragment} from "react";
import TaskItem from "../task"


import './task-list.css'

export default class TaskList extends Component{

    render() {
        const { todos, onDeleted, onCompleted} = this.props

    let flag = todos.map(el => el.filters)

        if(flag[0] === 'all'){
            const element = todos.map((el) => {
                const {id,...itemProps} = el
                return(
                    <Fragment key={id}>
                        <TaskItem {...itemProps}
                                  onDeleted = {() => onDeleted(id)}
                                  onCompleted = {() => onCompleted(id)}/>
                    </Fragment>
                )
            })
            return (
                <ul className='todo-list'>
                    {element}
                </ul>
            );
        }
        if(flag[0] === 'completed'){
            const element = todos.filter((el) => el.completed).map((el) => {
                const {id,...itemProps} = el
                return(
                    <Fragment key={id}>
                        <TaskItem {...itemProps}
                                  onDeleted = {() => onDeleted(id)}
                                  onCompleted = {() => onCompleted(id)}/>
                    </Fragment>
                )
            })
            return (
                <ul className='todo-list'>
                    {element}
                </ul>
            );
        }
        if(flag[0] === 'active'){
            const element = todos.filter((el) => !el.completed).map((el) => {
                const {id,...itemProps} = el
                return(
                    <Fragment key={id}>
                        <TaskItem {...itemProps}
                                  onDeleted = {() => onDeleted(id)}
                                  onCompleted = {() => onCompleted(id)}/>
                    </Fragment>
                )
            })
            return (
                <ul className='todo-list'>
                    {element}
                </ul>
            );
        }


   //      const element = todos.map((el) => {
   //     const {id,...itemProps} = el
   //     return (
   //        <Fragment key={id}>
   //             <TaskItem {...itemProps}
   //             onDeleted = {() => onDeleted(id)}
   //              onCompleted = {() => onCompleted(id)}/>
   //         </Fragment>
   //     );
   // });

   // return (
   //     <ul className='todo-list'>
   //         {element}
   //     </ul>
   // );
 };
}



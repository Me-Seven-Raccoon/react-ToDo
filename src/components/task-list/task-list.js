import React, {Component, Fragment} from "react";
import TaskItem from "../task";

import './task-list.css'

export default class TaskList extends Component{

    render() {

    const { todos, onDeleted } = this.props

    const element = todos.map((el) => {
       const {id,...itemProps} = el
       return (
          <Fragment key={id}>
               <TaskItem {...itemProps}
               onDeleted = {() => onDeleted(id)}/>
           </Fragment>
       );
   });

   return (
       <ul className='todo-list'>
           {element}
       </ul>
   );
 };
}



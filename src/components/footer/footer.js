import React, {Component} from "react";

import './footer.css'

export default class Footer extends Component{

    render() {
        return(
            <footer className='footer'>
                <span className='todo-count'> 1 items</span>
                <ul className='filters'>
                    <li>
                        <button className='selected'>All</button>
                    </li>
                    <li>
                        <button>Active</button>
                    </li>
                    <li>
                        <button>Completed</button>
                    </li>
                </ul>
            </footer>
        )
    }

}
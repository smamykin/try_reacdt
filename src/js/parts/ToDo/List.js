import classNames from "classnames";
import React from "react";

export default class TaskList extends React.Component
{
    render(){
        return (
            <ul className="todo__task-list">
                {this.props.tasks.map((task, index) => {
                    return (
                        <li key={index} className={classNames('task-item', {checked: task.isDone})}>
                            <div className="task-item__check"/>
                            <div className="task-item__text ">
                                {task.text}
                            </div>
                            <div className="task-item__delete"/>
                        </li>
                    );
                })}
            </ul>
        );
    }

}
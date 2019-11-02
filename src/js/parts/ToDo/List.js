import classNames from "classnames";
import React from "react";

export default class TaskList extends React.Component
{
    render(){
        return (
            <ul className="todo__task-list">
                {this.props.tasks.map((task) => {
                    return (
                        <li key={task.id} className={classNames('task-item', {'task-item_checked': task.isDone})}>
                            <div className="task-item__check" onClick={()=>this.props.onCheck(task.id)}/>
                            <div className="task-item__text ">
                                {task.text}
                            </div>
                            <div className="task-item__delete" onClick={()=>this.props.onDelete(task.id)}/>
                        </li>
                    );
                })}
            </ul>
        );
    }

}
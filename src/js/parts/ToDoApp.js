import React from 'react';
import classNames from 'classnames';

export default class ToDoApp extends React.Component {
    getTasks() {
        return [
            this.createTask(),
            this.createTask(),
            this.createTask(),
            this.createTask(),
            this.createTask()
        ];
    }

    createTask() {
        return {
            text: 'When breaking large sauerkraut',
            isDone: false
        }
    }

    render() {
        return (
            <div className="todo">
                <div className="todo__header"><h2 className="todo__title">What do you need to do?</h2></div>
                <ul className="todo__task-list">
                    {this.getTasks().map((task) => {
                        return (
                            <li className={classNames('task-item', {checked: task.isDone})}>
                                <div className="task-item__check"/>
                                <div className="task-item__text ">
                                    {task.text}
                                </div>
                                <div className="task-item__delete"/>
                            </li>
                        );
                    })}
                </ul>
                <ul className="todo__filter-control">
                    <li className="todo__filter-item">All</li>
                    <li className="todo__filter-item">New</li>
                    <li className="todo__filter-item">Completed</li>
                </ul>
            </div>
        );
    }
}
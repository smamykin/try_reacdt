import React from 'react';
import classNames from 'classnames';
import AddTask from "./ToDo/AddTask";
import TaskList from "./ToDo/List";
import FilterControl from "./ToDo/FilterControl";
import {filters} from "./constants";

export default class ToDoApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filter: filters[0].name
        }
    }
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
                <AddTask/>
                <TaskList tasks={this.getTasks()}/>
                <FilterControl filters={filters} checked={this.state.filter}/>
            </div>
        );
    }
}
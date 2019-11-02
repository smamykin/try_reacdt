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
            filter: filters[0].name,
            tasks: this.getTasksInit()

        }

    }

    get tasks(){
        return this.state.tasks;
    }

    getTasksInit() {
        return [
            this.createTask('When breaking large sauerkraut'),
            this.createTask('When breaking large sauerkraut'),
            this.createTask('When breaking large sauerkraut'),
            this.createTask('When breaking large sauerkraut'),
            this.createTask('When breaking large sauerkraut')
        ];
    }

    createTask(text) {
        return {
            text: text,
            isDone: false
        }
    }
    onTaskAdd(text){
        if (text){
            this.setState({
                tasks:   this.state.tasks.concat([this.createTask(text)])
            });
        }
    }

    render() {
        return (
            <div className="todo">
                <div className="todo__header"><h2 className="todo__title">What do you need to do?</h2></div>
                <AddTask onTaskAdd={(text)=>this.onTaskAdd(text)}/>
                <TaskList tasks={this.tasks}/>
                <FilterControl filters={filters} checked={this.state.filter}/>
            </div>
        );
    }
}
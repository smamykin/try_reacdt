import React from 'react';
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    getTasksInit() {
        let tasks = localStorage.getItem('tasks');
        if (tasks){
            tasks = JSON.parse(tasks);
        }
        if (!Array.isArray(tasks)){
            tasks = [];
        }
        return tasks;
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
import React from 'react';
import AddTask from "./ToDo/AddTask";
import TaskList from "./ToDo/List";
import FilterControl from "./ToDo/FilterControl";
import {filters} from "./constants";

export default class ToDoApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filter: filters[0],
            tasks: this.getTasksInit()
        }
    }

    get tasks(){
        if (typeof this.state.filter.check !== "function"){
            return this.state.tasks;
        }

        return this.state.tasks.filter(this.state.filter.check);
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
    getMaxId(){
        if (!this.state.tasks.length){
            return -1;
        }

        let ids = this.state.tasks.map((x)=>x.id);
        return Math.max(...ids)
    }

    createTask(text) {
        return {
            id: this.getMaxId() + 1,
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

    onCheck(id){
        let newTasks = this.state.tasks.map((v)=>{
            if (v.id === id){
                v.isDone = !v.isDone;
            }
            return v;
        });
        this.setState({tasks: newTasks});
    }

    onDelete(id){
        let newTasks = this.state.tasks.filter((v)=>{
            return v.id !== id;
        });
        this.setState({tasks: newTasks})
    }

    applyFilter(newFilter){
        this.setState({filter: newFilter});

    }
    onChangeItem(task){
        let newTasks = this.state.tasks.map((v)=>{
            if (v.id === task.id){
                return task;
            }
            return v;
        });
        this.setState({tasks: newTasks});
    }

    render() {
        return (
            <div className="todo">
                <div className="todo__header"><h2 className="todo__title">What do you need to do?</h2></div>
                <AddTask onTaskAdd={(text)=>this.onTaskAdd(text)}/>
                <TaskList onCheck={(id)=>this.onCheck(id)}
                          onDelete={(id) => this.onDelete(id)}
                          tasks={this.tasks}
                          onChangeItem={(task)=> this.onChangeItem(task)}
                />
                <FilterControl onClick={(name)=> this.applyFilter(name)} filters={filters} checked={this.state.filter}/>
            </div>
        );
    }
}
import classNames from "classnames";
import React from "react";
import ListItem from "./ListItem";

export default class TaskList extends React.Component {
    render() {
        return (
            <ul className="todo__task-list">
                {this.props.tasks.map((task) => <ListItem key={task.id} {...this.props} task={task}/>)}
            </ul>
        );
    }

}
import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types"

export default class TaskList extends React.Component {
    render() {
        return (
            <ul className="todo__task-list">
                {this.props.tasks.map((task) => <ListItem key={task.id} {...this.props} task={task}/>)}
            </ul>
        );
    }
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired
    }))
};


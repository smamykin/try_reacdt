import React from 'react';
import PropTypes from 'prop-types';

export default class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.form = React.createRef();
    }

    componentDidMount() {
        let element = this.form.current,
            input = this.input.current,
            className = 'todo__add-task_focused';

        input.addEventListener('focus', function () {
            element.classList.add(className);
            input.focus();
        });

        element.addEventListener('click', function () {
            element.classList.add(className);
            input.focus();
        });

        input.addEventListener('blur', function () {
            if (!input.value){
                element.classList.remove(className);
            }
        });
    }

    onTaskAdd(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        let value = this.input.current.value;
        if (value) {
            this.props.onTaskAdd(value);
        }
        this.input.current.value = '';
    }

    render() {
        return (
            <form className='todo__add-task' action='#' onSubmit={(evt) => this.onTaskAdd(evt)} ref={this.form}>
                <label className="todo__add-task-label">Добавить задачу</label>
                <input className="todo__add-task-input" name='add-task' type={'text'} ref={this.input}/>
                <input className="todo__add-task-button" name={'add-task-button'} type={'submit'} value={'Ок'}/>
            </form>
        )
    }
}
AddTask.propTypes = {
    onTaskAdd: PropTypes.func.isRequired
};

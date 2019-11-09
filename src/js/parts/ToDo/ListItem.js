import React from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";

export default class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.text = React.createRef();
        this.form = React.createRef();
        this.input = React.createRef();
        this.state = {isShowForm:  false}
    }
    onSubmit(evt){
        evt.preventDefault();
        evt.stopPropagation();
        let newValue = this.input.current.value;
        this.props.onChangeItem({...this.props.task, text:newValue});
        this.setState({isShowForm:false});
    }
    componentDidMount() {
        this.text.current.addEventListener('click', () => {
            this.setState({isShowForm:true})
        });
        this.input.current.addEventListener('blur', () => {
            this.setState({isShowForm:false})
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.isShowForm){
            this.input.current.focus();
        }
    }

    render() {
        let task = this.props.task;
        let style = {
            display: this.state.isShowForm  ? 'none' : 'block',
        };


        return (
            <li className={classNames('task-item', {'task-item_checked': task.isDone})}>
                <div className="task-item__check" onClick={() => this.props.onCheck(task.id)}/>
                <div className="task-item__text" >
                    <div ref={this.text} style={style}>{task.text}</div>
                    { this.getForm(task, this.state.isShowForm) }
                </div>
                <div className="task-item__delete" onClick={() => this.props.onDelete(task.id)}/>
            </li>);
    }

    getForm(task, isShow) {
        let style = {
            display: isShow ? 'block' : 'none',
        };
        return <form style={style} ref={this.form} action="#" onSubmit={(evt) => this.onSubmit(evt)}>
            <input className="todo__add-task-input" name='add-task' type={'text'} ref={this.input}
                   defaultValue={task.text}/>
            <input className="todo__add-task-button" name={'add-task-button'} type={'submit'}
                   value={'Ок'}/>
        </form>;
    }
}

ListItem.propTypes = {
    task: PropTypes.exact({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired,
    }),
    onChangeItem: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onCheck: PropTypes.func.isRequired,
};

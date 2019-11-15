import React from 'react';

import Checkbox from 'material-ui/lib/checkbox';
import ListItem from 'material-ui/lib/lists/list-item';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

import DeleteIcon from 'material-ui/lib/svg-icons/action/delete';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

import './Task.less';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
const ENTER_KEY = 13;
const ESC_KEY = 27;

const Task = React.createClass({
    getInitialState() {
        return {
            isEditing: false
        };
    },

    handleEdit(e) {
        this.setState({ isEditing: true }, this.focusInput);
    },
    handleDelete(e){
        this.deleteTask();
    },

    handleCancel() {
        this.cancelTask();
    },

    handleSave() {
        this.saveTask();
    },

    handleCheck() {
        this.props.onStatusChange({
            isCompleted: !this.props.isCompleted
        });
    },

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            this.saveTask();
        }

        if (e.keyCode === ESC_KEY) {
            this.cancelTask();
        }
    },

    focusInput() {
        this.input.focus();
    },

    saveTask() {
        this.props.onUpdate({ text: this.input.value, desc: this.inputDesc.value, date: this.inputDate });

        this.setState({ isEditing: false });
    },

    deleteTask(){
        this.props.onDelete();
    },

    cancelTask() {
        this.setState({ isEditing: false });
    },
    _handleChangeDate(event, date){
        this.inputDate = date;
    },

    render() {
        debugger;
        return (
            this.state.isEditing
            ?
                <div className='Task editing'>
                    <input
                        className='Task__input'
                        type='text'
                        defaultValue={this.props.text}
                        onKeyDown={this.handleKeyDown}
                        ref={c => this.input = c}
                    />
                    <input
                        className='Task__input'
                        type='text'
                        defaultValue={this.props.desc}
                        onKeyDown={this.handleKeyDown}
                        ref={c => this.inputDesc = c}
                    />
                    <DatePicker
                        hintText="Controlled Date Input"
                        defaultValue={this.props.date}
                        onChange={this._handleChangeDate}
                    />
                    <div className='Task__toolbar'>
                        <div>
                            <RaisedButton primary onClick={this.handleSave} label='Save' />
                            <FlatButton onClick={this.handleCancel} label='Cancel' />
                        </div>
                    </div>
                </div>
            :
                <div className='Task'>
                    <Checkbox
                        className='Task__checkbox'
                        checked={this.props.isCompleted}
                        onCheck={this.handleCheck}
                    />

                    <div className='Task__text' onClick={this.handleEdit}>
                        <div className='Task__title'>{this.props.text}</div>
                        <div className='Task__desc'>{this.props.desc || 'some desc'}</div>
                        <div className='Task__date'>{this.props.date.toString() || '12.12.12'}</div>
                    </div>


                    <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
                        <MenuItem onClick={this.handleEdit}>Edit</MenuItem>
                        <MenuItem onClick={this.handleDelete}>Delete</MenuItem>
                    </IconMenu>
                </div>
        );
    }
});

export default Task;

import React from 'react';

export default class AddTask extends React.Component
{
    render(){
        return (
            <div className='todo__add-task'>
                <label className="todo__add-task-label">Добавить задачу</label>
                <input className="todo__add-task-input" name='add-task'type={'text'}/>
            </div>
        )
    }
}
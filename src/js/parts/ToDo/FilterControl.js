import React from 'react';
import classNames from 'classnames';

export default class FilterControl extends React.Component{
    render(){
        return (
            <ul className="todo__filter-control">
                {
                    this.props.filters.map((v)=>{
                        return (<li key={v.name} className={classNames('todo__filter-item',{
                            'todo__filter-item_active': this.props.checked === v.name
                        })}>{v.name}</li>)
                    })
                }
            </ul>
        );
    }
}
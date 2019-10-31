import React from "react";

export default class Note extends React.Component {
    render() {
        let style = {backgroundColor: this.props.color};
        return (
            <div className='note' style={style}>
                <span className='delete-note' onClick={this.props.onDelete}> × </span>
                {this.props.children}
                {this.props.tags.map((value, index)=>{
                    return <span onClick={()=>this.props.handleClick(value)} key={index}>#{value}</span>;
                })}
            </div>
        );
    }
}

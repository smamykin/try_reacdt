import React from "react";

export default class TagSelector extends React.Component {
    constructor(props){
        super(props);
        this.input = React.createRef();
    }
    onsubmit(evt){
        evt.preventDefault();
        let tag = this.input.current.value;
        this.props.handleAddTag(tag);
        this.input.current.value = '';

        return false;
    }

    render(){
        return (
            <div>
                <form onSubmit={(evt)=>{return this.onsubmit(evt)}}>
                    <input type="text" ref={this.input}/>
                    <input type="submit" value="Добавить" />
                </form>
                <div className={'tag-list-editor'}>{
                    this.props.tags.map((x, i) => {return <div key={i} className={'tag-list-editor__element'}>#{x}</div>})
                }</div>
            </div>
        );
    }
}

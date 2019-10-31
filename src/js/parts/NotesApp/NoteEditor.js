import React from "react";
import ColorSelector from "./ColorSelector";
import TagSelector from "./TagSelector";

export default class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: '', color:'yellow', tags: []};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleColorSelect = this.handleColorSelect.bind(this);
    }

    handleTextChange(evt) {
        this.setState({text: evt.target.value})
    }

    handleNoteAdd() {
        let newNote = {
            text: this.state.text,
            color: this.state.color,
            id: Date.now(),
            tags:this.state.tags
        };
        this.props.onNoteAdd(newNote);

        this.setState({text: '', tags:[]});
    }

    handleColorSelect(color){
        this.setState({color})
    }
    handleAddTag(tag){
        this.setState({tags: [...this.state.tags, tag]})
    }

    render() {
        return (
            <div className='note-editor'>
                <textarea
                    placeholder={'Enter your note here...'}
                    rows={5}
                    className={'textarea'}
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <ColorSelector handleColorSelect={this.handleColorSelect} selected={this.state.color}/>
                <TagSelector tags={this.state.tags} handleAddTag={(tag)=>this.handleAddTag(tag)}/>
                <button className={'add-button'} onClick={this.handleNoteAdd}>Add</button>
            </div>
        );
    }
}

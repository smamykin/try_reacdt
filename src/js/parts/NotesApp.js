import React from 'react';
import classNames from "classnames";
import Masonry from "masonry-layout";

class Note extends React.Component {
    render() {
        let style = {backgroundColor: this.props.color};
        return (
            <div className='note' style={style}>
                <span className='delete-note' onClick={this.props.onDelete}> × </span>
                {this.props.children}
                {

                }
            </div>
        );
    }
}

class ColorSelector extends React.Component {
    render() {
        let options = [
            'blue',
            'red',
            'gray',
            'green',
            'yellow'
        ];
        return (
            <div className={'color-selector'}>
                {
                    options.map((color, index) => {
                        return <ColorOption
                            key={index}
                            handleSelect={()=>this.props.handleColorSelect(color)}
                            color={color}
                            selected={this.props.selected === color}/>
                    })
                }
            </div>
        );
    }
}

class ColorOption extends React.Component {
    render() {
        let elementName = 'color-selector__item';
        let optClass = classNames(
            elementName,
            elementName + '_' + this.props.color,
            {[elementName + '_selected']: this.props.selected}
        );

        return <div className={optClass} onClick={this.props.handleSelect}/>;
    }
}

class NoteEditor extends React.Component {
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

        this.setState({text: ''});
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
                <TagSelector handleAddTag={(tag)=>this.handleAddTag(tag)}/>
                <button className={'add-button'} onClick={this.handleNoteAdd}>Add</button>
            </div>
        );
    }
}

class TagSelector extends React.Component
{
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
            <form onSubmit={(evt)=>{return this.onsubmit(evt)}}>
                <input type="text" ref={this.input}/>
                <input type="submit" value="Добавить" />
            </form>
        );
    }
}

class NotesGrid extends React.Component {
    constructor(props) {
        super(props);
        this.grid = React.createRef();
    }

    componentDidMount() {
        let grid = this.grid.current;
        this.msnry = new Masonry(grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    render() {
        let onNoteDelete = this.props.onNoteDelete;
        return (
            <div className={'notes-grid'} ref={this.grid}>
                {
                    this.props.notes.map(function (note) {
                        return (
                            <Note
                                key={note.id}
                                onDelete={onNoteDelete.bind(null, note)}
                                color={note.color}
                                tags={note.tags}
                            >
                                {note.text}
                            </Note>
                        )
                    })
                }
            </div>
        );
    }
}

export default class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleNoteDelete = this.handleNoteDelete.bind(this);
    }

    componentDidMount() {
        let localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({notes: localNotes});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this._updateLocalStorage();
    }

    handleNoteDelete() {
        let noteId = note.id,
            newNotes = this.state.notes.filter(function (note) {
                return note.id !== noteId;
            });

        this.setState({notes: newNotes})
    }

    handleNoteAdd(newNote) {
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({notes: newNotes});
    }

    render() {
        return (
            <div className='notes-app'>
                <h2 className='app-header'>NotesApp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
            </div>
        );
    }

    _updateLocalStorage() {
        let notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
}

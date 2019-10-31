import React from 'react';
import NotesGrid from './NotesApp/NotesGrid'
import NoteEditor from './NotesApp/NoteEditor'

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

    handleNoteDelete(note) {
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

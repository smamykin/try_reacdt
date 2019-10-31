import React from "react";
import Masonry from "masonry-layout";
import Note from "./Note";

export default class NotesGrid extends React.Component {
    constructor(props) {
        super(props);
        this.grid = React.createRef();
        this.state = {notes: [], oldProps: {}}
    }
    static getDerivedStateFromProps(props, state){
        let notes = state.notes;

        if (props.notes !== state.oldProps.notes){
            notes = props.notes;
        }

        return {
            notes,
            oldProps:props
        }
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

    componentDidUpdate(prevProps,prevState) {
        if (this.state.notes.length !== prevState.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    tagSearch(x){
        this.setState({notes:this.state.notes.filter((note)=>{
            return note.tags.indexOf(x) >= 0
        })})
    }

    render() {
        let onNoteDelete = this.props.onNoteDelete;

        return (
            <div className={'notes-grid'} ref={this.grid}>
                {
                    this.state.notes.map((note) => {
                        return (
                            <Note
                                key={note.id}
                                onDelete={onNoteDelete.bind(null, note)}
                                color={note.color}
                                tags={note.tags}
                                handleClick={(tag)=> this.tagSearch(tag)}
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

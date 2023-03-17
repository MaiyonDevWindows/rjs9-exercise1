class Note {
    private title: string;
    private content: string;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
    addNote(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
}
class NoteList {
    private noteArray!: any[];
    constructor() {
        this.noteArray = [];
    }
    addNoteToList(note: Note) {
        this.noteArray.push(note);
    }
}
let noteList = new NoteList();
let note = new Note('title1', 'content2');
noteList.addNoteToList(note);
console.log(noteList);
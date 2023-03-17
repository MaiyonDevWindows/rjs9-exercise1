var Note = /** @class */ (function () {
    function Note(title, content) {
        this.title = title;
        this.content = content;
    }
    Note.prototype.addNote = function (title, content) {
        this.title = title;
        this.content = content;
    };
    return Note;
}());
var NoteList = /** @class */ (function () {
    function NoteList() {
        this.noteArray = [];
    }
    NoteList.prototype.addNoteToList = function (note) {
        this.noteArray.push(note);
    };
    return NoteList;
}());
var noteList = new NoteList();
var note = new Note('title1', 'content2');
noteList.addNoteToList(note);
console.log(noteList);

console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try
{
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
}
    catch(e){
       return []; 
    }
    
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};






////////////////////////////////////

// adding and saving notes

var addNotes = (title,body) => {
   var notes = fetchNotes();
   var note = {
        title: title,
        body: body
    };
    


var duplicateNotes = notes.filter((note) => note.title === title);

if(duplicateNotes.length === 0)
{
    notes.push(note); 
    saveNotes(notes);
    return note;
}
    
};
//////////////////////////////////
var getAll = () => {
    return fetchNotes();
};

var getNote = (title) =>
{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
    
    //console.log('getting the note',title);
};
var rmvNote = (title) =>
{   //fetch notes
    var notes = fetchNotes();
    //filter notes,remove the one with title of argument
    var filteredNotes = notes.filter((note) => note.title !== title);
    //save new notes array
    saveNotes(filteredNotes);
    //console.log('removing note',title);
    return notes.length !== filteredNotes.length;
};
var logNote = (note) => {
   //break on this line and use repl to output note
    debugger;
    console.log('title: ' + note.title);
   console.log('body: ' + note.body); 
};

module.exports = {
    addNotes: addNotes,
    getAll: getAll,
    getNote: getNote,
    rmvNote: rmvNote,
    logNote: logNote
};
    
    
console.log('Starting App.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

//lodash module
/*var filteredArray = _.uniq(['kartikey']);
console.log(filteredArray);

console.log(_.isString(true));
console.log(_.isString('kartikey'));

/////////////////////////////////
// requiring our module
var res = notes.addition(5,9);
console.log('result:',res);
var res = notes.addNote();
console.log(res);

///////////////////////////////////
// requiring os and fs
var user = os.userInfo();
fs.appendFile('greetings.txt','Hello  '+ user.username + ' you are ' + notes.age + ' years old.');*/


///////////////////////////////////
//getting input from a user

/*console.log(process.argv);

var command = process.argv[2];
console.log('Command:',command);

if(command === 'add'){
    console.log('adding new note');
}
else if(command === 'list'){
    console.log('listing all notes');
}
else if(command === 'read'){
    console.log('reading the note');
}
else if (command === 'remove'){
    console.log('removing the note');
}
else{
    console.log('command not found');
}*/

///////////////////////////////////
//using yargs for simplified input

const titleOption = {
    describe: 'Title Of Note',
    demand: true,
    alias: 't'
};

const bodyOption = {
    describe: 'Body of Note',
    demand: true,
    alias: 'b'
};


const argv= yargs
.command('add','Add a new Note',{
 title: titleOption ,
body: bodyOption
    
})
.command('remove','Remove existing Note',{
    title: titleOption
})
.command('list','Listing All Notes')
.command('read','Reading Specific Note',{
    title: titleOption
})
.help()
.argv;
var command = argv._[0];




if(command === 'add'){
var note = notes.addNotes(argv.title,argv.body);
    if(note){
        console.log('note added succesfully');
        notes.logNote(note);
    }
    else{
        console.log('title already taken');
    }
    //console.log('adding new note');
}
else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log('Printing ' + allNotes.length + ' note(s)');
    allNotes.forEach((note) => {notes.logNote(note);}); 
   
}
else if(command === 'read'){
    //console.log('reading the note');
    var  note = notes.getNote(argv.title);
    if(note){
        console.log('The Following note is:');
         notes.logNote();
    }
    else{
        console.log('title not found');
    }
}
else if (command === 'remove'){
   var noteRemoved = notes.rmvNote(argv.title);
   var message = noteRemoved ? "Note was Removed"  :  "Note doesnt exist" ;
    console.log(message);
    
    
}
else{
    console.log('command not found');
}






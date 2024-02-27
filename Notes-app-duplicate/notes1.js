const fs = require('fs')
const chalk = require('chalk')
console.log("starting notes1.js")

const loadNotes = function(){
    try{
        const notesDataBuffer = fs.readFileSync('notes.json')
        const notesData = notesDataBuffer.toString()
        return JSON.parse(notesData)

    }catch(e){
        return []
    }
}

function saveNotes(notes){
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}
function addNotes(title,body){
    const notes = loadNotes()

    const duplicateNotes=notes.filter(note=>note.title === title)
    console.log(duplicateNotes)
    if(duplicateNotes.length === 0){

        console.log(title,body)
        const note = {
            title:title,
            body:body
        }
    
        notes.push(note)
        saveNotes(notes)
        console.log(chalk.green.inverse("New Note added :)"))
        
    }else{
        console.log(chalk.red.inverse("Note already exist :("))
    }

    

    
}

function removeNotes(title){
    
    const notes = loadNotes()
    // console.log(title)
    console.log(notes)

    const checkNote = notes.filter(note=>note.title === title)

    if(checkNote.length > 0){
        const newNotes = notes.filter(note=>note.title != title)
        saveNotes(newNotes)
        console.log(newNotes)
        console.log(chalk.green.inverse("Note deleted successfully!!"))
    }else{
        console.log(chalk.red.inverse("Note title does not exist to delete!!"))
    }
    
    
}

function updateNotes(title,body){
    
}

function listNotes(){
    const notes = loadNotes()

    notes.forEach(note => {
        console.log(note)
    });
}

function readNotes(title){
    
    const notes = loadNotes()

    const findNote=notes.find((note)=> note.title === title)

    if(findNote){
        console.log(chalk.green.inverse(findNote.body))
    }else{
        console.log(chalk.red.inverse("Note not found"))
    }
}

module.exports = {
    addNotes,
    readNotes,
    removeNotes,
    updateNotes,
    listNotes
}
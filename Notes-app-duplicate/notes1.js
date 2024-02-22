const fs = require('fs')

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
    

    console.log(title,body)
    const note = {
        title:title,
        body:body
    }
    const notes = loadNotes()
    notes.push(note)
    saveNotes(notes)

    
}

function removeNotes(title,body){
    

    console.log(title,body)
    const note = {
        title:title,
        body:body
    }
    console.log(note)

    fs.writeFileSync('notes.json',JSON.stringify(note))
}

function updateNotes(title,body){
    

    console.log(title,body)
    const note = {
        title:title,
        body:body
    }
    console.log(note)

    fs.writeFileSync('notes.json',JSON.stringify(note))
}

function listNotes(title,body){
    

    console.log(title,body)
    const note = {
        title:title,
        body:body
    }
    console.log(note)

    fs.writeFileSync('notes.json',JSON.stringify(note))
}

function readNotes(title,body){
    

    console.log(title,body)
    const note = {
        title:title,
        body:body
    }
    console.log(note)

    fs.writeFileSync('notes.json',JSON.stringify(note))
}

module.exports = {
    addNotes,
    readNotes,
    removeNotes,
    updateNotes,
    listNotes
}
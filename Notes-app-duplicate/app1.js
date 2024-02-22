console.log("notes")

const yargs = require('yargs')

const {addNotes,readNotes,removeNotes,updateNotes, listNotes} = require('./notes1.js')


// console.log(process.argv) //helps with getting the values from cli as arguments
// const command = process.argv[2]
// if (command == "add")
//     console.log("adding the note")
// else if (command == "remove")
//     console.log("removing note!!")

//yargs for cli

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title:{
            describe:"Note Title",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:"Note Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "Removing a note",
    builder: {

    },
    handler: function(){
        console.log("removing a note using yargs")
    }
})

yargs.command({
    command: "read",
    describe: "reading a note",
    builder: {

    },
    handler: function(){
        console.log("reading a note using yargs")
    }
})

yargs.command({
    command: "update",
    describe: "updating a note",
    builder: {

    },
    handler: function(){
        console.log("updating a note using yargs")
    }
})

yargs.command({
    command: "list",
    describe: "listing all notes",
    builder: {

    },
    handler: function(){
        console.log("Listing all notes using yargs")
    }
})
yargs.parse()

// console.log(yargs.argv)
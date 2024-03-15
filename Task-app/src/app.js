const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'

const databaseName = 'tasks-manager'

MongoClient.connect(connectionURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error,client)=>{
    if(error){
        return console.log("Unable to connect to database")
    }

    console.log("Mongodb connected at port 27017")
})
f
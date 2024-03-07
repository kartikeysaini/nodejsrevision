const yargs = require('yargs')
const forecast = require('./utils/forecast')
const lonLatData = require('./utils/geocode')
// let addr = "B 39 Pandav Nagar New Delhi 110092"


yargs.command({
    command:"address",
    describe:"Show weather for this address",
    handler(argv){
        addr = argv["_"][1]

        console.log(addr)
       
        lonLatData(addr,(error,{latitude,longitude})=>{
            // console.log(data)
            if (error){
                return console.log(error)
            }
            console.log(latitude)
            console.log(longitude)
        
            forecast(latitude,longitude,({phrase,temperature,feelLikeTemperature})=>{
                // console.log(data)
                console.log(phrase)
                console.log(temperature)
                console.log(feelLikeTemperature)
            
            })
        })
    }
})







yargs.parse()

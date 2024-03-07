const express = require('express')
const forecast = require('../utils/forecast')
const lonLatData  = require('../utils/geocode')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send(`<h1>Weather App</h1>`)
})

app.get('/getWeather',(req,res)=>{
    if (!req.query.address){
        return res.send({
            error: "please provide address for searching weather"
        })
    }
    let addr = req.query.address
    console.log("Address: ", addr)

    lonLatData(addr,(error,{latitude,longitude} = {})=>{
        // console.log(data)
        if (error){
            return res.send(error)
        }
        console.log(latitude)
        console.log(longitude)
    
        forecast(latitude,longitude,({phrase,temperature,feelLikeTemperature} = {})=>{
            // console.log(data)
            const weatherData = {
                phrase,
                temperature,
                feelLikeTemperature
            }

            res.send(weatherData)
        
        })
    })

    
})


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
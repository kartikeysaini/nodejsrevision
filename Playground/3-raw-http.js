const { error } = require('console')
const https = require('https')
let lat = 28.6156
let long = 77.28555

const request = https.request(`https://atlas.microsoft.com/weather/currentConditions/json?api-version=1.0&query=${lat},${long}&subscription-key=CRaaEdUmmDsVlu3IumT6lKCSW5KQcoomSWIqDsLqfMc`,(response)=>{
    let data = ''

    response.on('data',(chunk)=>{
        data = data + chunk.toString()
        
    })

    response.on('end', () =>{
        let body = JSON.parse(data)
        console.log(body)
    })
})

request.end()
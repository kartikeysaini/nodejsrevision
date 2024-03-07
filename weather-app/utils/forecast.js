const request = require('postman-request')



const forecast = (lat,long,callback) =>{
    let WeatherUrl = `https://atlas.microsoft.com/weather/currentConditions/json?api-version=1.0&query=${lat},${long}&subscription-key=CRaaEdUmmDsVlu3IumT6lKCSW5KQcoomSWIqDsLqfMc`

    request(
        {
            url:WeatherUrl,
            json: true
        },
    (error,{statusCode,body})=>{
        // console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', statusCode); // Print the response status code if a response was received
        
        const data = body
        
        callback({
            phrase: data["results"][0].phrase,
            temperature: data["results"][0].temperature.value,
            feelLikeTemperature: data["results"][0].realFeelTemperature.value
        })
    
    })
}

module.exports = forecast
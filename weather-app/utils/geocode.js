const request = require('postman-request')

const lonLatData = (addr,callback) =>{
    let url = `https://atlas.microsoft.com/search/address/json?&subscription-key=CRaaEdUmmDsVlu3IumT6lKCSW5KQcoomSWIqDsLqfMc&api-version=1.0&language=en-US&query=${addr}`

    request(
        {
            url,
            json: true
        },
    (error,{body,statusCode})=>{

        if(error){
            callback("Unable to connect to location services",undefined)
        }else if(body["results"].length === 0){
            callback("Unable to find location, try another locations",undefined)
        }else{
             // console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', statusCode); // Print the response status code if a response was received
        
        const data = body
        // console.log(data)
        // console.log(data["results"][0].position.lat)
        

        callback(undefined,{
            latitude:data["results"][0].position.lat,
            longitude:data["results"][0].position.lon
        })
       
    
        }
       
    })
}

module.exports = lonLatData
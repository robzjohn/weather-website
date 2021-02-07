const request = require('request')

const forecast = (latitude, longitude, callback) => {
    

    const url = 'http://api.weatherstack.com/current?access_key=cc5e73499571653a5e248d59945d0b18&query=' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true}, (error, { body }) => {


        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
            
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                wind_speed: body.current.wind_speed,
                wind_dir: body.current.wind_dir,
                precip: body.current.precip,
                humidity: body.current.humidity,
                cloudcover: body.current.cloudcover,
                uv_index: body.current.uv_index

                })    
        }
    })
}

module.exports = forecast


const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=dc02a5260ec08d0906cb1562f4068dfd&query=${latitude},${longitude}&units=f`

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (body.error) {
            callback(`Couldn't find location`, undefined)
        } else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                curTemp: body.current.temperature,
                feelsLike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast
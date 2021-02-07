const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.innerHTML = ''

    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error

        } else {
            let tableHTML = '<tr><th>Temperature</th><th>Feels Like</th><th>Wind Speed</th><th>Wind Direction</th><th>Precipitation</th><th>Humidity</th><th>Cloud Cover</th><th>UV Index</th></tr><tr><td>' 
                            + data.forecast.temperature + '</td><td>' + data.forecast.feelslike + '</td><td>' + data.forecast.wind_speed + 'mph</td><td>' + data.forecast.wind_dir + '</td><td>' + data.forecast.precip + '%</td><td>' + data.forecast.humidity + '%</td><td>' + data.forecast.cloudcover + '%</td><td>' + data.forecast.uv_index + '</td></tr>'
            messageOne.textContent = data.location
            messageTwo.innerHTML = tableHTML
            }
        })
    })
})

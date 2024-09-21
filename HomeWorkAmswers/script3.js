const apiKey = "46689bfcece6f63d69a38a9d5ef28fe9"

document.querySelector("button").addEventListener("click", function () {
    const city = document.querySelector("input").value
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Місто не знайдено або проблема з сервером");                
            }
            return response.json()
        })
        .then(data => {
            const weatherInfo = `
                <h2>Погода у місті: ${data.name}</h2>
                <p>Температура: ${data.main.temp}</p>
                <p>Опис: ${data.weather[0].description}</p>
            `
            document.querySelector("div").innerHTML = weatherInfo
        })
        .catch(error => {
            document.querySelector("div").innerHTML = `<p>${error.message}</p>`          
        })
})
const lat = 43.25;
const lon = 76.95;

const apiKey = '30acf5f35276c3c031a529a1f7d3cf20';
const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apiKey}&lang=ru&units=metric`;

function getWeather() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка при запросе данных: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayCurrentWeather(data);
            displayWeeklyWeather(data);
        })
        .catch(error => {
            console.error('Ошибка:', error);
            setInterval(getWeather, 600000);
        });
}

function displayCurrentWeather(data) {
    const currentWeather = data.current;

    document.getElementById('temp').textContent = `${Math.round(currentWeather.temp)}°C`;
    document.getElementById('humi').textContent = `${currentWeather.humidity} %`;
    document.getElementById('wind').textContent = `${Math.round(currentWeather.wind_speed)} м/с`;
    document.getElementById('uvi').textContent = Math.round(currentWeather.uvi);
}

function displayWeeklyWeather(data) {
    const weeklyWeather = data.daily;
    
}

getWeather();

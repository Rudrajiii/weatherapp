const options = {
    method: 'GET',
    headers: {
        "x-rapidapi-key": "ecf04b2b85mshcca5fd74191f226p180673jsna99888466523",
        "x-rapidapi-host": "open-weather13.p.rapidapi.com"
    }
};

const fetchWeather = async (city, index) => {
    try {
        const response = await fetch(`https://open-weather13.p.rapidapi.com/city/${city}/EN`, options);
        const data = await response.json();
        console.log(data);

        document.getElementById(`cityName_${index}`).innerText = city;
        document.getElementById(`cloud_pct_${index}`).innerText = data.clouds.all;
        document.getElementById(`temp_${index}`).innerText = data.main.temp;
        document.getElementById(`feels_like_${index}`).innerText = data.main.feels_like;
        document.getElementById(`humidity_${index}`).innerText = data.main.humidity;
        document.getElementById(`max_temp_${index}`).innerText = data.main.temp_max;
        document.getElementById(`min_temp_${index}`).innerText = data.main.temp_min;
        document.getElementById(`wind_speed_${index}`).innerText = data.wind.speed;
        document.getElementById(`wind_degrees_${index}`).innerText = data.wind.deg;
        document.getElementById(`sunrise_${index}`).innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById(`sunset_${index}`).innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};

document.querySelectorAll(".submit-btn").forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const city = document.getElementById(`city_${index}`).value.trim();
        if (city) fetchWeather(city, index);
    });
});

fetchWeather('Delhi', 0);

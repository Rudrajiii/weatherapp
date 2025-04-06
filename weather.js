const btn = document.getElementById('btn');
      const cityInput = document.getElementById('city');
      
      // Allow search on Enter key press
      cityInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          getWeather();
        }
      });
      
      btn.addEventListener('click', getWeather);
      
      function getWeather() {
        const city = cityInput.value.trim();
        if (!city) return;
        
        const result = document.getElementById('result');
        result.innerHTML = '<div style="text-align: center; padding: 20px;"><i class="fas fa-spinner fa-spin" style="font-size: 30px;"></i><p style="margin-top: 10px;">Fetching weather data...</p></div>';
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=171e009cae7e126fcbcec49c3a5cee6a`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error:', error);
                result.innerHTML = '<div style="text-align: center; padding: 20px; color: #ff6b6b;"><i class="fas fa-exclamation-circle" style="font-size: 30px;"></i><p style="margin-top: 10px;">Something went wrong. Please try again.</p></div>';
            });
      }
      
      function displayWeather(data) {
          const result = document.getElementById('result');
          if (data.cod === '404') {
              result.innerHTML = '<div style="text-align: center; padding: 20px; color: #ff6b6b;"><i class="fas fa-map-marker-alt" style="font-size: 30px;"></i><p style="margin-top: 10px;">City not found. Please check the spelling and try again.</p></div>';
          } else {
              // Get weather icon
              const iconCode = data.weather[0].icon;
              const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
              
              result.innerHTML = `
                  <h2 style="font-family: 'Poppins', sans-serif; display: flex; align-items: center; justify-content: center;">
                      <img src="${iconUrl}" alt="${data.weather[0].description}" style="width: 50px; height: 50px;">
                      ${data.name}, ${data.sys.country}
                  </h2>
                  <div class="weather-info">
                      <div class="weather-row">
                          <div class="weather-icon"><i class="fas fa-temperature-high"></i></div>
                          <div>Temperature: ${Math.round(data.main.temp -273.15)}°C</div>
                      </div>
                      <div class="weather-row">
                          <div class="weather-icon"><i class="fas fa-thermometer"></i></div>
                          <div>Feels like: ${Math.round(data.main.feels_like -273.15)}°C</div>
                      </div>
                      <div class="weather-row">
                          <div class="weather-icon"><i class="fas fa-cloud"></i></div>
                          <div>Weather: ${data.weather[0].main} (${data.weather[0].description})</div>
                      </div>
                      <div class="weather-row">
                          <div class="weather-icon"><i class="fas fa-tint"></i></div>
                          <div>Humidity: ${data.main.humidity}%</div>
                      </div>
                      <div class="weather-row">
                          <div class="weather-icon"><i class="fas fa-compress-alt"></i></div>
                          <div>Pressure: ${data.main.pressure} hPa</div>
                      </div>
                      <div class="weather-row">
                          <div class="weather-icon"><i class="fas fa-wind"></i></div>
                          <div>Wind: ${data.wind.speed} m/s, ${getWindDirection(data.wind.deg)}</div>
                      </div>
                  </div>`;
          }
      }
      
      function getWindDirection(degrees) {
          const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
          return directions[Math.round(degrees / 45) % 8];
      }

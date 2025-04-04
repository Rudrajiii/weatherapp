const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata';
const options = {
	method: 'GET',
	headers = {
	"x-rapidapi-key": "5cfe066885msh5fcfb6634c92ae1p187cdbjsn4db97e8524e9",
	"x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com"
}
};
const cityName_0 = document.getElementById('cityName_0');
const summit = document.getElementById('summit');
summit.addEventListener('click',(e)=>{
	another_data_0(cityName_0.value)
	e.preventDefault();
	cityName_0.value = '';
})
const cityName_1 = document.getElementById('cityName_1');
const summit_1 = document.getElementById('summit_1');
summit_1.addEventListener('click',(e)=>{
	another_data_1(cityName_1.value)
	e.preventDefault();
	cityName_1.value = '';
})
const cityName_2 = document.getElementById('cityName_2');
const summit_2 = document.getElementById('summit_2');
summit_2.addEventListener('click',(e)=>{
	another_data_2(cityName_2.value)
	e.preventDefault();
	cityName_2.value = '';
})
const another_data_0 = (cit) => {
	cit.innerHTML = cit;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cit, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
		c1.innerHTML = cit;
		cloud_pct.innerHTML = response.cloud_pct;
		tempp.innerHTML = response.temp;
		feels_likee.innerHTML = response.feels_like;
		hum.innerHTML = response.humidity;
		mxt.innerHTML = response.max_temp;
		min.innerHTML = response.min_temp;
		ws.innerHTML = response.wind_speed;
		wd.innerHTML = response.wind_degrees;
		sr.innerHTML = response.sunrise;
		st.innerHTML = response.sunset;
	})
	.catch(err => console.error(err));
}
const another_data_1 = (ci) => {
	ci.innerHTML = ci;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ci, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
		c2.innerHTML = ci;
		cloud_pct_1.innerHTML = response.cloud_pct;
		tempp_1.innerHTML = response.temp;
		feels_likee_1.innerHTML = response.feels_like;
		hum_1.innerHTML = response.humidity;
		mxt_1.innerHTML = response.max_temp;
		min_1.innerHTML = response.min_temp;
		ws_1.innerHTML = response.wind_speed;
		wd_1.innerHTML = response.wind_degrees;
		sr_1.innerHTML = response.sunrise;
		st_1.innerHTML = response.sunset;
	})
	.catch(err => console.error(err));
}
const another_data_2 = (c) => {
	c.innerHTML = c;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+c, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
		c3.innerHTML = c;
		cloud_pct_2.innerHTML = response.cloud_pct;
		tempp_2.innerHTML = response.temp;
		feels_likee_2.innerHTML = response.feels_like;
		hum_2.innerHTML = response.humidity;
		mxt_2.innerHTML = response.max_temp;
		min_2.innerHTML = response.min_temp;
		ws_2.innerHTML = response.wind_speed;
		wd_2.innerHTML = response.wind_degrees;
		sr_2.innerHTML = response.sunrise;
		st_2.innerHTML = response.sunset;
	})
	.catch(err => console.error(err));
}
const getWeatherData = (city) => {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
		cloud_pct.innerHTML = response.cloud_pct;
		temp.innerHTML = response.temp;
		feels_like.innerHTML = response.feels_like;
		temp2.innerHTML = response.temp;
		humidity.innerHTML = response.humidity;
		humidity2.innerHTML = response.humidity;
		min_temp.innerHTML = response.min_temp;
		max_temp.innerHTML = response.max_temp;
		wind_speed.innerHTML = response.wind_speed;
		wind_speed2.innerHTML = response.wind_speed;
		wind_degrees.innerHTML = response.wind_degrees;
		sunrise.innerHTML = response.sunrise;
		sunset.innerHTML = response.sunset;
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeatherData(city.value);

})

getWeatherData('Delhi')
// console.log(catch_data);



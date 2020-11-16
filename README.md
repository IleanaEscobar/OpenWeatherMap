# OpenWeatherMap API wrapper for nodeJS

## About
A Node.js module for integrating with the OpenWeatherMap API. You must acquire an API key to use it.
## Installation
This project is hosted on npm. To install, use the command:
`npm i openweathermapwrapper`

## Usage
Create a client and then call one of the exposed methods. 
```
const OpenWeather = require('openweathermapwrapper')
const report = new OpenWeather('API key') //Unique client code used for identification and authorization purposes. Contact OpenWeather to receive an API key.
  
report
		.location('London')						
                .details(true)	
                .imperial(true)
                .details(true) // Boolean value (true or false) that specifies whether or not to include a truncated version of the forecasts object or the full object (details = true)
                .language("ru")
				.get()
				.then(res => {
					console.log(res)
				})
				.catch(err => {
					console.log(err)
				})
```
Example of expected output from previous call:
```
{
  coord: { lon: -0.13, lat: 51.51 },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'переменная облачность',
      icon: '03n'
    }
  ],
  base: 'stations',
  main: {
    temp: 48.29,
    feels_like: 40.19,
    temp_min: 46.99,
    temp_max: 48.99,
    pressure: 1004,
    humidity: 81
  },
  visibility: 10000,
  wind: { speed: 11.41, deg: 240 },
  clouds: { all: 40 },
  dt: 1605494551,
  sys: {
    type: 1,
    id: 1414,
    country: 'GB',
    sunrise: 1605511258,
    sunset: 1605543000
  },
  timezone: 0,
  id: 2643743,
  name: 'Лондон',
  cod: 200
}
```

## Contributions

Contributions welcomed and highly encouraged! To contribute, open an issue or a pull request.

## Copyright

Copyright (c) 2020 Isabel Escobar. See LICENSE for further details.

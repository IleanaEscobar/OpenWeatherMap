
'use strict';
const req = require('request');
const moment = require('moment');
const queryString = require('query-string');

class OpenWeather {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.loc = '';
        this.query = {}
        this.exclude = "&exclude=";
        this.units = "&units=";
        this.lang = "&lang="
    }

    location(city) {
        // Used to search for a specific location.

        !city ? null : this.loc = city;
        return this;
    }

    time(val) {
        // Unique ID that can be used to search for a specific location.

        !val ? this.time = 'hourly/1hour' : this.time = val;
        return this;
    }

    language(lan) {
        // String indicating the language in which to return the resource.
        // Default value set to en-us.

        !lan ? null : this.lang = this.lang + lan;
        return this;
    }

    excludeMin(bool) {
        !bool ? null : this.exclude = this.exclude + "minutely,";
        return this;
    }

    excludeHour(bool) {
        !bool ? null : this.exclude = this.exclude + "hourly,";
        return this;
    }

    excludeDay(bool) {
        !bool ? null : this.exclude = this.exclude + "daily,";
        return this;
    }

    metric(bool) {
        !bool ? null : this.units = this.units + "metric";
        return this;
    }

    imperial(bool) {
        !bool ? null : this.units = this.units + "imperial";
        return this;
    }


    details(bool) {
        // Boolean value (true or false) specifies whether or not to include the full object.
        //Default value set to false.

        !bool ? null : this.query.details = bool;
        return this;
    }

    generateReqUrl() {
            this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.loc}&appid=${this.apiKey}${this.units}${this.lang}`;
            this.query ? this.url += `&${queryString.stringify(this.query)}` : this.url;
        
    }

    get() {
        return new Promise((resolve, reject) => {
            this.generateReqUrl();
            req({ url: this.url, json: true }, (err, res, body) => {
                err ? reject(`Forecast cannot be retrieved. ERROR: ${err}`) : null;
                res.statusCode !== 200 ? reject(`Forecast cannot be retrieved. Response: ${res.statusCode} ${res.statusMessage}`) : null;
                resolve(body)
            })
        })
    }
}
module.exports = OpenWeather

const forecast = new OpenWeather('21b4c98c81ab5911942bb0d6fd5ee4c7') //Unique client code used for identification and authorization purposes. Contact OpenWeather to receive an API key.
  
forecast
				.location('London')						
                .details(true)	
                .excludeDay(true)
                .imperial(true)
                .details(true)
                .language("ru")
				// Boolean value (true or false) that specifies whether or not to include a truncated version of the forecasts object or the full object (details = true)
				.get()
				.then(res => {
					console.log(res)
				})
				.catch(err => {
					console.log(err)
				})
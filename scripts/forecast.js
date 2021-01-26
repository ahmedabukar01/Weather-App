class foreCast{
    constructor(){
        this.key = 'nysrG3uBbXl6PSEXfjhB1DLEGzjrliBo';
        this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    }
    async gettingthing(city){
        const cityDet = await this.getCity(city);
        const weatherDet = await this.getWeather(cityDet.Key);
    
        return {
            cityDet,
            weatherDet
        }
    }

    async getCity(){
        const query = `?apikey=${key}&q=${city}`;
    
        const response = await fetch(this.cityURL + query);
        const data = await response.json();
    
        return data[0];
    }

    async getWeather(){
        const query = `${id}?apikey=${key}`;
    
        const response = await fetch(this.weatherURL + query);
        const data = await response.json();
    
        return data[0];
    }

}


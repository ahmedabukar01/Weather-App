const form = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon');

const updateUi =(data) =>{
    // normal way.
    /*
    const cityDet = data.cityDet;
    const weatherDet = data.weatherDet;
    */

    // destucturing way,
    
   const {cityDet, weatherDet} = data;

    details.innerHTML = `
    <div class="detials">
    <h5>${cityDet.EnglishName}</h5>
    <div class="w-status">
        ${weatherDet.WeatherText}
    </div>
    <div class="temp-deg">
        <span>Temp ${weatherDet.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
</div>
    `;

    // image day or night
    const iconimg = `img/icons/${weatherDet.WeatherIcon}.svg`;
    icon.setAttribute('src', iconimg);
    
    let imgsrc = null;
    if(weatherDet.IsDayTime){
        imgsrc = 'img/day.svg';
    } else{
        imgsrc = 'img/night.svg';
    }
    time.setAttribute('src', imgsrc);
    
    // if the d-none is present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}
let gettingThings = async (city) =>{
    const cityDet = await getCity(city);
    const weatherDet = await getWeather(cityDet.Key);

    return {
        cityDet,
        weatherDet
    }
}
form.addEventListener('submit', e=>{
    e.preventDefault();
    const city = form.city.value.trim();
    form.reset();
    
    // getting data
    gettingThings(city)
    .then(data => updateUi(data))
    .catch(err => console.log(err));

});
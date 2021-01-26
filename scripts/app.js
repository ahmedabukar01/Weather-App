const form = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon');
const forecast = new Forecast();

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

    let imgsrc = weatherDet.IsDayTime? 'img/day.svg' : 'img/night.svg';
    /*
    if(weatherDet.IsDayTime){
        imgsrc = 'img/day.svg';
    } else{
        imgsrc = 'img/night.svg';
    }
    */

    time.setAttribute('src', imgsrc);
    
    // if the d-none is present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}

form.addEventListener('submit', e=>{
    e.preventDefault();
    const city = form.city.value.trim();
    form.reset();
    
    localStorage.city = city;
    // getting data
    forecast.gettingThings(city)
    .then(data => updateUi(data))
    .catch(err => console.log(err));

});
if(localStorage.city){
    forecast.gettingThings(localStorage.city)
    .then(data=>updateUi(data))
    .catch(err=>console.log(err));
}
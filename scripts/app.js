const form = document.querySelector('form');

let updateUi = async (city) =>{

    console.log(city);
}
form.addEventListener('submit', e=>{
    e.preventDefault();
    const city = form.city.value.trim();
    form.reset();
    
    updateUi(city);

});
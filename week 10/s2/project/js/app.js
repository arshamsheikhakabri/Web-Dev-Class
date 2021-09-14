const pounds = document.getElementById('weight')
const grams = document.getElementById('grams')
const kilograms = document.getElementById('kilograms')
const ounces = document.getElementById('ounces')
pounds.addEventListener('input', function(){
    const rs= parseFloat(pounds.value)
    const rz = (rs/2.205)
    const rt = (rs*454)
    const rh = (rs*16)
    grams.innerHTML = 'grams:' + rz 
    kilograms.innerHTML = 'kilograms:' + rt 
    ounces.innerHTML = 'ounces:' + rh 

})
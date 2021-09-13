const celsiusinput  = document.getElementById('celsius')
const fahrenheitinput  = document.getElementById('fahrenheit')
const kelvininput  = document.getElementById('kelvin')
celsiusinput.addEventListener('input', function(){
    const ctemp = parseFloat(celsiusinput.value)
    const ftemp = (ctemp*(5/9)) + 32
    const ktemp = ctemp + 273
    fahrenheitinput.value = ftemp
    kelvininput.value = ktemp
}
)
fahrenheitinput.addEventListener('input', function(){
    const rtemp = parseFloat(fahrenheitinput.value)
    const xtemp = ((rtemp - 32)* 5/9)
    const jjtemp = ((rtemp - 32)* 5/9+273)
    celsiusinput.value = xtemp
    kelvininput.value = jjtemp


}
)
kelvininput.addEventListener('input', function(){
    const ttemp = parseFloat(kelvininput.value)
    const htemp = (ttemp - 273.15)
    const kjtemp = ((ttemp - 273.15)* 9/5+32)
    celsiusinput.value = htemp
    fahrenheitinput.value = kjtemp
    

}
)
var i =parseInt(window.prompt('how many games do you wanna play ?'))
var i = how
console.log(i)
while(i>1){
    function game(){
        var items = ['r','s','p'];

        var human = prompt('select between r p or s');

        var pc = items[Math.floor(Math.random() * 3)];

        console.log('human :',human );

        console.log('pc :',pc)

    if((human == 'r' && pc=='s')||(human=='p'&&pc=='r')||(human=='s' &&pc== 'p')){
        alert('human win!')
    }else if((pc == 'r' && human=='s')||(pc=='p'&&human=='r')||(pc=='s' &&human== 'p')){
        alert('pc wins')
    }
    else if(human==pc){
        alert('draw')
    }
    else{
        alert('wrong input')
    }
    i = i--;
}
}


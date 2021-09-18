var reset = document.getElementById('reset')
var draw =  document.getElementById('draw')
var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var score = document.getElementById('score')
var pc = ['r','p','s']
var pcg = 0
var human = 0 
rock.addEventListener("click" ,function(){
    var pcd = Math.floor(Math.random()*4)
    if (pcd == 2){
        pcg++;
        score.innerHTML = human + ":" + pcg 
    }
    else if(pcd == 3){
        human++
        score.innerHTML = human + ":" + pcg 
}
else if(pcd == 1){
    score.innerHTML = "Draw!";
    setTimeout(function(){ score.innerHTML = human + ':' + pcg }, 1100);
}    
})
paper.addEventListener("click" ,function(){
    var pcd = Math.floor(Math.random()*4)
    if (pcd == 3){
        pcg++;
        score.innerHTML = human + ":" + pcg 
}
    else if(pcd == 1){
        human++
        score.innerHTML = human + ":" + pcg 

}
else if(pcd == 2){
    score.innerHTML = "Draw!";
    setTimeout(function(){ score.innerHTML = human + ':' + pcg }, 1100);
}      
})
scissors.addEventListener("click" ,function(){
    var pcd = Math.floor(Math.random()*4)
    if (pcd == 1){
        pcg++;
        score.innerHTML = human + ":" + pcg 

    }
    else if(pcd == 2){
        human++
        score.innerHTML = human + ":" + pcg 

}
else if(pcd == 3){
    score.innerHTML = "Draw!";
    setTimeout(function(){ score.innerHTML = human + ":" + pcg }, 1100);
}      
})
reset.addEventListener("click",function(){
    pcg = 0
    human = 0
    score.innerHTML = '0'+ ":" + '0' 

})

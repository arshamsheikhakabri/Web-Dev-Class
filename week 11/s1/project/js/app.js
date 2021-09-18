var reset = document.getElementById('reset')
var draw =  document.getElementById('draw')
var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var score = document.getElementById('score')
var hc = document.getElementById('hc')
var bc = document.getElementById('bc')
var pc = ['r','p','s']
var pcg = 0
var human = 0 
rock.addEventListener("click" ,function(){
    hc.innerHTML = 'Human : Rock'
    var pcd = Math.floor(Math.random()*4)
    if (pcd == 2){
        pcg++;
        score.innerHTML = human + ":" + pcg
        bc.innerHTML = 'Bot : Paper'   
    }
    else if(pcd == 3){
        human++
        score.innerHTML = human + ":" + pcg
        bc.innerHTML = 'Bot : Scissors'    
}
else if(pcd == 1){
    score.innerHTML = "Draw!";
    setTimeout(function(){ score.innerHTML = human + ':' + pcg }, 1100);
    bc.innerHTML = 'Bot : Rock'   
}
    
})
paper.addEventListener("click" ,function(){
    hc.innerHTML = 'Human : Paper'
    var pcd = Math.floor(Math.random()*4)
    if (pcd == 3){
        pcg++;
        score.innerHTML = human + ":" + pcg
        bc.innerHTML = 'Bot : Scissors'  
}
    else if(pcd == 1){
        human++
        score.innerHTML = human + ":" + pcg
        bc.innerHTML = 'Bot : Rock'  

}
else if(pcd == 2){
    score.innerHTML = "Draw!";
    setTimeout(function(){ score.innerHTML = human + ':' + pcg }, 1100);
    bc.innerHTML = 'Bot : Paper' 
}      
})
scissors.addEventListener("click" ,function(){
    hc.innerHTML = 'Human : Scissors'
    var pcd = Math.floor(Math.random()*4)
    if (pcd == 1){
        pcg++;
        score.innerHTML = human + ":" + pcg 
        bc.innerHTML = 'Bot : Rock'  

    }
    else if(pcd == 2){
        human++
        score.innerHTML = human + ":" + pcg 
        bc.innerHTML = 'Bot : Paper'  

}
else if(pcd == 3){
    score.innerHTML = "Draw!";
    setTimeout(function(){ score.innerHTML = human + ":" + pcg }, 1100);
    bc.innerHTML = 'Bot : Scissors'  
}      
})
reset.addEventListener("click",function(){
    pcg = 0
    human = 0
    score.innerHTML = '0'+ ":" + '0'
    hc.innerHTML = 'Human :'
    bc.innerHTML = 'Bot :' 

})

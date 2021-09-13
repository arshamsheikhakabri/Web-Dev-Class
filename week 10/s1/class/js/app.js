const image = document.getElementById('slide')
const pre = document.getElementById('pre')
const next = document.getElementById('next')
let imagenum = 3
pre.addEventListener('click',function(){
    if(imagenum==0){
        imagenum = 3
        image.src = 'img/' + imagenum + '.jpg'
    }else{
        image.src = 'img/' + imagenum + '.jpg'
        imagenum--;
    }
    

})
next.addEventListener('click',function(){
    if(imagenum==4){
        imagenum = 1
        image.src = 'img/' + imagenum + '.jpg'   
}else{
    image.src = 'img/' + imagenum + '.jpg'
        imagenum++;
}}
)

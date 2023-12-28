let btn_n = document.querySelector(".btn-next");
let btn_b = document.querySelector(".btn-back");
let photo = document.querySelector("img");
let text  = document.querySelector("h1");
let i = 0;

let arts =  ["./photos/Abdo_G27.jpg","./photos/heros.png","./photos/moon.png","./photos/red rose.png"];
let names = ["Abdo_G27","heros","moon","red rose"];

btn_n.onclick = function(){

    photo.src = arts[i];
    text.innerHTML=names[i];

    if(i<arts.length-1){
        i++
    }else{
        i=0;
    }

}


btn_b.onclick = function(){
    
    photo.src = arts[i];
    text.innerHTML=names[i];

    if(i==0){
        i=arts.length-1 ;
    }else{
        i--;
    }

}
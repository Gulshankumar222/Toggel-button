let body = document.querySelector("body");
let btn = document.querySelector(".btn");
let positon = "left";
let bd = document.querySelector(".bd");


btn.addEventListener("click",function(){
if(positon =="left"){
    positon ="right";
    bd.style.borderColor="white";
    btn.style.backgroundColor="white";
    body.style.backgroundColor="black";
    btn.style.left="calc(100% - 85px)";
}else if(positon == "right"){
    positon = "left"
    body.style.backgroundColor="white";
    btn.style.left="6px";
    bd.style.borderColor="black";
    btn.style.backgroundColor="black";
}
});

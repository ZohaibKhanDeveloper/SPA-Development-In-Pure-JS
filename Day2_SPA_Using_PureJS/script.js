import { Box1 } from "./components/Box1.js";
let button = document.getElementById("loading-box-btn");
let component_loader = document.getElementById("load-box-here");
button.addEventListener("click",function(){
    component_loader.innerHTML = null;
    component_loader.append(Box1());
});
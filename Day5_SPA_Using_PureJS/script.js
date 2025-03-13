import { Form } from "./components/form.js";
let loaderBtn = document.getElementById("form-loader-btn"),
componentLoader = document.getElementById("component-loader");
loaderBtn.addEventListener("click",function(){
    componentLoader.innerHTML = null;
    componentLoader.append(Form());
});
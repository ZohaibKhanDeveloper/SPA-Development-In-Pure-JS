import { DynamicBox } from "./components/DynamicBox.js";
import Element from "./components/Element.js";
let btn = document.getElementById("load-dynamic-box"),btnRemove = document.getElementById("remove-dynamic-box");
let loadBox = document.getElementById("load-box-here");
//<link rel="stylesheet" href="components_css/DynamicBox.css">
btn.addEventListener("click",function(){
    loadBox.innerHTML = null;
    document.head.append(
        new Element("link","",["rel","href","id"],["stylesheet","components_css/DynamicBox.css","DynamicBoxStyles"]).getElement()
    );
    loadBox.append(DynamicBox());
});
btnRemove.addEventListener("click",function(){
    loadBox.removeChild(document.getElementById("div1"));
    document.head.removeChild(document.getElementById("DynamicBoxStyles"));
});
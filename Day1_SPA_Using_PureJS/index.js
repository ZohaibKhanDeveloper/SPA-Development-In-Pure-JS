import { listItems } from "./components/ListItemsComponent.js";
document.getElementById('loading-items-btn').addEventListener("click",function(){
    document.getElementById("load-ul").innerHTML= null;
    document.getElementById("load-ul").append(listItems());
    document.getElementById("load-ul").style.display="block";
});
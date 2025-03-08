export function listItems(){
    var items = ["Apple","Orange","Strawberry","Banana","Watermelon"];
    var ul = document.createElement("ul");
    for(let i=0; i<items.length; i++){
        let li = document.createElement("li");
        li.textContent = items[i];
        ul.append(li);
    }
    let msg = document.createElement("h3");
    msg.textContent = "List Of Fruits";
    ul.prepend(msg);
    return ul;
}
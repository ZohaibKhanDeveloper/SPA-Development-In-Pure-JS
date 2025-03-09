export function Box1(){
    // var box = document.getElementById("box").innerHTML;
    // return box;
    var box = document.createElement("div");
    var h3 = document.createElement("h3");
    h3.innerText = "I am Box 1 Component";
    box.append(h3);
    var p = document.createElement("p");
    p.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ut nesciunt quod, odio, eveniet facere inventore maiores natus ea quibusdam, adipisci necessitatibus ipsa commodi quas nam dolore dignissimos perferendis aspernatur!";
    box.append(p);
    var button = document.createElement("button");
    button.innerText = "Card Button";
    box.append(button);
    box.style.backgroundColor = "rgb(255, 155, 97)";
    box.style.width = "50%";
    box.style.height = "50%"; 
    box.style.textAlign = "justify";
    box.style.padding = "20px"; 
    box.style.borderRadius = "5px"; 
    return box;
}
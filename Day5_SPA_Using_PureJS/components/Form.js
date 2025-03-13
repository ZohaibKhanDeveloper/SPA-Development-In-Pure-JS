import Element from "./Element.js";
export function Form(){
    let form = new Element("form","",["method","action"],["get","#"]).getElement();
    let placeholders = ["Enter username or email","Enter Password"],
    types = ["text","password"];
    for(let i=0; i<2; i++){
        let input = document.createElement("input");
        input.setAttribute("placeholder",placeholders[i]);
        input.setAttribute("type",types[i]);
        input.style.width="200px";
        form.append(input);
    }
    let inputSubmit = document.createElement("input");
    inputSubmit.setAttribute("type","submit");
    inputSubmit.setAttribute("value","Login");
    inputSubmit.style.width = "215px";
    inputSubmit.style.backgroundColor = "white";
    inputSubmit.style.color = "blue";
    inputSubmit.style.border = "none";
    inputSubmit.style.cursor = "pointer";
    form.append(inputSubmit);
    let styles = {
        "backgroundColor":"blue",
        "color":"white",
        "width":"300px",
        "height":"100%",
        "padding":"20px 0px 20px 0px",
        "borderRadius":"5px"
    }
    Object.entries(styles).forEach(([Key,value])=>{
        form.style[Key] = value;
    });
    return form;
}
import Element from './Element.js';
export function DynamicBox(){
    let div = new Element("div","",["id","class"],["div1","boxes"]).getElement(),
    h1 = new Element("h1","I am Heading Inside Box",["id"],["head1"]).getElement(),
    p = new Element("p","I am a paragrapgh inside the box. I am Loaded Dynamically",["id"],["p1"]).getElement();
    div.append(h1);
    div.append(p);
    return div;
}
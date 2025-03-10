class Element{
    constructor(tagName,content,attributes=[],values=[]){
        this.tagName = tagName;
        this.content = content;
        this.attributes = attributes;
        this.values = values;
        this.element = document.createElement(tagName);
        this.element.innerText = content;
        if(this.attributes.length == this.values.length){
            for(let i=0; i<this.attributes.length; i++){
                this.element.setAttribute(this.attributes[i],this.values[i]);
            }
        }
    }
    getElement(){
        return this.element;
    }
}
export default Element;
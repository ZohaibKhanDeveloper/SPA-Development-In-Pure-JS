import Element from './Element.js';
export function About(){
    let about = new Element("div","",['class'],['tabs']).getElement(),
    h1 = new Element("h1","About Us Tab",[],[]).getElement(),
    p = new Element("p","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea magni necessitatibus sed aliquam quos labore assumenda, aliquid sit illo error sunt sequi voluptatibus aspernatur repellendus. Similique deleniti vitae recusandae rerum commodi aliquam fugit? Delectus quibusdam molestiae laborum velit atque vel sed eaque ducimus sunt assumenda ad asperiores sequi, accusantium veniam inventore aliquid et! Necessitatibus quo deleniti numquam culpa, eveniet natus inventore reiciendis distinctio explicabo repellat architecto et doloribus, molestias quidem impedit provident enim voluptates sunt quibusdam perferendis suscipit nostrum laboriosam ipsum. Sit dolorum officiis repudiandae, consectetur unde et nisi dignissimos voluptatem quae aspernatur culpa inventore cum praesentium facilis accusantium sed.o repellat architecto et doloribus, molestias quidem impedit provident enim voluptates sunt quibusdam perferendis suscipit nostrum laboriosam ipsum. Sit dolorum officiis repudiandae, consectetur unde et nisi dignissimos voluptatem quae aspernatur culpa inventore cum praesentium facilis accusantium sed.",[],[]).getElement();
    about.append(h1);
    about.append(p);
    return about;
}
import { Home } from "./components/Home.js";
import { About } from "./components/About.js";
import { News } from "./components/News.js";
import { GithubRepos } from "./components/GithubRepos.js";
import { ContactUs } from "./components/ContactUs.js";
let btns = document.getElementsByTagName("button"),
loader = document.getElementById("component-loader");
loader.append(Home());
btns[0].addEventListener('click',function(){
    loader.innerHTML = null;
    loader.append(Home());
});
btns[1].addEventListener('click',function(){
    loader.innerHTML = null;
    loader.append(About());
});
btns[2].addEventListener('click',function(){
    loader.innerHTML = null;
    loader.append(News());
});
btns[3].addEventListener('click',function(){
    loader.innerHTML = null;
    loader.append(GithubRepos());
});
btns[4].addEventListener('click',function(){
    loader.innerHTML = null;
    loader.append(ContactUs());
});
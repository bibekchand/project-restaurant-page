import "./style.css";
import HomeEventHandler from "./homeFunction.js";
import menuEventHandler from "./menuFunction.js";
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

home.addEventListener("click", HomeEventHandler);
menu.addEventListener("click", menuEventHandler);
// about.addEventListener("click", aboutEventHandler);


home.dispatchEvent(new Event("click"));
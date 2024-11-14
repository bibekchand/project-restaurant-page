import "./style.css";
import HomeEventHandler from "./homeFunction.js";
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const menu = document.querySelector("menu");

home.addEventListener("click", HomeEventHandler);
// about.addEventListener("click", aboutEventHandler);
// menu.addEventListener("click", menuEventHandler);
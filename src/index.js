import "./style.css";
import HomeEventHandler from "./homeFunction.js";
import menuEventHandler from "./menuFunction.js";
import contactEventHandler from "./contactFunction.js"
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

home.addEventListener("click", HomeEventHandler);
menu.addEventListener("click", menuEventHandler);
contact.addEventListener("click", contactEventHandler);

home.dispatchEvent(new Event("click"));
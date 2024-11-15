import cmomo from "./images/cmomo.jpg"
const content = document.querySelector("#content");
const imageArr= [cmomo];
const nameArr = ["C. Momo"]
function Handler() {
    content.textContent = "";
    content.style.setProperty("background-image", "none");
    const menu = document.createElement("div");
    menu.setAttribute("id", "menuContainer");
    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "Menu";
    menu.appendChild(menuHeader);
    content.appendChild(menu);
    for(let i=0; i<6; i++)
    {
        const card = document.createElement("div");
        card.setAttribute("class", "cards");
        const image = document.createElement("img");
        image.src = imageArr[i];
        image.style.setProperty("height", "150px");
        card.appendChild(image);
        const dishName = document.createElement("div");
        dishName.setAttribute("class", "dishName");
        dishName.textContent = nameArr[i];
        card.appendChild(dishName);
        menu.appendChild(card);
    }


}
export default Handler;
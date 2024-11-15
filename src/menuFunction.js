import cmomo from "./images/momo.png"
const content = document.querySelector("#content");
const nameArr = ["C. Momo", "Kothe Momo", "Buff Momo"];
const priceArr = [150, 160, 170];
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
        image.src = cmomo;
        image.style.setProperty("height", "150px");
        card.appendChild(image);
        const dishName = document.createElement("div");
        dishName.setAttribute("class", "dishName");
        dishName.textContent = nameArr[i%3];
        card.appendChild(dishName);
        const cost = document.createElement("span");
        cost.textContent = priceArr[i%3];
        card.appendChild(cost);
        menu.appendChild(card);
    }


}
export default Handler;
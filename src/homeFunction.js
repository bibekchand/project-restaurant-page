import chefImage from "./images/chef.png"
import momoImage from "./images/momoPicture.jpg";
const content = document.querySelector("#content");    
function handler(){
    content.textContent = "";
    content.style.setProperty("background-image", `url(${momoImage})`);
    content.style.setProperty("background-size", "cover");
    const homeContainer = document.createElement("div");
    homeContainer.setAttribute("id", "homeContainer");
    const image = document.createElement("img");
    const imageContainer = document.createElement("div");
    image.setAttribute("src", chefImage);
    imageContainer.appendChild(image);
    homeContainer.appendChild(imageContainer);
    const p1 = document.createElement("p");
    p1.textContent= "We have the best momo's in the town just for you !!!";
    homeContainer.appendChild(p1);
    const button = document.createElement("button");
    button.textContent = "Order Now";
    homeContainer.appendChild(button);
    content.appendChild(homeContainer);
}

export default handler;
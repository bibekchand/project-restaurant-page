const content = document.querySelector("#content");
function Handler(){
    content.textContent = "";
    content.style.setProperty("background-image", "none");
    content.style.setProperty("height", "80vh");
    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contactContainer");
    const contactUs = document.createElement("h2");
    contactUs.textContent = "Contact Us";
    contactContainer.appendChild(contactUs);
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Phone Number: 98-xxx-xxx-xx";
    contactContainer.appendChild(phoneNumber);
    const email = document.createElement("p");
    email.textContent = "Email: momoemail@email.com";
    contactContainer.appendChild(email);
    const address = document.createElement("p");
    address.textContent = "Address: Human Street 24, Mars"
    contactContainer.appendChild(address);
    content.appendChild(contactContainer);
}
export default Handler;
// select paragraph n button
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

// create a function
function changeMessage() 
{
    message.textContent = "Hello there!";
}

// addEventListener click
changeBtn.addEventListener("click", changeMessage);



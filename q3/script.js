//select button n ordered list
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

//create function
function generateNumbers() 
{
    //clear existing list item
    numberList.textContent = "";

    //generate num from 1 to 5
    for (let i = 1; i <= 5; i++) 
    {

        //create new list item
        const listItem = document.createElement("li");

        //set the text of the list item
        listItem.textContent = "The number is " + i;

        //add the list item to the ordered list
        numberList.appendChild(listItem);
    }
}

//addEventListener
generateBtn.addEventListener("click", generateNumbers);


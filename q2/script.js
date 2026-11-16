//select HTML element
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

//create function
function checkInput() 
{
    //get input value
    const inputValue = userInput.value.trim();

    //check if the input is empty
    if (inputValue === "") 
    {
        result.textContent = "Please enter a valid number!";
    }
    else 
    {
        //input to number
        const number = Number(inputValue);

        //check if input is a valid 
        if (Number.isNaN(number)) 
        {
            result.textContent = "Please enter a valid number!";
        }
        else if (number < 10) 
        {
            result.textContent = "The number is lower than 10";
        }
        else if (number > 10) 
        {
            result.textContent = "The number is higher than 10";
        }
        else 
        {
            result.textContent = "The number is equal to 10";
        }
    }
}

// addEventListener
checkBtn.addEventListener("click", checkInput);



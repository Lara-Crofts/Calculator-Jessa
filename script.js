// .. select elements from html page to assign names in order to call from 

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    // Check for divide by zero
  if (output.includes("/0")) {
      // sets error message in red color
      // if 0/0 is prompted, error message will follow.. 
      // divide by zero error alert message.. 
  display.value = "Error: Division by zero is not allowed.";
  display.style.color = "red"; // Set the text color to red
  output = "";

      // Reset the text color tafter a 2 second delay.. 
  setTimeout(() => {
  display.style.color = "black"; // reset text back to black 
  }, 2000); // ****2000 milliseconds (2 seconds)

      return;
  }
    
    // .. if the output has '%', then replace with '/100' before evaluating.... 
    output = eval(output.replace("%", "/100"));



    // .. set a clear button that resets the calculator to its initial state
  } else if (btnValue === "CLEAR") {
    output = "";
    
  } else if (btnValue === "DEL") {
    
    // if DEL button is clicked, remove the last character from the output
    // user hits the back arrow.. will remove the last character from display... we use slice..
    output = output.toString().slice(0, -1);
  } else {
    //..if output is empty and button is specialChars then return
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};


//... added a event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
  //.. button click listener calls calculate() with dataset value as argument
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});


//targeting the convert submit button
var button = document.getElementById("tempInputBtn");
var clearButton = document.getElementById("clear");

//targeting the input box itself
var userInput = document.getElementById("tempInput");

var outputDiv = document.getElementById("temp-output");

//listening for a click on the submit button, and storing userInput.value
clearButton.addEventListener("click", function () {
	location.reload(true);
});

//listening for a click on the submit button, and storing userInput.value
button.addEventListener("click", determineConverter);


//listening for hitting enter from the input box
userInput.addEventListener("keyup", function (event) {
	if (event.key==="Enter") {
		determineConverter();
	}
})

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  var startTemp = numberGet();
  if (choiceFahren) {
  	toFahrenheit(startTemp);
  } else {
  	toCelsius(startTemp);
  }
}
//This function gets the number from the field -- this function 
//is only called after the click/enter event by way of calling it in the determineConverter.
function numberGet () {
	var initialTemp = userInput.value;
	return initialTemp;
}
function toCelsius (initialTemp) {
	var newCTemp = Math.round(((initialTemp - 32)*5)/9);
	heatColors(initialTemp);
	outputDiv.innerHTML = `That is ${newCTemp} degrees Celsius!`;
	return newCTemp;
}

function toFahrenheit (initialTemp) {
	var newFTemp = Math.round((initialTemp*1.8) + 32);
	heatColors(newFTemp);
	outputDiv.innerHTML = `That is ${newFTemp} degrees Fahrenheit!`;
	return newFTemp;
}

function heatColors (temp)  {
     if (temp >= 90) {
     	outputDiv.classList.add("hot");
     } else if (temp <= 32) {
     	outputDiv.classList.add("cold");
     } else {
     	outputDiv.classList.add("reg")
     }


}



let choiceFahren = false;
//If the user clicks "Fahrenheit" it sets the boolean
let chooseToFahren = document.getElementById('toFahren')
chooseToFahren.addEventListener('click', function () {
	choiceFahren = true;
	console.log("Is choiceFahren true or false?", choiceFahren);
})

//If the user clicks "Celsius" it flips the boolean
 let chooseToCelsius = document.getElementById('toCelsius')
 chooseToCelsius.addEventListener('click', function () {
 	choiceFahren = false;
 	console.log("Is choiceFahren true or false?", choiceFahren);
 })


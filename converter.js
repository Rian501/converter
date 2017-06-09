//targeting the convert submit button
var button = document.getElementById("tempInputBtn");

//targeting the input box itself
var userInput = document.getElementById("tempInput");


function numberGet () {
	console.log("inside event listener");
	var initialTemp = userInput.value;
	console.log("can I see it now?", initialTemp);
	return initialTemp;
}

//listening for a click on the submit button, and storing userInput.value
button.addEventListener("click", numberGet)



userInput.addEventListener("keyup", function (event) {
	// console.log("event", event);
	if (event.key==="Enter") {
		var enterGet = numberGet();
		
		console.log("YES!!!", enterGet);
	}

})


console.log("can I see the number we input?", userInput);



let chooseToFahren = document.getElementById('toCelsius')
chooseToFahren.addEventListener('click', function () {

})




function toCelsius () {

}

function toFahrenheit () {

}

// Get a reference to the button element in the DOM

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
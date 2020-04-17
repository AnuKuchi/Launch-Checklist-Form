// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
         let pilotName = document.querySelector("input[name=pilotname]");
         let copilotName = document.querySelector("input[name=copilotname]");
         let fuelLevel = document.querySelector("input[name=fuellevel]");
         let cargoMass = document.querySelector("input[name=copilotname]");
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
         }      
   });
});
// Declare variables


function preventDefaul(){
   document.getElementById("pilotName").innerHTML


}

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

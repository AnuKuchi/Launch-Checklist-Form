// Write your JavaScript code here!

window.addEventListener("load", function() {

   // This block of code shows how to format the HTML once you fetch some planetary JSON!

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
         let target = Math.floor(Math.random() * json.length);
         // Add HTML that includes the JSON data
         div.innerHTML = `<h2>Mission Destination</h2>
         <ol>
         <li>Name: ${json[target].name}</li>
         <li>Diameter: ${json[target].diameter}</li>
         <li>Star: ${json[target].star}</li>
         <li>Distance from Earth: ${json[target].distance}</li>
         <li>Number of Moons: ${json[target].moons}</li>
      </ol>
      <img src="${json[target].image}">`;
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Declare variables
         let Pilot = document.querySelector("input[name=pilotName]");
         let CoPilot = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");

         let faultyItems = document.getElementById("faultyItems");
             faultyItems.style.visibility = "hidden";  
         let launchStatus = document.getElementById("launchStatus");

         if (Pilot.value === "" || CoPilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are Required!");                        
         }  
         if ((String(Pilot.value) === "false") || (String(CoPilot.value) === "false")) {
            alert("Pilot and Copilot fields must be names. No numbers or Special charaters!");            
         } 
        /* if ((isNan(fuelLevel.value) === "true") || (isNaN(cargoMass.value) === "true")) {
            alert("Enter a valid Number only!");            
         } */          
         //Launch Status Code

         document.getElementById("pilotStatus").innerText = `Pilot ${Pilot.value} is ready for Launch`;
         document.getElementById("copilotStatus").innerText = `Co-Pilot ${CoPilot.value} is ready for Launch`;

         if (fuelLevel.value < 10000 || cargoMass.value > 10000){
            faultyItems.style.visibility = "visible";
            launchStatus.innerText = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
         } else {
            faultyItems.style.visibility = "visible";
            launchStatus.innerText = "Shuttle Ready for Launch";
            launchStatus.style.color = "green";
         }

            if (fuelLevel.value < 10000){
                  document.getElementById("fuelStatus").innerText = "Fuel Level too low for Launch";
            }
            if (cargoMass.value > 10000){
                  document.getElementById("cargoStatus").innerText = "Cargo Mass low enough for Launch";
            }
   });

});

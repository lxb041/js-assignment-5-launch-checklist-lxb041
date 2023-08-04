// Write your JavaScript code here!

// const { myFetch, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

//    let listedPlanets = myFetch();
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    


   let listedPlanetsResponse = myFetch()
   listedPlanetsResponse.then(function (result) {
      let listedPlanets = result;
       console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

       let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
   });

   

let form = document.querySelector("form");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    let pilotInfo = document.querySelector("input[name= pilotName]");
    let pilot = pilotInfo.value;
    
    let copilotInfo = document.querySelector("input[name= copilotName]");
    let copilot = copilotInfo.value;

    let fuelLevelInfo = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = fuelLevelInfo.value;

    let cargoMassInfo = document.querySelector("input[name=cargoMass]");
    let cargoMass = cargoMassInfo.value;

    let list = document.getElementById("faultyItems")

    formSubmission(document, list , pilot, copilot, fuelLevel, cargoMass)
    console.log(pilot)

    

});
   
   
});
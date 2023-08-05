// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById("missionTarget")
   const missionInfo = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}" alt="Mission Destination Image">
                `;

                missionTarget.innerHTML = missionInfo;
   
}

function validateInput(testInput) {
    if (testInput.trim() === "") {
        return "Empty";
    } else if (!isNaN(testInput)) {
        return "Is a Number"
    } else {
        return "Not a Number"
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   const pilotValidation = document.getElementById("pilotStatus")
   const copilotValidation = document.getElementById("copilotStatus")
   const fuelLevelValidation = document.getElementById("fuelStatus")
   const cargoLevelValidation = document.getElementById("cargoStatus")
console.log(list)
   if (validateInput(pilot) === 'Empty' || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required");
   } else if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number") {
    alert("All fields are required"); }
    
    else {
    list.style.visibility = "visible";
    pilotValidation.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotValidation.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    
    console.log(pilot)
    console.log(copilot)

        if (fuelLevel >= 10000 && cargoLevel < 10000) {
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo Mass is low enough for take off";
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
            document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
        } else if (fuelLevel >= 10000 && cargoLevel >= 10000 ) {
            document.getElementById("cargoStatus").innerHTML = "Too heavy for shuttle to take off";
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)"
        } else if (fuelLevel < 10000 && cargoLevel < 10000 ) {
            document.getElementById("fuelStatus").innerHTML = "Not enough fuel for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo Mass is low enough for take off";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)"

        } else {
            document.getElementById("fuelStatus").innerHTML = "Not enough fuel for launch";
            document.getElementById("cargoStatus").innerHTML = "Too heavy for shuttle to take off";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)"
        }


        // if (fuelLevel < 10000) {
        //     document.getElementById("fuelStatus").innerHTML = "Not enough fuel for launch"; //this works
        //     document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"; //why does this not change
        //     document.getElementById("launchStatus").style.color = "red"; // why does this not change
        // } else {
        //     document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        // }

        // if (cargoLevel > 10000) {
        //     document.getElementById("cargoStatus").innerHTML = "Too heavy for shuttle to take off";
        //     document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        //     document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        // } else {
        //     document.getElementById("cargoStatus").innerHTML = "Shuttle is ready for launch";
        //     document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"; //Added this extra code
        //     document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
        // }

    }

   }


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
     });
console.log(planetsReturned);
    return planetsReturned;
}

function pickPlanet(planets) {
    const random = Math.floor(Math.random() * planets.length)
    return planets[random]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

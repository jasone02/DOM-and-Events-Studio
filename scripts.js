// Write your JavaScript code here.
// Remember to pay attention to page loading!

let paddingLeft = 0;
let paddingRight = 0;
let paddingTop = 0;
let paddingBottom = 0;

window.addEventListener("load", () => {

    document.getElementById("takeoff").addEventListener("click", function takeOff() {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style = "background-color:blue";
            document.getElementById("spaceShuttleHeight").innerHTML = String(Number(document.getElementById("shuttleHeight")) + 10000);
        }
    });

    document.getElementById("landing").addEventListener("click", function land() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style = "background-color:green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
    });

    document.getElementById("missionAbort").addEventListener("click", function abort() {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style = "background-color:green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
        }
    });

    document.getElementById("Left").addEventListener("click", function padRight() {
        paddingRight += 10;
        document.getElementById("shuttle").style.paddingRight = `${paddingRight}px`;
    });

    document.getElementById("Right").addEventListener("click", function padLeft() {
        paddingLeft += 10;
        document.getElementById("shuttle").style.paddingLeft = `${paddingLeft}px`;
    });

    document.getElementById("Up").addEventListener("click", function increaseHeight() {
        let previousHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        document.getElementById("spaceShuttleHeight").innerHTML = previousHeight + 10000;
        paddingBottom += 10;
        document.getElementById("shuttle").style.paddingBottom = `${paddingBottom}px`;
    });

    document.getElementById("Down").addEventListener("click", function decreaseHeight() {
        let previousHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        document.getElementById("spaceShuttleHeight").innerHTML = previousHeight - 10000;
        paddingTop += 10;
        document.getElementById("shuttle").style.paddingTop = `${paddingTop}px`;
    });

});
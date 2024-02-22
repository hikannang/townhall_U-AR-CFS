var loadingTimeout;
var distance; //Declaring this as a global Variable instead
var modal;
var colour = 'black';


// Add this function at the beginning of your script
function showLoadingScreen() {
    var loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex';

    // Set a timeout to hide the loading screen after 2  seconds
    loadingTimeout = setTimeout(function () {
        hideLoadingScreen();
    }, 3000);
}

function hideLoadingScreen() {
    var loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'none';

    // Clear the timeout if it hasn't been triggered yet
    clearTimeout(loadingTimeout);
}

function selectRed(){
    //Bicycle Crossing
    
    //My House,
    startCompass()
    target.latitude = 1.401372;
    target.longitude = 103.749333;

    showLoadingScreen();

    colour = 'red';

    if (document.getElementById('redOff')) {
        
        // Turning Red On
        document.getElementById('redOff').id = 'red';
        var content = document.getElementById('red');
        content.innerHTML = '<a-image id="red" src="./static/images/2D_Assets_low_res/BicycleCrossing_hanging.png" look-at="[camera]" scale="20 20 20" gps-projected-entity-place="latitude: 1.401372; longitude: 103.749333"></a-image>';
    }

    if(document.getElementById('green')){
        // Turning Green Off
        document.getElementById('green').id = 'greenOff';
        var content = document.getElementById('greenOff')
        content.innerHTML = '<a-entity id="greenOff"></a-entity>'
    }

    if(document.getElementById('yellow')){
        // Turning Yellow Off
        document.getElementById('yellow').id = 'yellowOff';
        var content = document.getElementById('yellowOff')
        content.innerHTML = '<a-entity id="yellowOff"></a-entity>'
    }

    if(document.getElementById('blue')){
        // Turning blue Off
        document.getElementById('blue').id = 'blueOff';
        var content = document.getElementById('blueOff')
        content.innerHTML = '<a-entity id="blueOff"></a-entity>'
    }

    if(document.getElementById('orange')){
        // Turning orange Off
        document.getElementById('orange').id = 'orangeOff';
        var content = document.getElementById('orangeOff')
        content.innerHTML = '<a-entity id="orangeOff"></a-entity>'
    }
}

function selectGreen(){
    //Cycling Path

    //Outside office 
    startCompass()
    target.latitude = 1.308544;
    target.longitude = 103.849942;

    showLoadingScreen();

    colour = 'green';

    if (document.getElementById('greenOff')){
        
        // Turning Green On
        document.getElementById('greenOff').id = 'green';
        var content = document.getElementById('green')
        // content.innerHTML = '<a-entity id="green" material="color: green" geometry="primitive: box" gps-projected-entity-place="latitude: 1.3082540241124714; longitude: 103.84929645038089" scale="10 10 10"></a-entity>'
        content.innerHTML = '<a-image id="green" src="./static/images/2D_Assets_low_res/CyclingPath_4k.png" look-at="[camera]" scale="10 10 10" gps-projected-entity-place="latitude: 1.308544; longitude: 103.849942"></a-image>';
        // Hide Loading Screen after 2 seconds
    }

    if(document.getElementById('red')){
        // Turning Red Off
        document.getElementById('red').id = 'redOff';
        var content = document.getElementById('redOff')
        content.innerHTML = '<a-entity id="redOff"></a-entity>'
    }

    if(document.getElementById('yellow')){
        // Turning Yellow Off
        document.getElementById('yellow').id = 'yellowOff';
        var content = document.getElementById('yellowOff')
        content.innerHTML = '<a-entity id="yellowOff"></a-entity>'
    }

    if(document.getElementById('blue')){
        // Turning blue Off
        document.getElementById('blue').id = 'blueOff';
        var content = document.getElementById('blueOff')
        content.innerHTML = '<a-entity id="blueOff"></a-entity>'
    }

    if(document.getElementById('orange')){
        // Turning orange Off
        document.getElementById('orange').id = 'orangeOff';
        var content = document.getElementById('orangeOff')
        content.innerHTML = '<a-entity id="orangeOff"></a-entity>'
    }
}

function selectYellow(){
    //Foot Path

    //Outside office 
    startCompass()
    target.latitude = 1.308544;
    target.longitude = 103.849942;

    showLoadingScreen();

    colour = 'yellow';

    if (document.getElementById('yellowOff')){
        // Turning Yellow On
        document.getElementById('yellowOff').id = 'yellow';
        var content = document.getElementById('yellow')
        content.innerHTML = '<a-image  id="yellow" src="./static/images/2D_Assets_low_res/FootPath.png" look-at="[gps-projected-camera]" scale="10 10 10" gps-projected-entity-place="latitude: 1.308544; longitude: 103.849942"></a-image>';
    }   

    if(document.getElementById('red')){
        // Turning Red Off
        document.getElementById('red').id = 'redOff';
        var content = document.getElementById('redOff')
        content.innerHTML = '<a-entity id="redOff"></a-entity>'
    }

    if(document.getElementById('green')){
        // Turning Green Off
        document.getElementById('green').id = 'greenOff';
        var content = document.getElementById('greenOff')
        content.innerHTML = '<a-entity id="greenOff"></a-entity>'
    }

    if(document.getElementById('blue')){
        // Turning blue Off
        document.getElementById('blue').id = 'blueOff';
        var content = document.getElementById('blueOff')
        content.innerHTML = '<a-entity id="blueOff"></a-entity>'
    }

    if(document.getElementById('orange')){
        // Turning orange Off
        document.getElementById('orange').id = 'orangeOff';
        var content = document.getElementById('orangeOff')
        content.innerHTML = '<a-entity id="orangeOff"></a-entity>'
    }
}

function selectBlue(){
    //Wayfinding
    
    //Outside office 
    startCompass()
    target.latitude = 1.308544;
    target.longitude = 103.849942;

    showLoadingScreen();

    colour = 'blue';
    
    if (document.getElementById('blueOff')){
        // Turning Blue On
        document.getElementById('blueOff').id = 'blue';
        var content = document.getElementById('blue')
        content.innerHTML = '<a-image  id="blue" src="./static/images/2D_Assets_low_res/Wayfinding_grabbing.png" look-at="[gps-projected-camera]" scale="10 10 10" gps-projected-entity-place="latitude: 1.308544; longitude: 103.849942"></a-image>';
    }
    

    if(document.getElementById('red')){
        // Turning Red Off
        document.getElementById('red').id = 'redOff';
        var content = document.getElementById('redOff')
        content.innerHTML = '<a-entity id="redOff"></a-entity>'
    }

    if(document.getElementById('green')){
        // Turning Green Off
        document.getElementById('green').id = 'greenOff';
        var content = document.getElementById('greenOff')
        content.innerHTML = '<a-entity id="greenOff"></a-entity>'
    }

    if(document.getElementById('yellow')){
        // Turning yellow Off
        document.getElementById('yellow').id = 'yellowOff';
        var content = document.getElementById('yellowOff')
        content.innerHTML = '<a-entity id="yellowOff"></a-entity>'
    }

    if(document.getElementById('orange')){
        // Turning orange Off
        document.getElementById('orange').id = 'orangeOff';
        var content = document.getElementById('orangeOff')
        content.innerHTML = '<a-entity id="orangeOff"></a-entity>'
    }

}

function selectOrange(){
    //YellowBox

    //Near Capitol Tower
    startCompass()
    target.latitude = 1.277589;
    target.longitude = 103.847113;

    showLoadingScreen();

    colour = 'orange';

    if (document.getElementById('orangeOff')){
        // Turning orange On
        document.getElementById('orangeOff').id = 'orange';
        var content = document.getElementById('orange')
        content.innerHTML = '<a-image  id="orange" src="./static/images/2D_Assets_low_res/YellowBox_sitting.png" look-at="[gps-projected-camera]" scale="10 10 10" gps-projected-entity-place="latitude: 1.277589; longitude: 103.847113"></a-image>';
    }

    if(document.getElementById('red')){
        // Turning Red Off
        document.getElementById('red').id = 'redOff';
        var content = document.getElementById('redOff')
        content.innerHTML = '<a-entity id="redOff"></a-entity>'
    }

    if(document.getElementById('green')){
        // Turning Green Off
        document.getElementById('green').id = 'greenOff';
        var content = document.getElementById('greenOff')
        content.innerHTML = '<a-entity id="greenOff"></a-entity>'
    }

    if(document.getElementById('yellow')){
        // Turning yellow Off
        document.getElementById('yellow').id = 'yellowOff';
        var content = document.getElementById('yellowOff')
        content.innerHTML = '<a-entity id="yellowOff"></a-entity>'
    }

    if(document.getElementById('blue')){
        // Turning blue Off
        document.getElementById('blue').id = 'blueOff';
        var content = document.getElementById('blueOff')
        content.innerHTML = '<a-entity id="blueOff"></a-entity>'
    }

}



// ##################################################################################################
var current = { latitude: null, longitude: null };
var target = { latitude: 0, longitude: 0 };
var lastAlpha = 0;
var direction = 0;
const isIOS =
    navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
    navigator.userAgent.match(/AppleWebKit/);
// const startBtn = document.querySelector(".start-btn");
const geolocationOptions = { enableHighAccuracy: true };

// function to initialize geolocation and device oroentation. runs automatically
// function to initialize geolocation and device orientation. runs automatically
function init() {
    // startBtn.addEventListener("click", startCompass);
    navigator.geolocation.watchPosition(setCurrentPosition, null, geolocationOptions);
    if (!isIOS) {
        window.addEventListener("deviceorientationabsolute", runCalculation);
    }

    // Start the UI updates
    updateUI();
}


// on clicking the start compass button, request permission to use device orientation.
// only IOS devices need to click the button
function startCompass() {
    if (isIOS) {
        DeviceOrientationEvent.requestPermission()
            .then((response) => {
            if (response === "granted") {
                window.addEventListener("deviceorientation", runCalculation);
            } else {
                alert("has to be allowed!");
            }
            })
            .catch(() => alert("not supported"));
    }
}

// takes values retrieved from th geolocation API and stores them in the current object
// for use in calculating compass direction and distance
function setCurrentPosition(position) {
    current.latitude = position.coords.latitude;
    current.longitude = position.coords.longitude;
}

// runs the calculation for getting the direction which the arrow needs to point
function runCalculation(event) {
    var alpha = Math.abs(360 - event.webkitCompassHeading) || event.alpha;

    if (alpha == null || Math.abs(alpha - lastAlpha) > 1) {
    var lat1 = current.latitude * (Math.PI / 180);
    var lon1 = current.longitude * (Math.PI / 180);
    var lat2 = target.latitude * (Math.PI / 180);
    var lon2 = target.longitude * (Math.PI / 180);

    // calculate compass direction
    var y = Math.sin(lon2 - lon1) * Math.cos(lat2);
    var x =
        Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    var bearing = Math.atan2(y, x) * (180 / Math.PI);

    direction = (alpha + bearing + 360) % 360;
    direction = direction.toFixed(0);

    lastAlpha = alpha;

    var R = 6371; // Radius of the earth in km
    var dLat = lat2 - lat1; // below
    var dLon = lon2 - lon1;
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    distance = R * c; // Distance in km
    distance = distance * 1000; // Convert to meters

    if (colour != 'black') {
        switch (colour) {
            case 'red':
                if (distance < 20000){ 
                    toggleModalRed120();
                    colour = 'red2';
                }
                break;
            case 'red2':
                if (distance <= 80){ 
                    toggleModalRed80();
                    colour = 'red3';
                }
                break;
            case 'red3':
                if (distance <= 40){ 
                    toggleModalRed40();
                    colour = 'black';
                }
                break;
            case 'green':
                if (distance <= 40){
                    toggleModalGreen();
                    colour = 'black';}
                break;
            case 'yellow':
                if (distance <= 40){ 
                toggleModalYellow();
                colour = 'black';}
                break;
            case 'blue':
                if (distance <= 40){ 
                toggleModalBlue();
                colour = 'black';}
                break;
            case 'orange':
                if (distance <= 40){
                toggleModalOrange();
                colour = 'black';}
                break;
            default:
                break;
        }
    }
    

    var distanceElement = document.getElementById("distanceFromTarget");

        if (distance <= 20000) {
            // Display the actual distance
            distanceElement.innerHTML = Math.floor(distance) + "m to destination!";
        } else {
            // Display '0.00m' for distances above 20,000 meters
            distanceElement.innerHTML = 'Please Select Destination!';
        }
    }
}

// Modals
    // Start Red Models
    // Function to open the red modal
function toggleModalRed120() {
    var modalRed120 = document.getElementById("modalRed120");
    modalRed120.style.display = 'block';
}

function toggleModalRed80() {
    var modalRed120 = document.getElementById("modalRed120");
    modalRed120.style.display = 'none';
    var modalRed80 = document.getElementById("modalRed80");
    modalRed80.style.display = 'block';
}

function toggleModalRed40() {
    var modalRed120 = document.getElementById("modalRed120");
    modalRed120.style.display = 'none';
    var modalRed80 = document.getElementById("modalRed80");
    modalRed80.style.display = 'none';
    var modalRed40 = document.getElementById("modalRed40");
    modalRed40.style.display = 'block';
}
//Functions to close the red modals
function closeRedModal120() {
    var modalRed120 = document.getElementById("modalRed120");
    modalRed120.style.display = 'none';
}

// span.onclick for the red modal
document.getElementById("modalRedClose120").onclick = function () {
    closeRedModal120();
};

// Function to close the red modal
function closeRedModal80() {
    var modalRed80 = document.getElementById("modalRed80");
    modalRed80.style.display = 'none';
}

// span.onclick for the red modal
document.getElementById("modalRedClose80").onclick = function () {
    closeRedModal80();
};

// Function to close the red modal
function closeRedModal40() {
    var modalRed40 = document.getElementById("modalRed40");
    modalRed40.style.display = 'none';
}

// span.onclick for the red modal
document.getElementById("modalRedClose40").onclick = function () {
    closeRedModal40();
};

//Red Modal End

// Function to open the green modal
function toggleModalGreen() {
    var modalGreen = document.getElementById("modalGreen");
    modalGreen.style.display = 'block';
}

// Function to close the Green modal
function closeGreenModal() {
    var modalGreen = document.getElementById("modalGreen");
    modalGreen.style.display = 'none';
}

// span.onclick for the Green modal
document.getElementById("modalGreenClose").onclick = function () {
    closeGreenModal();
};


// Function to open the yellow modal
function toggleModalYellow() {
    var modalYellow = document.getElementById("modalYellow");
    modalYellow.style.display = 'block';
}

// Function to close the Yellow modal
function closeYellowModal() {
    var modalYellow = document.getElementById("modalYellow");
    modalYellow.style.display = 'none';
}

// span.onclick for the Yellow modal
document.getElementById("modalYellowClose").onclick = function () {
    closeYellowModal();
};


// Function to open the blue modal
function toggleModalBlue() {
    var modalBlue = document.getElementById("modalBlue");
    modalBlue.style.display = 'block';
}

// Function to close the Blue modal
function closeBlueModal() {
    var modalBlue = document.getElementById("modalBlue");
    modalBlue.style.display = 'none';
}

// span.onclick for the Blue modal
document.getElementById("modalBlueClose").onclick = function () {
    closeBlueModal();
};


// Function to open the orange modal
function toggleModalOrange() {
    var modalOrange = document.getElementById("modalOrange");
    modalOrange.style.display = 'block';
}
// Function to close the Yellow modal
function closeOrangeModal() {
    var modalOrange = document.getElementById("modalOrange");
    modalOrange.style.display = 'none';
}

// span.onclick for the Yellow modal
document.getElementById("modalOrangeClose").onclick = function () {
    closeOrangeModal();
};




function toggleCircles() {
    var additionalCircles = document.getElementById("additionalCircles");
    var threeLines = document.getElementById("threeLines");

    if (additionalCircles.style.display === "none") {
        additionalCircles.style.display = "flex";
        threeLines.style.background = "url('./static/images/icons/cross.png') center no-repeat";
        threeLines.style.backgroundSize = "contain";
    } else {
        additionalCircles.style.display = "none";
        threeLines.style.background = "url('./static/images/icons/menu.png') center no-repeat";
        threeLines.style.backgroundSize = "contain";
    }
}

    function toggleModal(){
        //Get the modal
        modal = document.getElementById("modalMap");
        modal.style.display="block";
    }

    var span = document.getElementsByClassName("close")[0];

    function closeModal(){
        modal.style.display='none';
    }

    span.onclick = function (){
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // starts updating the UI.
    function updateUI() {
        // Update arrow rotation
        const arrow = document.querySelector(".arrow");
        arrow.style.transform = `translate(-50%, -50%) rotate(${direction}deg)`;
        requestAnimationFrame(updateUI);
    }

init();
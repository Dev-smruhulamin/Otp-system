// TODO 1: Generate Pin  - Done
// TODO 2: Make keypad functional - Done
// TODO 3: Make Notification work - Done
// TODO 4: Make try left work - Done
// TODO 5: Make C (clear) btn work to clear keypad input - Done
// TODO 6: Remove element ( < ) one after another - Done

const generatePinBtn = document.querySelector(".generate-btn");
const generatedPinInput = document.querySelector(".generatedPin");
const showKeypadValue = document.querySelector(".showValue");
const notifySection = document.querySelector(".notify-section");
const submitBtn = document.querySelector(".submit-btn");
const correctNotification = document.querySelector(".correct-pin");
const worngNotification = document.querySelector(".wrong-pin");
let tryValue = document.getElementById("tryLeft");
let chance = parseInt(tryValue.innerText);
const removeSingleItem = document.getElementById("removeBtn");


// 4 OTP Generate Done.

function generatedPin() {
    let randomNumber = Math.floor(Math.random() * 9000 + 1000);
    generatedPinInput.value = randomNumber;
}

// Otp switch....
generatePinBtn.addEventListener("click", generatedPin);

removeSingleItem.addEventListener("click", removeSingleElement);

// Functional Keypad...

function inputValue(number) {

    if (generatedPinInput.value == "") {
        alert("First Pin Generate");
    } else {
        showKeypadValue.value += number;
    }



    // Clear Function......issue******

    if (number == "C") {
        clearKeyPadInput();
    }
}

//Clear all input

// Clear all keypad input
function clearKeyPadInput() {
    showKeypadValue.value = "";
}

//Time Left

function tryLeft() {

    if (chance > 0) {
        chance = chance - 1;

    }
    // console.log(chance);
    tryValue.innerText = chance;

    if (chance == 0) {
        submitBtn.display = true;
        submitBtn.style.backgroundColor = "red";
        generatePinBtn.disabled = true;
        generatePinBtn.style.backgroundColor = "red";
    }
}
//Check Pin

function checkPin() {
    const newPin = generatedPinInput.value;
    console.log(newPin);

    if (newPin === showKeypadValue.value) {
        showCorrectNotification();
    } else {
        showWrongNotification();
        tryLeft();
    }
}

// Check Notification..

function showCorrectNotification() {
    notifySection.style.display = "block";
    correctNotification.style.display = "block";
    worngNotification.style.display = "none";
    submitBtn.display = true;
    submitBtn.style.backgroundColor = "green";
    generatePinBtn.disabled = true;
    generatePinBtn.style.backgroundColor = "green";

}
function showWrongNotification() {
    notifySection.style.display = "block";
    correctNotification.style.display = "none";
    worngNotification.style.display = "block";

}

function removeDefultNotification() {
    notifySection.style.display = "none";
}

//submit Button Tigger
submitBtn.addEventListener("click", checkPin);
//Remove Defult Notification
removeDefultNotification();

// Remove Single element for deleting

// removing single item from keypad
function removeSingleElement() {
    if (showKeypadValue.value !== "") {
        let currentValue = showKeypadValue.value;
        // Remove the last character from the currentValue string
        showKeypadValue.value = currentValue.slice(0, -1);
    }
}




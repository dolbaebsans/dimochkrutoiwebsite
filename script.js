let vse = document.getElementById("hui")

function sayHello() {
    vse.style.display = "none";
}

// Assign the function to the window's onload event
window.onload = sayHello; 

document.getElementById('pass').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop default form submission and page reload

    const pinInput = document.getElementById('pin');
    const pinValue = pinInput.value;

    const password = "dimakrutoi"

    if (pinValue == password) {
        alert("краава");

        vse.style.display = "flex"
    } else {
        alert("хаахаха лоъ");
    }
});
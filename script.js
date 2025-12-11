//your JS code here. If required.
const counterElement = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", function () {
    let currentValue = Number(counterElement.textContent);

    // Show alert with un-incremented value
    alert(currentValue);

    // Increment the counter
    counterElement.textContent = currentValue + 1;
});

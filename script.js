// heart count functionality ----------------------------------------------------------

// select all heart icons
const hearts = document.querySelectorAll(".heart");

// select the navbar heart count
const heartCount = document.getElementById("heartCount");

// starts count
let count = 0;

// for of looping
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    count++;
    heartCount.textContent = count;
  });
}

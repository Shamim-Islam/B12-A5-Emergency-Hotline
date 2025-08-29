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
    heartCount.innerText = count;
  });
}

// Call Buttons with call history functionality ----------------------------------------------------------

const coinCount = document.getElementById("coin-count");
let coins = parseInt(coinCount.innerText);
const callBtns = document.getElementsByClassName("call-btn");

for (const btn of callBtns) {
  btn.addEventListener("click", function () {
    const serviceCard = btn.parentElement.parentElement;
    const serviceName = serviceCard.querySelector(".service-name").innerText;
    const serviceNumber =
      serviceCard.querySelector(".service-number").innerText;

    // check coins validation
    if (coins < 20) {
      alert("Insufficent Coins ! You need at least 20 Coins to make a call.");
      return;
    }

    // coin cutting
    coins = coins - 20;
    coinCount.innerText = coins;

    // show alert while click on call btn
    alert(`📞 Calling ${serviceName} ${serviceNumber}`);

    // add to call history
    const callHistory = document.getElementById("call-history");
    let currentTime = new Date().toLocaleTimeString();

    const div = document.createElement("div");
    div.innerHTML = `

      <div class="flex justify-between items-center bg-[#fafafa] rounded-lg mt-4 p-4 shadow-[0px_2px_3px_0px_rgba(0,0,0,0.15)]">
          <div>
            <h1 class="text-lg font-semibold">${serviceName}</h1>
            <p class="text-lg text-[#5c5c5c]">${serviceNumber}</p>
          </div>
          <p>${currentTime}</p>
      </div>
    
    `;
    callHistory.appendChild(div);
  });
}

"use strict" ;

/*

About me website
   this is JavaScript
    Author: Senait Ghebremichael
    Date:04/29/2025
   Filename: main_script.js
*/

alert("welcome to my assignment with js");



function updateDateTime() {
  const now = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[now.getDay()];

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const time = `${hours}:${minutes}:${seconds}`;
  const fullDateTime = `Today is ${day}, and the current time is ${time}`;

  document.getElementById("datetime").textContent = fullDateTime;
}

// Call the function once when the page loads
updateDateTime();

// Update the time every second
setInterval(updateDateTime, 1000);

function updateCountdown() {
  const dueDate = new Date("2025-05-11T23:59:00"); // Due: Sunday, May 11, 2025 11:59 PM
  const now = new Date();

  const timeDiff = dueDate - now;

  if (timeDiff <= 0) {
    document.getElementById("countdown").textContent =
      "The assignment is past due!";
    return;
  }

  const seconds = Math.floor((timeDiff / 1000) % 60);
  const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  document.getElementById(
    "countdown"
  ).textContent = `My Assignment Due Date left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Run initially and then update every second
updateCountdown();
setInterval(updateCountdown, 1000);

 // Convert Number to Text
 function numberToText() {
    let number = document.getElementById("numberInput").value;
    let text = number.toString(); // Convert number to string
    document.getElementById("textOutput").textContent = "Text: " + text;
  }

  // Convert Text to Number
  function textToNumber() {
    let text = document.getElementById("textInput").value;
    let number = parseFloat(text); // Convert string to number
    if (isNaN(number)) {
      document.getElementById("numberOutput").textContent = "Invalid number text!";
    } else {
      document.getElementById("numberOutput").textContent = "Number: " + number;
    }
  }

// Run this after 3 seconds (3000 milliseconds)
setTimeout(() => {
    console.log("This message appears after a 3-second delay.");
    alert("Delayed command executed!");
  }, 3000);









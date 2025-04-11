// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

function events() {
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();

document.addEventListener("DOMContentLoaded", function () {
  // Get the buttons
  var signUpButton = document.querySelector(".btn");
  var signInButton = document.querySelector(".signin");
  var getStartedButton = document.querySelector(".cta .btn");

  // Add event listeners to the buttons
  signUpButton.addEventListener("click", function () {
    window.location.href = "signup.html";
  });

  signInButton.addEventListener("click", function () {
    window.location.href = "signup.html";
  });

  getStartedButton.addEventListener("click", function () {
    window.location.href = "signup.html"; // Assuming get started button leads to sign up
  });
});


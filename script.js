// Variables
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector("#nav");
const toggleIcon = document.querySelector("#toggle-icon");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const textBox = document.querySelector("#textbox");

//dark mode styles
function darkMode() {}

// Switches theme dynamically
function switchTheme(e) {
  if (e.target.checked) {
    //returns the root Element of the document(html)
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.removeAttribute("data-theme");
    lightMode();
  }
}

// Event listeners
toggleSwitch.addEventListener("change", switchTheme);

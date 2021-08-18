// Variables
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector("#nav");
const toggleIcon = document.querySelector("#toggle-icon");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const textBox = document.querySelector("#text-box");

//Dark mode styles
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  image1.setAttribute("src", "./img/undraw_proud_coder_dark.svg");
  image2.setAttribute("src", "./img/undraw_feeling_proud_dark.svg");
  image3.setAttribute("src", "./img/undraw_conceptual_idea_dark.svg");
}

// Light mode styles
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.remove("fa-moon");
  toggleIcon.children[1].classList.add("fa-sun");
  image1.setAttribute("src", "./img/undraw_proud_coder_light.svg");
  image2.setAttribute("src", "./img/undraw_feeling_proud_light.svg");
  image3.setAttribute("src", "./img/undraw_conceptual_idea_light.svg");
}

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

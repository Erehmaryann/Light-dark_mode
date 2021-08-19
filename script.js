// Variables
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector("#nav");
const toggleIcon = document.querySelector("#toggle-icon");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const textBox = document.querySelector("#text-box");

//Dark or Light theme Images
function imageMode(color) {
  image1.setAttribute("src", `./img/undraw_proud_coder_${color}.svg`);
  image2.setAttribute("src", `./img/undraw_feeling_proud_${color}.svg`);
  image3.setAttribute("src", `./img/undraw_conceptual_idea_${color}.svg`);
}

function toggleModes(isDark) {
  // Dark mode
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageMode("dark") : imageMode("light");
}

// Switches theme dynamically
function switchTheme(e) {
  if (e.target.checked) {
    //returns the root Element of the document(html)
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleModes(true);
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem("theme");
    toggleModes(false);
  }
}

// Event listeners
toggleSwitch.addEventListener("change", switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleModes(true);
  } else {
    toggleModes(false);
  }
}

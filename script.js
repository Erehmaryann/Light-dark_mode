// Variables
const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switches theme dynamically
function switchTheme(e) {
  console.log(e.target.checked);
}

// Event listeners
toggleSwitch.addEventListener("change", switchTheme);

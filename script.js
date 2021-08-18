// Variables
const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switches theme dynamically
function switchTheme(e) {
  if (e.target.checked) {
    //returns the root Element of the document(html)
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

// Event listeners
toggleSwitch.addEventListener("change", switchTheme);

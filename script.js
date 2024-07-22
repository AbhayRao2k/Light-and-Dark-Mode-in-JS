const fullDarkMode = document.querySelector("#full-dark-mode");
const containerDarkMode = document.querySelector("#contained-dark-mode");
const container = document.querySelector(".container");

const isFullDarkMode = JSON.parse(localStorage.getItem("fullDarkMode"));
const isContainerDarkMode = JSON.parse(
  localStorage.getItem("containerDarkMode")
);

if (isFullDarkMode) {
  fullDarkMode.checked = true;
}

if (isContainerDarkMode) {
  containerDarkMode.checked = true;
}

toggleFullDarkMode();
toggleDarkMode();

fullDarkMode.addEventListener("change", () => {
  // console.log(fullDarkMode.checked) // --> To check whether the code works
  toggleFullDarkMode();

  // containerDarkMode.checked = fullDarkMode.checked;
  toggleDarkMode();
});

/* Refactored these if else conditionals into a function and
   reduced the lines of code */

function toggleFullDarkMode() {
  // if (fullDarkMode.checked) {
  //   document.body.classList.add("dark");
  //   localStorage.setItem("fullDarkMode", true);
  //   // preventDefault();
  //   // Before, if you toggle Dark Mode, the container was also toggled together
  //   // After adding preventDefault they can be toggled separately
  // } else {
  //   document.body.classList.remove("dark");
  //   localStorage.setItem("fullDarkMode", false);
  //   // preventDefault();
  // }
  toggleTheme(fullDarkMode, document.body, "fullDarkMode");
}

function toggleDarkMode() {
  toggleTheme(containerDarkMode, container, "containerDarkMode");
  // if (containerDarkMode.checked) {
  //   container.classList.add("dark");
  //   localStorage.setItem("containerDarkMode", true);
  // } else {
  //   localStorage.setItem("containerDarkMode", false);
  //   container.classList.remove("dark");
  // }
}

// Refactoring the above conditional statements to make it re-usable

function toggleTheme(checkbox, elementList, localStorageKey) {
  if (checkbox.checked) {
    elementList.classList.add("dark");
    localStorage.setItem(localStorageKey, true);
  } else {
    localStorage.setItem(localStorageKey, false);
    elementList.classList.remove("dark");
  }
}

containerDarkMode.addEventListener("change", () => {
  // console.log(fullDarkMode.checked) // --> To check whether the code works
  toggleDarkMode();
});

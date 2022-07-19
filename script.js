console.log("script running");

const toggle = document.getElementById("toggle-button");
const body = document.querySelector("body");
const nav = document.querySelector("nav");

const currToggleIcon = ["bi-toggle-off", "bi-toggle-on"];
const currMode = ["light", "dark"];
const navbarMode = ["bg-light", "navbar-dark", "bg-dark"];
//changes css variables
const whiteHex = "#fff";
const blackHex = "#39393a";

const bodyVar = document.body.style;

//stores the current mode
function loadStorage() {
  localStorage.setItem("darkmode", "false");
  console.log(`darkmode: ${localStorage.getItem("darkmode")}`);
}
function updateStorage(darkmode) {
  localStorage.setItem("darkmode", darkmode);
  loadColorScheme();
  console.log(`darkmode: ${localStorage.getItem("darkmode")}`);
}
//keeps cards from changing color
function preserveCardText(cards) {
  for (let element = 0; element < cards.length; element++) {
    const card = cards[element];
    if (!card.classList.value.includes("light")) {
      card.classList.add("light");
    }
  }
}
//updates color scheme
function loadColorScheme() {
  //x dark mode, y light mode
  let x = 0;
  let y = 0;
  let darkmode = localStorage.getItem("darkmode");
  const cards = document.getElementsByClassName("card");
  if (darkmode === "true") {
    x = 1;
    y = 0;
    nav.classList.remove(navbarMode[0]);
    nav.classList.add(navbarMode[1]);
    nav.classList.add(navbarMode[2]);
    bodyVar.setProperty("--text-color", whiteHex);
    bodyVar.setProperty("--background-color", blackHex);
  } else if (darkmode === "false") {
    //light mode
    x = 0;
    y = 1;
    nav.classList.add(navbarMode[0]);
    nav.classList.remove(navbarMode[1]);
    nav.classList.remove(navbarMode[2]);
    bodyVar.setProperty("--text-color", blackHex);
    bodyVar.setProperty("--background-color", whiteHex);
  }
  toggle.classList.remove(currToggleIcon[y]);
  toggle.classList.add(currToggleIcon[x]);

  body.classList.remove(currMode[y]);
  body.classList.add(currMode[x]);
  preserveCardText(cards);
}

//toggles dark mode
function toggleDarkMode() {
  let darkmode = localStorage.getItem("darkmode");
  if (darkmode === "true") {
    console.log(darkmode);
    darkmode = "false";
    console.log(darkmode);
  } else {
    darkmode = "true";
  }
  updateStorage(darkmode);
}

toggle.addEventListener("click", (e) => {
  toggleDarkMode();
});

if (!localStorage.getItem("darkmode")) {
  loadStorage();
} else {
  loadColorScheme();
}


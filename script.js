// console.log("script running");

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
}
function updateStorage(darkmode) {
  localStorage.setItem("darkmode", darkmode);
  loadColorScheme();
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
    darkmode = "false";
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

const textdesc = document.getElementById("desc");

const adjectives = [
  "let me introduce myself :)",
  "lifelong learner",
  "tea enthusiast",
  "problem solver",
  "front-end developer",
  "music lover",
  "book lover",
  "welcome!",
];

const adjStart = ["I'm a ", "I'm an "];
let refreshIndex = 0;
//check if character is a vowel
function isVowel(c) {
  return ["a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1;
}
function generateDescription(index) {
  if (index === 0) {
    return adjectives[index];
  } else if (index === adjectives.length - 1) {
    return adjectives[index];
  }
  let prefix;
  const firstC = adjectives[refreshIndex][0];
  if (isVowel(firstC) === false) {
    prefix = adjStart[0];
  } else {
    prefix = adjStart[1];
  }
  return prefix + adjectives[refreshIndex] + ".";
}
function refreshDesc() {
  //if end of list, restart at zero
  if (refreshIndex === adjectives.length - 1) {
    refreshIndex = 0;
  }
  const desc = generateDescription(refreshIndex);
  textdesc.innerHTML = desc;
  refreshIndex++;
}

setInterval(refreshDesc, 3000);

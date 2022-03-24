console.log("script running");

//description at the top of page
const textdesc = document.getElementById("desc");
const toggle = document.getElementById("dark-mode");
const body = document.querySelector("body");
//css variables
const root = document.documentElement;


const adjectives = [
  "lifelong learner",
  "tea enthusiast",
  "problem solver",
  "technology geek",
  "music lover",
  "book lover",
  "welcome!"
];
const adjStart = ["I'm a ", "I'm an "];
let refreshIndex = 0;

function isVowel(c) {
  return ["a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1;
}
// function refreshDelete() {
//   console.log("delete");
//   textdesc.style.animationName = "delete";
// }
// function refreshDesc() {
//   setTimeout(refreshDelete, 3000);
  
//   let prefix;
//   const character = adjectives[refreshIndex][0];
//   //console.log(character)
//   //console.log(isVowel(character))
//   if (refreshIndex === adjectives.length - 1) {
//     refreshIndex = 0;
//   }
//   if (isVowel(character) === false) {
//     prefix = adjStart[0];
//   } else {
//     prefix = adjStart[1];
//   }
//   textdesc.innerHTML = prefix + adjectives[refreshIndex] + ".";
//   refreshIndex++;
//   textdesc.style.animationName = "typing";
//   console.log("name changed");
// }

// setTimeout(function(){ textdesc.innerHTML = "let me introduce myself :)"; }, 5000);

// setInterval(refreshDesc, 8000);

let x = 0;
let y = 1;
const currToggleIcon = ["fa-toggle-on", "fa-toggle-off"];
const currMode = ["light", "dark"];


root.style.setProperty('--cursorcolor', "#39393a")

function toggleDarkMode() {
  // console.log(x);
  // console.log(y);
  toggle.classList.remove(currToggleIcon[x]);
  toggle.classList.add(currToggleIcon[y]);

  body.classList.remove(currMode[x]);
  body.classList.add(currMode[y]);
  if (x === 0) {//dark
    x = 1;
    y = 0;
    root.style.setProperty('--cursorcolor', "#FFF8F0");
  } else if (x === 1) {//light
    x = 0;
    y = 1;
    root.style.setProperty('--cursorcolor', "#39393a");
    
  }
}
toggle.addEventListener("click", e => {
  toggleDarkMode();
});

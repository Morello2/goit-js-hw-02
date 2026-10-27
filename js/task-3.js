"use strickt";

function checkForSpam(message) {
  if (
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale")
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam("SpAm"));
console.log(checkForSpam("Not for salE"));
console.log(checkForSpam("Lost wrong word"));
console.log(checkForSpam("NOTASPAMMM"));
console.log(checkForSpam("fgd DFDS"));
console.log(checkForSpam("SPA M dsdc"));
console.log(checkForSpam("SAlesaLE"));

"use strickt";

function formatMessage(message, maxLength) {
  if (maxLength >= message.length) {
    return message;
  } else {
    return message.slice(0, maxLength) + "...";
  }
}
console.log(formatMessage("message", 5));
console.log(formatMessage("message", 7));
console.log(formatMessage("message fault", 10));
console.log(formatMessage("message fault", 12));
console.log(formatMessage("message fault", 15));
console.log(formatMessage("message seccessfully", 20));

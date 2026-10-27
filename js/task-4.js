"use strickt";

function getShippingCost(country) {
  switch (country) {
    case "China":
      return "Cost of delievery is 100 credit";
    case "Chile":
      return "Cost of delievery is 200 credit";
    case "Australia":
      return "Cost of delievery is 300 credit";
    case "Jamaica":
      return "Cost of delievery is 400 credit";
    default:
      return "Sorry, there is no delivery to your country";
  }
}
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("USA"));
console.log(getShippingCost("Germany"));

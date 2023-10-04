const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';

const country = 'RSA'; // Set the user's location
const currency = 'R'; // Set the user's currency
const customers = 1; // Set the number of customers

let shipping = null;
let totalCost = 0;

// Calculate item costs
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * 0; // Assume 'NONE_SELECTED' means 0
const batteries = 35 * 2;
const pens = 5 * 0; // Assume 'NONE_SELECTED' means 0

totalCost = shoes + toys + shirts + batteries + pens;

if (country === 'RSA' || country === 'NAM') {
  if (totalCost >= 1000 && customers === 1) {
    shipping = 0;
} 
  else {
    shipping = location === 'RSA' ? 400 : 600;
  }
} 

else if (country === 'NK') {
  console.log(BANNED_WARNING);
} 

else {
  shipping = 800;
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
} 

else {
  console.log('Price:', currency, totalCost + shipping);
}
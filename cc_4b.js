
const products = [
  { sku: "JA-345", name: "Slurpee",      category: "snack", price: 5.45, inventory: 6 },
  { sku: "RO-856", name: "Phone",     category: "electronics",     price: 2,   inventory: 15},
  { sku: "NV-409", name: "Pear", category: "groceries",   price: 3,    inventory: 34 },
  { sku: "MZ-122", name: "Diamonds",   category: "Jewlery",   price: 500,    inventory: 30 },
  { sku: "FR-592", name: "Mouse",  category: "electronics", price: 15,   inventory: 8 },
];

console.log( JSON.parse(JSON.stringify(products)));

for (let product of products) {
  let rate = 0;
  switch (p.category) {
    case "electronics": rate = 0.40; break;
    case "jewlery":     rate = 0.25; break;
    case "groceries":
    case "snack":   rate = 0.50; break;
    default:            rate = 0;
  }
  p.promoPrice = Number((p.price * (1 - rate)).toFixed(2));
}

console.log(JSON.parse(JSON.stringify(products)));





function extraDiscountFor(customerType) {
  if (customerType === "student") return 0.09;  // +9%
  else if (customerType === "senior") return 0.012; // +12%
  return 0; // regular/other
}; 



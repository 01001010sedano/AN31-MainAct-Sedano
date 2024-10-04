// My store
const nameStorage = "Sedano's Devices";
const locationStorage = "Tagaytay";
const storageCap = 500;

let products = [
  { productName: "Macbook Pro M3", productPrice: 104990, productQuantity: 50 },
  { productName: "Iphone 16 pro max 256gb", productPrice: 84990, productQuantity: 100 },
  { productName: "Ipad pro 13-inch wifi-cellular 512gb", productPrice: 122990, productQuantity: 80 }
];


function inventoryCheck() {
  const totalProducts = products.reduce((sum, product) => sum + product.productQuantity, 0);
  if (totalProducts > storageCap) {
    console.log("My Storage is full.");
  }
  return totalProducts;
}


function addP(productName, productPrice, productQuantity) {
  const totalProducts = inventoryCheck();
  if (totalProducts + productQuantity <= storageCap) {
    products.push({ productName, productPrice, productQuantity });
    console.log(`${productName} added. Total Products: ${totalProducts + productQuantity}`);
  } else {
    console.log(`Cannot add ${productName}. My storage is full.`);
  }
}


function removeP(productName, quantity) {
  const product = products.find(p => p.productName === productName);
  if (product && product.productQuantity >= quantity) {
    product.productQuantity -= quantity;
    console.log(`Updated ${productName} Quantity: ${product.productQuantity}`);
  } else if (!product) {
    console.log(`${productName} not found in inventory.`);
  } else {
    console.log(`Not enough ${productName} to remove ${quantity}.`);
  }
}


function getExpensiveP() {
  let mostExpensive = products[0];
  for (let product of products) {
    if (product.productPrice > mostExpensive.productPrice) {
      mostExpensive = product;
    }
  }
  console.log(`Our Most Expensive Product: ${mostExpensive.productName}`);
  return mostExpensive;
}


function ctiv() {
  const totalValue = products.reduce((sum, product) => sum + (product.productPrice * product.productQuantity), 0);
  console.log(`Inventory Value: ${totalValue}`);
  return totalValue;
}


function restocking(productName, threshold) {
  const product = products.find(p => p.productName === productName);
  if (product && product.productQuantity < threshold) {
    product.productQuantity += 20;  // Restock by 20 units
    console.log(`Restocked ${productName}. Stock is now : ${product.productQuantity}`);
  }
}



console.log(`Store Name: ${nameStorage}`);
console.log(`Store Location: ${locationStorage}`);
console.log(`Total Number of Products: ${inventoryCheck()}`);
console.log(`Total Inventory Value: ${ctiv()}`);
getExpensiveP();



console.log(`Total Number of Products after operations: ${inventoryCheck()}`);
ctiv();
getExpensiveP();

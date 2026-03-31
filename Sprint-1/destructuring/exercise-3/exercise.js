let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function receipt(arr) {
  let totalPrice = 0;
  let subTotal = 0;
  let totals = "";
  for (let i = 0; i < order.length; i++) {
    const { itemName, quantity, unitPricePence } = arr[i];

    subTotal = unitPricePence * quantity;
    let unitPricePenceAsCash = unitPricePence / 100;
    unitPricePenceAsCash = unitPricePenceAsCash.toFixed(2);
    totalPrice += subTotal;

    totals = quantity + itemName + unitPricePenceAsCash;
    //  totals = `${quantity}     ${itemName}        ${unitPricePenceAsCash}`

    console.log("%c", totals);
  }

  console.log(` total ${totalPrice}`);
}
console.log(receipt(order));

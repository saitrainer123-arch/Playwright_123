const apple: { color: string; price: number; discount: boolean } = {
  color: "red",
  price: 55,
  discount: true
};

// Updating values
apple.color = "yellow";
apple.price = 200;
apple.discount = false;

// Printing output
console.log("fruit color:", apple.color);
console.log("fruit price:", apple.price);
console.log("fruit discount:", apple.discount);
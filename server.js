  
  const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello there Welcome!');
});

app.get('/greetings/:name',(req, res) => {
res.send('Hello there Kevin Welcome!');
}); 


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



app.get('/roll/:number', (req, res) => {
    const number = req.params.number;
    
    // Check if parameter is a valid number
    if (isNaN(number) || number.includes('.')) {
        return res.send('You must specify a number.');
    }
    
    const num = parseInt(number);
    
    // Check if number is positive
    if (num <= 0) {
        return res.send('You must specify a positive number.');
    }
    
    // Generate random number between 0 and the input number
    const result = Math.floor(Math.random() * (num + 1));
    res.send(`You rolled a ${result}.`);
});

module.exports = app;


    const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];






app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index);
    //Checks to see if index is valid and respond to that item
    if (index >= 0 && index < collectibles.length) {
        res.send(`Collectible: ${collectibles[index].name}, Price: $${collectibles[index].price}`);
    } else {
        res.status(404).send('Collectible not found');
    }
});






  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];


app.get('/shoes', (req, res) => {
    const { minPrice, maxPrice, type } = req.query;
    
    let filteredShoes = [...shoes];
    
    // Filter by min-price if provided
    if (minPrice && !isNaN(minPrice)) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseFloat(minPrice));
    }
    
    // Filter by max-price if provided
    if (maxPrice && !isNaN(maxPrice)) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseFloat(maxPrice));
    }
    
    // Filter by type if provided
    if (type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type.toLowerCase() === type.toLowerCase());
    }
    
    // Respond with filtered list or full list if no filters applied
    res.json(filteredShoes);
});

module.exports = app;




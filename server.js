const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get('/submit-purchase', (req, res) => {
  const { products, totalPrice, name, surname, address, email } = req.query;

  const purchase = {
    products: JSON.parse(products),
    totalPrice,
    name,
    surname,
    address,
    email,
  };

  console.log('New Purchase:', purchase);
  res.send('Purchase submitted successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

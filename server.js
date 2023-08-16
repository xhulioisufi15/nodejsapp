const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const databaseURL = 'https://ecommerce-project-eb2e6-default-rtdb.europe-west1.firebasedatabase.app/orders.json';

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use(cors());

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

  axios.post(databaseURL, purchase)
  .then(response => {
    res.send('Order created!');
  })
  .catch(error => {
    console.error('Error creating order:', error);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

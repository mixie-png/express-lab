const express = require("express");
const app = express();
const port = 3000;
const cartItems = require("./cartItem-routes");

const cors = require('cors');
app.use(cors());

app.use("/cart-items", cartItems);
// app.listen(port, () => console.log(`Listening on port: ${port}.`));

app.get('/cart-items/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});
 
app.listen(3000, function () {
  console.log(`CORS-enabled web server listening on port: ${port}.`)
});

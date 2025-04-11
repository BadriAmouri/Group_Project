export { default as Dashboard } from "./Dashboard";
export { default as Products } from "./Products";
export { default as AddProduct } from "./AddProduct";
export { default as SingleProduct } from "./SingleProduct";
export { default as Customers } from "./Customers";
export { default as SingleCustomer } from "./SingleCustomer";
export { default as Orders } from "./Orders";
export { default as SingleOrder } from "./SingleOrder";

export { default as Settings } from "./Settings";
export { default as Inbox } from "./Inbox";


// index.js

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
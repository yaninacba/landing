const mercadopago = require("mercadopago");
require("dotenv").config(); // Carga variables .env

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
});

exports.handler = async (event) => {
  // ... (código existente)
};
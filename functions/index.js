require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.KEY);

// API

// App Configuration
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Received!!! Boom!!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listening Command
exports.api = functions.https.onRequest(app);

const express = require("express");
const altcha = require("altcha-lib");

var cors = require("cors");

require("dotenv").config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/challenge", async (req, res) => {
  // Create a new challenge and send it to the client:
  const challenge = await altcha.createChallenge({
    hmacKey: process.env.HMAC_KEY,
    maxNumber: 100000, // the maximum random number
  });

  return res.status(200).json(challenge);
});

app.post("/submit", async (req, res) => {
  // Check that captcha has been completed
  if (!req.body.captcha)
    return res
      .status(400)
      .json({ success: false, message: "Captcha challenge not completed" });

  // Validate captcha
  const ok = await altcha.verifySolution(
    req.body.captcha,
    process.env.HMAC_KEY,
  );

  // If captcha is false, return failed challenge
  if (!ok)
    return res
      .status(400)
      .json({ success: false, message: "Captcha challenge failed" });

  return res.status(200).json({ success: true, message: "Captcha completed" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

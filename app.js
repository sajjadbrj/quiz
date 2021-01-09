require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const myDestailsArray = ["Sajjad", "Brj", "09123456789"];

const powerFunc = (base, exp) => (exp == 0 ? 1 : base * powerFunc(base, --exp));

app.get("/", (req, res, next) => {
  res.send(`Hello from ExpressJs`);

  const myDetailsJson = { ...myDestailsArray };

  for (const [key, value] of Object.entries(myDetailsJson)) {
    console.log(`${value}`);
  }
});

app.get("/power", (req, res, next) => {
  res.send(`Power of 10 = ${powerFunc(10, 3)}`);
});

app.listen(PORT, () => {
  console.clear();
  console.log(`Server running on port ${PORT}`);
});

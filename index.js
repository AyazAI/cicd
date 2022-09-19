const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home page");
});

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

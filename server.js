const express = require("express");
const path = require("path");

const app = express();

// Servir arquivos estáticos da pasta dist
app.use(express.static(path.join(__dirname, 'dist')));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.listen(process.env.PORT || 5500, () => console.log("Server is running..."));

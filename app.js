const express = require("express");
const app = express();
const port = 3000;

// Import dei router
const postsRouter = require("./routers/posts");

// Import dei middlewares
const notFound = require("./middlewares/notFound");
const errorsHandler = require("./middlewares/errorsHandler");

// Configurazione asset statici (cartella public)
app.use(express.static("public"));

// Configurazione body-parser per JSON
app.use(express.json());

// Rotte
app.use("/posts", postsRouter);

// Middleware per gestione 404 (rotta non trovata)
app.use(notFound);

// Middleware per gestione errori 500 (deve stare sempre per ultimo)
app.use(errorsHandler);

// Avvio server
app.listen(port, () => {
  console.log(`Server attivo su http://localhost:${port}`);
});

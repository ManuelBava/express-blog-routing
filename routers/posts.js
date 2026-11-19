const express = require("express");

// Router creation
const router = express.Router();

// Index (simulazione errore server-side gestito con try...catch)
router.get("/", (req, res, next) => {
  try {
    // Simulazione di un errore server side
    throw new Error("Errore interno del server durante il caricamento dei post!");

    res.send("Restituisce la lista di tutti i post");
  } catch (err) {
    // Inoltriamo l'errore al middleware dedicato
    next(err);
  }
});

// Show
router.get("/:id", (req, res) => {
  res.send(`Restituisce i dettagli del post con id ${req.params.id}`);
});

// Create (Store)
router.post("/", (req, res) => {
  res.send("Crea un nuovo post");
});

// Update
router.put("/:id", (req, res) => {
  res.send(`Modifica integralmente il post con id ${req.params.id}`);
});

// Modify (Update parziale)
router.patch("/:id", (req, res) => {
  res.send(`Modifica parzialmente il post con id ${req.params.id}`);
});

// Delete
router.delete("/:id", (req, res) => {
  res.send(`Elimina il post con id ${req.params.id}`);
});

module.exports = router;

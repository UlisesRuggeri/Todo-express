const { Router } = require("express");
const router = Router();

let list = [];

router.get("/", (req, res) => {
  res.render("index.ejs", { list });
});

router.get("/new-entry", (req, res) => {
  res.render("new-entry");
});

router.post("/new-entry", (req, res) => {
  const nuevoItem = {
    id: list.length + 1,
    nombre: req.body.todos,
  };
  list.push(nuevoItem);
  res.redirect("/");
});

router.post("/delete-entries", (req, res) => {
  const selectedItems = req.body.selectedItems;
  if (Array.isArray(selectedItems)) {
    list = list.filter((item) => !selectedItems.includes(item.id.toString()));
  }
  res.redirect("/");
});

module.exports = router;

const app = require("./app");

async function main() {
  await app.listen(app.get("port"));
  console.log("escuchando desde la funcion main");
}

main();

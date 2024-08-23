const { crearArhivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs.js");
const colors = require("colors");

console.clear();

/* console.log(process.argv); */

/* console.log(argv); */

crearArhivo(argv.base, argv.listar, argv.hasta)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creada"))
  .catch((err) => console.log(err));

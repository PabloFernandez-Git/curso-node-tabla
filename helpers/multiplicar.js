const fs = require("fs");
const colors = require("colors");

const crearArhivo = async (base, listar = false, hasta = 10) => {
  try {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} X ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("=============".green);
      console.log("Tabla del: ".green, colors.blue(base));
      console.log("=============".green);

      console.log(salida);
    }

    await fs.promises.writeFile(`./salida/tabla-${base}.txt`, salida);

    return `Tabla del ${base}`;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  crearArhivo,
};

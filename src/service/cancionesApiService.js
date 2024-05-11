const db = require("../database/models");

const cancionesService = {
  listarCanciones: async function () {
    try {
      return await db.Cancion.findAll({
        include: [{ association: "medio" }, { association: "genero" }],
      });
    } catch (error) {}
  },
};

module.exports = cancionesService;

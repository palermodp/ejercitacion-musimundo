const db = require("../database/models");

const generoService = {
  listarGeneros: async function () {
    try {
      return await db.Genero.findAll({
        include: [{ association: "generos" }],
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = generoService;

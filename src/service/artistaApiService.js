const db = require("../database/models");

const artistaService = {
  listarArtista: async function () {
    try {
      return await db.Artista.findAll();
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = artistaService;

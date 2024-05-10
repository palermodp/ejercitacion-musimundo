const db = require("../database/models");

const mediosService = {
  listarMedios: async function () {
    try {
      return await db.Medio.findAll();
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = mediosService;

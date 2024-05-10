const generoService = require("../../service/generosApiService");

const genresAPIController = {
  list: async (req, res) => {
    try {
      const generos = await generoService.listarGeneros();
      if (!generos) {
        return res.status(404).send("No se encontraron generos.");
      }
      return res.render("generos", { generos });
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error al intentar buscar los generos.");
    }
  },
};
module.exports = genresAPIController;

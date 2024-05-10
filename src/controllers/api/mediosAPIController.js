const mediosService = require("../../service/mediosApiService");

const mediosAPIController = {
  list: async (req, res) => {
    try {
      const medios = await mediosService.listarMedios();
      return res.render("medios", { medios });
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error al intentar buscar los medios.");
    }
  },
};
module.exports = mediosAPIController;

const cancionesService = require("../../service/cancionesApiService");

const cancionesAPIController = {
  list: async (req, res) => {
    try {
      const canciones = await cancionesService.listarCanciones();
      return res.render("canciones", { canciones });
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error al intentar buscar las canciones.");
    }
  },
};
module.exports = cancionesAPIController;

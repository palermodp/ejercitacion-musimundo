const artistaService = require("../../service/artistaApiService");
const db = require("../../database/models");

const artistasAPIController = {
  list: async (req, res) => {
    try {
      const artistas = await artistaService.listarArtista();
      return res.render("artistas", { artistas });
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error al intentar buscar los artistas.");
    }
  },
  create: async function (req, res) {
    try {
      let artistaNuevo = await artistaService.crearArtista(req.body);
      return res.json(artistaNuevo);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error al intentar crear un artista.");
    }
  },
  update: async function (req, res) {
    try {
      let artistaEditado = await artistaService.editarArtista(req.body, req);
      return res.json(artistaEditado);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error al intentar editar un artista.");
    }
  },
  destroy: async function (req, res) {
    try {
      let artistaEliminado = await artistaService.eliminarArtista(req);
      return res.json(artistaEliminado);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error al intentar eliminar un artista.");
    }
  },
};
module.exports = artistasAPIController;

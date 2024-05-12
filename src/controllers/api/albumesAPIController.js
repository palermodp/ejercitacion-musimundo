const albumService = require("../../service/albumesApiService");

const albumesAPIController = {
  list: async (req, res) => {
    try {
      const albumes = await albumService.listarAlbumes();
      return res.render("albumes", { albumes });
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error al intentar buscar los albumes.");
    }
  },
  detail: async (req, res) => {
    try {
      const artistaId = req.params.id;
      const albumDetail = await albumService.obtenerDetalleAlbum(artistaId);
      return res.render("detalleAlbum", { album: albumDetail });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send("Error al intentar buscar los detalles del álbum.");
    }
  },
};

module.exports = albumesAPIController;

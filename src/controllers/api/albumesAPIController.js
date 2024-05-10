const albumService = require("../../service/albumesApiService");
const db = require("../../database/models");

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
    const artistaId = req.params.id;
    try {
      const album = await db.Album.findOne({
        where: {
          id_artista: artistaId,
        },
        include: [{ association: "artista" }],
      });
      if (!album) {
        return res.status(404).send("Álbum no encontrado");
      }
      return res.render("detalleAlbum", { album });
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error al buscar el álbum.");
    }
  },
};

module.exports = albumesAPIController;

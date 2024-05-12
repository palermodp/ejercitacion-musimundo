const db = require("../database/models");

const albumService = {
  listarAlbumes: async function () {
    try {
      return await db.Album.findAll({
        include: [{ association: "artista" }],
      });
    } catch (error) {
      console.log(error);
    }
  },
  obtenerDetalleAlbum: async function (artistaId) {
    try {
      const album = await db.Album.findOne({
        where: {
          id_artista: artistaId,
        },
        include: [{ association: "artista" }],
      });
      if (!album) {
        return "Error al buscar el detalle del álbum";
      }
      return album;
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error al buscar el álbum.");
    }
  },
};

module.exports = albumService;

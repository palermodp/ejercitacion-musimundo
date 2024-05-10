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
};

module.exports = albumService;

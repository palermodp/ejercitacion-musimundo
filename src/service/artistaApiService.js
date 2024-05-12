const db = require("../database/models");

const artistaService = {
  listarArtista: async function () {
    try {
      return await db.Artista.findAll();
    } catch (error) {
      console.log(error);
    }
  },
  crearArtista: async function (body) {
    try {
      let artistaNuevo = await db.Artista.create({
        nombre: body.nombre,
        created_at: Date.now(),
        updated_at: Date.now(),
      });
      return artistaNuevo;
    } catch (error) {
      console.log(error);
    }
  },
  editarArtista: async function (body, req) {
    try {
      let artistaEditado = await db.Artista.update(
        {
          nombre: body.nombre,
          creacion: body.created_at,
          update: Date.now(),
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      return artistaEditado;
    } catch (error) {
      console.log(error);
    }
  },
  eliminarArtista: async function (req, res) {
    try {
      let artistaEliminado = await db.Artista.destroy({
        where: {
          id: req.params.id,
        },
      });
      return artistaEliminado;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = artistaService;

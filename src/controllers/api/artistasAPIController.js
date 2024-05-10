const artistaService = require("../../service/artistaApiService");

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
  create: (req, res) => {
    return res.send(
      "Puedes agregar un nuevo artista a nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/create/id desde la plataforma POSTMAN"
    );
  },
  update: (req, res) => {
    return res.send(
      "Puedes modifcar el nombre del artista en nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/update/id desde la plataforma POSTMAN"
    );
  },
  destroy: (req, res) => {
    return res.send(
      "Puedes eliminar un artista a nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/delete/id desde la plataforma POSTMAN"
    );
  },
};
module.exports = artistasAPIController;

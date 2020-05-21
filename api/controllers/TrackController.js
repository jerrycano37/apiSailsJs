/*METODO TRAE TODOS LAS MUSICAS*/
module.exports = {
  get: function (req, res) {
    Tracks.find()
      .then(track => {
        if (!track || track.length === 0) {
          return res.send({
            success: false,
            message: 'No hay datos'
          });
        }

        return res.send({
          success: true,
          message: 'Datos encontrados',
          data: track //ENVIAMOS EL MODELO CON TODOS LAS CANCIONES
        });
      })
      .catch(err => {
        sails.log.debug(err);
        return res.send({
          success: false,
          message: 'No se han encontrado datos'
        });
      });
  },

  /*METODO INSERTA UNA CANCION*/
  create: function (req, res) {
    sails.log.debug(req.allParams());
    Tracks.create(req.allParams()).then(() => {
      return res.send({
        success: true,
        message: 'Creado exitoso',
      });
    }).catch((err) => {
      sails.log.debug(err);
      return res.send({
        success: false,
        message: 'No se pudo crear',
      });
    });
  },

  /*METODO ACTUALIZA DATOS DE UNA CANCION*/
  update: function (req, res) {
    sails.log.debug(req.param('id'));
    Tracks.update(req.param('id'), req.allParams()).then((track) => {
      return res.send({
        success: true,
        message: 'Actualizado Exitoso',
        data: track,
      });
    }).catch((err) => {
      sails.log.debug(err);
      return res.send({
        success: false,
        message: 'Error al actualizar'
      });
    });
  },

  /*METODO ELIMINA UNA CANCION*/
  delete: function (req, res) {
    Tracks.destroy(req.param('id')).then((track) => {
      return res.send({
        success: true,
        message: 'Eliminado con exito',
        data: track,
      });
    }).catch((err) => {
      sails.log.debug(err);
      res.send({
        success: false,
        message: 'error al eliminar',
      });
    });
  }
};

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('categorias', {
                                                                                  
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'Name is required',
        }
      }
    },

    id:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

  },
   {timestamps: false},
   {updatedAt: false},
   {createdAt: false}
  );
};
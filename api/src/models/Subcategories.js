const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('subcategories', {
                                                                                  
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'Genero is required',
        }
      }
    },

    // subId:{ 
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },

  },
   {timestamps: false},
   {updatedAt: false},
   {createdAt: false}
  );
};
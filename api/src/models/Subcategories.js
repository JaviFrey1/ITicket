const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('subCategories', {
                                                                                  
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'Genre is required',
        }
      }
    },
    

    catId:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  },
   {timestamps: false},
   {updatedAt: false},
   {createdAt: false}
  );
};
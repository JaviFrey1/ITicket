const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "events",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      artist: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      place: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prize: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tickets: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false },
    { updatedAt: false },
    { createdAt: false }
  );
};

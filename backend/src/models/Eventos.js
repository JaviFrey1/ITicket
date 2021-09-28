const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "evento",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      artista: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lugar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      entradas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      horario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false },
    { updatedAt: false },
    { createdAt: false }
  );
};

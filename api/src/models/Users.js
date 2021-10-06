// const { DataTypes } = require("sequelize");

// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define(
//     "users",
//     {
//       id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },

//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       lastName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       dni: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       birdthay: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       mail: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       isAdmind: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       timestamps: false,
//       createdAt: false,
//       updatedAt: false,
//     }
//   );
// };

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('users', {
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      
    },
    // rol: {
    //   type: DataTypes.ENUM({
    //     values: ["admin","user", "guest"]}),
    //     allowNull: false,
    // },
    // reset:{
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false
    // },
    // ban:{
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false
    // },
    googleId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true
    }   
  });
};
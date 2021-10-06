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

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "users",
    {
      
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reset: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rol: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user',
      },
     googleId: {
        type: DataTypes.STRING
      },
      provider: {
        type: DataTypes.STRING
      },
      displayName: {
        type: DataTypes.STRING
      },
      name: {
        get() {
          return `${this.familyName} ${this.givenName}`;
        },
      },
      emails: {
        
      }
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
};



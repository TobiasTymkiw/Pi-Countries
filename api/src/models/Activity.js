const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "activity",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      duration: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      season: {
        type: DataTypes.ENUM("Winter", "Autumn", "Summer", "Spring"),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

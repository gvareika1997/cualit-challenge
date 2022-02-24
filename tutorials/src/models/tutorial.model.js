const { DataTypes } = require("sequelize");

function model(sequelize) {
  const attributes = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING(64), allowNull: false },
    videoUrl: { type: DataTypes.STRING(256), allowNull: true },
    description: { type: DataTypes.STRING(512), allowNull: true },
    status: {
      type: DataTypes.ENUM("PUBLISHED", "HIDDEN", "DELETED"),
      allowNull: false,
    },
  };

  const options = {
    timestamps: true,
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ["title"],
      },
      {
        unique: false,
        fields: ["status", "title", "description"],
      },
    ],
  };

  return sequelize.define("tutorial", attributes, options);
}

module.exports = model;

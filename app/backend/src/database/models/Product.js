module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      urlImage: DataTypes.STRING,
      stockQty: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "products",
    }
  );

  return Product;
};

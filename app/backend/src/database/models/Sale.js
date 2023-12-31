module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.FLOAT,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "Pendente",
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "sales",
    }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    Sale.belongsTo(models.User, { foreignKey: "sellerId", as: "seller" });
    Sale.hasMany(models.SaleProduct, {
      foreignKey: "saleId",
      as: "productsSold",
    });
  };

  return Sale;
};

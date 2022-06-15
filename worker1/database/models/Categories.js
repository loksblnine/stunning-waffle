module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      default: "nextval('city_city_id_seq'::regclass)"
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'categories',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "categories_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "categories_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
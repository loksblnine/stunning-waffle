module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories_to_post', {
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'posts',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'categories_to_post',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "categories_to_post_category_id_post_id_uindex",
        unique: true,
        fields: [
          { name: "category_id" },
          { name: "post_id" },
        ]
      },
    ]
  });
};

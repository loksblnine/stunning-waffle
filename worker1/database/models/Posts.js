module.exports = function(sequelize, DataTypes) {
  return sequelize.define('posts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      default: "nextval('city_city_id_seq'::regclass)"
    },
    creator: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isoDate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    contentSnippet: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'posts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "posts_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "posts_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
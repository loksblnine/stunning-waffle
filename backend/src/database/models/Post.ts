import {DataTypes, Model, Optional} from "sequelize";
import {sequelize} from "../config/config";

export interface IPost {
  id?: number,
  creator: string,
  link: string,
  title: string,
  isoDate: string,
  content: string,
  content_snippet: string,
  active: boolean
}

export type IPostInput = Optional<IPost, 'creator' & 'link' & 'title' & 'isoDate' & 'content' & 'content_snippet'>;
export type IPostOutput = Required<IPost>;

export class Post extends Model<IPost, IPostInput> implements IPost {
  public id!: number;
  public creator!: string;
  public link!: string;
  public title!: string;
  public isoDate!: string;
  public content!: string;
  public content_snippet!: string;
  public active!: boolean;
}

Post.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    creator: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isoDate: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content_snippet: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    tableName: 'posts',
    schema: 'public',
    timestamps: false,
    sequelize,
    indexes: [
      {
        name: "customer_customer_id_uindex",
        unique: true,
        fields: [
          {name: "customer_id"},
        ]
      },
      {
        name: "customer_pk",
        unique: true,
        fields: [
          {name: "customer_id"},
        ]
      },
    ]
  });

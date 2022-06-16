import {Request, Response} from "express";
import {Post} from "../database/models";
import {Op} from "sequelize";

export const createPost = async (request: Request, response: Response): Promise<void> => {
  try {
    const post: Post = await Post.create(
      request.body
    );
    response.status(201).json(post);
  } catch (e: any) {
    console.log(`backend at ${new Date} [postsController] createPost: `, e.ToString());
    response.status(500).json("Something went wrong");
  }
};

interface WhereType {
  title?: {
    [Op.iLike]: string
  }
}

export const getPosts = async (request: Request, response: Response): Promise<void> => {
  try {
    const page: string = request.params.page;
    const offset: number = 10 * Number(page);
    const where: WhereType = {};
    if (request?.query?.title?.length) {
      where.title = {[Op.iLike]: `%${request.query.title}%`};
    }
    const posts: Post[] = await Post.findAll({
      order: [
        ["id", "ASC"]
      ],
      // @ts-ignore
      where,
      offset,
      limit: 10,
      raw: true
    });
    response.status(200).json(posts);
  } catch (e: any) {
    console.log(e);
    response.status(500).json("Something went wrong");
  }
};
export const getPostById = async (request: Request, response: Response): Promise<void> => {
  try {
    const id: string = request.params.id;
    const customer: Post | null = await Post.findOne({
      where: {
        id
      }
    });
    response.status(200).json(customer);
  } catch (e: any) {
    response.status(500).json("Something went wrong");
  }
};
export const deletePostById = async (request: Request, response: Response): Promise<void> => {
  try {
    const id: string = request.params.id;
    await Post.destroy({
      where: {
        id
      }
    });
    response.status(200).json(`Post #${id} was removed successfully`);
  } catch (e: any) {
    response.status(500).json("Something went wrong");
  }
};
export const updatePostById = async (request: Request, response: Response): Promise<void> => {
  try {
    const id: string = request.params.id;
    const {body} = request;
    await Post.update({
        ...body
      },
      {
        where: {
          id
        }
      });
    const post: Post | null = await Post.findOne({
      where: {
        id
      }
    });
    response.status(200).json(post);
  } catch (e: any) {
    response.status(500).json("Something went wrong");
  }
};

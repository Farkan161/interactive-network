import { Request, Response } from 'express';
import Post from '../models/post';

export const getPosts = async (_req: Request, res: Response): Promise<void> => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    console.error('Error fetching posts:', err);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

export const getSinglePost = async (req: Request, res: Response): Promise<void> => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.status(200).json(post);
  } catch (err) {
    console.error(`Error fetching post with ID ${req.params.id}:`, err);
    res.status(500).json({ error: 'Failed to fetch post' });
  }
};

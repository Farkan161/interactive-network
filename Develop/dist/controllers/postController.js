"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSinglePost = exports.getPosts = void 0;
const post_1 = __importDefault(require("../models/post"));
const getPosts = async (_req, res) => {
    try {
        const posts = await post_1.default.find();
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getPosts = getPosts;
const getSinglePost = async (req, res) => {
    try {
        const post = await post_1.default.findById(req.params.id);
        if (!post) {
            res.status(404).json({ message: 'Post not found' });
            return;
        }
        res.status(200).json(post);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getSinglePost = getSinglePost;

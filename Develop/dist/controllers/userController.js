"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
const getUsers = async (_req, res) => {
    try {
        const users = await User_1.default.find();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getUsers = getUsers;
const createUser = async (req, res) => {
    try {
        const newUser = await User_1.default.create(req.body);
        res.status(201).json(newUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.createUser = createUser;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dateFormat_1 = __importDefault(require("../utils/dateFormat"));
const reactionSchema = new mongoose_1.Schema({
    reactionId: {
        type: mongoose_1.Schema.Types.ObjectId,
        default: () => new mongoose_1.Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => (0, dateFormat_1.default)(timestamp),
    }, // Explicitly cast to bypass Mongoose's type checking
}, {
    _id: false,
    toJSON: {
        getters: true,
    },
});
const postSchema = new mongoose_1.Schema({
    postText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => (0, dateFormat_1.default)(timestamp),
    }, // Explicitly cast to bypass Mongoose's type checking
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
}, {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});
postSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
exports.default = (0, mongoose_1.model)('Post', postSchema);

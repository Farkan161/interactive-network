"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = require("../../controllers/postController");
const router = (0, express_1.Router)();
router.route('/').get(postController_1.getPosts);
router.route('/:id').get(postController_1.getSinglePost);
exports.default = router;

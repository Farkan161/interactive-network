"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../../controllers/userController");
const router = (0, express_1.Router)();
router.route('/')
    .get(userController_1.getUsers)
    .post(userController_1.createUser);
exports.default = router;

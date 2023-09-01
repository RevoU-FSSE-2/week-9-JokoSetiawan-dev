"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes = express_1.default.Router();
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
userRoutes.get("/", user_controller_1.default.findAll);
userRoutes.get("/:id", user_controller_1.default.findId);
userRoutes.post("/", user_controller_1.default.post);
exports.default = userRoutes;

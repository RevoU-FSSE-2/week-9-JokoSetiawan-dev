"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
const user_route_1 = __importDefault(require("./user.route"));
const transaction_route_1 = __importDefault(require("./transaction.route"));
routes.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hello World!",
    });
});
routes.use("/user", user_route_1.default);
routes.use("/transaction", transaction_route_1.default);
exports.default = routes;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControllers_1 = require("../controllers/gamesControllers");
class GameRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesControllers_1.gamesController.list);
        this.router.get('/:id', gamesControllers_1.gamesController.getOne);
        this.router.post('/', gamesControllers_1.gamesController.create);
        this.router.put('/:id', gamesControllers_1.gamesController.update);
        this.router.delete('/:id', gamesControllers_1.gamesController.delete);
    }
}
const gameRouter = new GameRouter();
exports.default = gameRouter.router;

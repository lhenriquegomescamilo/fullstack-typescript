"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_route_1 = require("../api/todo/route/todo-route");
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        todo_route_1.TodoRoutes.init(router);
        app.use("/", router);
    };
    return Routes;
}());
exports.Routes = Routes;

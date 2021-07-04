"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = /** @class */ (function () {
    function Todo(title, priority, id) {
        if (id === void 0) { id = Todo.nextId; }
        this.title = title;
        this.priority = priority;
        this.id = id;
        Todo.nextId++;
    }
    Todo.nextId = 1;
    return Todo;
}());
exports.default = Todo;

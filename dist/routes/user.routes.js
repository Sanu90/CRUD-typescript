"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const router = (0, express_1.Router)();
// api call to create a new user
router.post('/', user_controller_1.createUSer);
// call to get details of all users
router.get('/', user_controller_1.getAllUsers);
// update user by ID
router.put('/:id', user_controller_1.updateUser);
// Delete user by ID
router.delete('/:id', user_controller_1.deleteUser);
exports.default = router;

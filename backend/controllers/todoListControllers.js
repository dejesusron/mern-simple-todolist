import asyncHandler from "express-async-handler";
import Todo from "../models/todoListModel.js";

// @desc: display all of the todo's
// @route: GET /api/todos
// @access: Public
const getTodoList = asyncHandler(async (req, res) => {
    const todos = await Todo.find();

    res.status(200).json(todos);
}); 

// @desc: add a new todo
// @route: POST /api/todos/add
// @access: Public
const addTodoList = asyncHandler(async (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        res.status(400);
        throw new Error("Please add a title field");
    }

    const todo = await Todo.create({
        title,
        description
    });

    res.status(200).json(todo);
}); 

// @desc: update a todo
// @route: PUT /api/todos/update
// @access: Private
const updateTodoList = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        res.status(400);
        throw new Error("Todo not found!");
    }

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedTodo);
}); 

// @desc: delete a todo
// @route: PUT /api/todos/update
// @access: Private
const deleteTodoList = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        res.status(400);
        throw new Error("Todo not found!");
    }

    await todo.deleteOne();

    res.status(200).json({ id: req.params.id });
}); 

export { 
    getTodoList,
    addTodoList,
    updateTodoList,
    deleteTodoList,
};
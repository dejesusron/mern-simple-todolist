import express from "express";
import { 
    getTodoList,
    addTodoList,
    updateTodoList,
    deleteTodoList,
} from "../controllers/todoListControllers.js";

const router = express.Router();

router.get("/", getTodoList);
router.post("/", addTodoList);
router.put("/:id", updateTodoList);
router.delete("/:id", deleteTodoList);


export default router;
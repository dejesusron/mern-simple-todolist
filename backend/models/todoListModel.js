import mongoose from "mongoose";

const todoListSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a text value"],
    },
    description: {
        type: String,
        required: false,
    }
}, {
    timestamps: true
});

const Todo = mongoose.model("Todo", todoListSchema);

export default Todo;
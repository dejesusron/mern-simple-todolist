import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/card/index";
import AddModal from "./components/add-modal/index";

const App = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/todos");
        setTodos(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTodos();
  }, [todos]);

  const card = todos.map((item) => {
    return (
      <Card key={item._id} {...item} />
    )
  });

  return (
    <>
      <div className="w-screen h-screen grid place-items-center">
        <div className="border border-[#333] w-[90%] md:w-2/4 h-auto p-6">
          <h1 className="text-center font-semibold text-2xl text-[#333] mb-6">Simple Todo List</h1>
          <AddModal />
          <div className="h-[400px] overflow-y-scroll pr-2">
            <ul className="grid gap-y-4 ">
              {todos.length ? card : <p className="text-xl text-center pt-4 text-[#333] border-t-2 border-[#333]">No task available</p>}
            </ul>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
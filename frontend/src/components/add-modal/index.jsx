import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

Modal.setAppElement('#root');

const index = () => {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        title: "",
        description: ""
    });

    const modalIsOpen = () => {
        setOpen(true);
    }

    const modalIsClose = () => {
        setOpen(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/todos", values);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }

        modalIsClose();
    }

  return (
    <div>
        <button 
            onClick={modalIsOpen} 
            className="border border-[#333] p-2 w-full bg-[#333] text-[#fff] mb-6 py-4"
        >Add New</button>
        <Modal
            className="h-auto w-[450px] bg-[#fff] border border-[#333] p-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg" 
            isOpen={open}
        >
            <button 
                onClick={modalIsClose} 
                className="h-[30px] w-[30px] grid place-items-center border border-[#333] bg-[#333] absolute top-0 right-0 text-[#fff]"
            >X</button>

            <h1 className="mb-6 text-2xl font-semibold">Add new todo</h1>

            <form onSubmit={handleSubmit} className="grid gap-y-4">
                <input 
                    type="text" 
                    className="border border-[#333] p-2 text-lg" 
                    placeholder="Input title"
                    onChange={(e) => setValues({...values, title: e.target.value})}
                    required
                />
                <input 
                    type="text" 
                    className="border border-[#333] p-2 text-lg" 
                    placeholder="Input description"
                    onChange={(e) => setValues({...values, description: e.target.value})}
                    required
                />
                <button 
                type="submit"
                className="border border-[#333] py-2 bg-[#333] text-[#fff] w-full text-lg"
                >Add</button>
            </form>
       </Modal>
    </div>
  )
}

export default index;
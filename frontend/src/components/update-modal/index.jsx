import { useState } from "react";
import Modal from "react-modal";
import { FaEdit } from 'react-icons/fa';
import axios from "axios";

Modal.setAppElement('#root');

const index = ({ ...item }) => {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        title: item.title,
        description: item.description
    });

    const modalIsOpen = () => {
        setOpen(true);
    }

    const modalIsClose = () => {
        setOpen(false);
    }

    const handleUpdate = (id, event) => {
        event.preventDefault();

        try {
            const res = axios.put(`http://localhost:5000/api/todos/${id}`, values);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }

        modalIsClose();
    }

  return (
    <div className="pt-1">
        <button title="Update item" onClick={modalIsOpen}>
            <FaEdit className="h-[25px] w-[25px] text-[#333]"/>
        </button>

        <Modal
            className="h-auto w-[450px] bg-[#fff] border border-[#333] p-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg" 
            isOpen={open}
        >
            <button 
                onClick={modalIsClose} 
                className="h-[30px] w-[30px] grid place-items-center border border-[#333] bg-[#333] absolute top-0 right-0 text-[#fff]"
            >X</button>

            <h1 className="mb-6 text-2xl font-semibold">Update todo</h1>

            <form onSubmit={(e) => handleUpdate(item._id, e)} className="grid gap-y-4">
                <input 
                    type="text" 
                    className="border border-[#333] p-2 text-lg" 
                    placeholder="Update title"
                    value={values.title}
                    onChange={(e) => setValues({ ...values, title: e.target.value })}
                    required
                />
                <input 
                    type="text" 
                    className="border border-[#333] p-2 text-lg" 
                    placeholder="Update description"
                    value={values.description}
                    onChange={(e) => setValues({ ...values, description: e.target.value })}
                    required
                />
                <button 
                type="submit"
                className="border border-[#333] py-2 bg-[#333] text-[#fff] w-full text-lg"
                >Update</button>
            </form>
       </Modal>
    </div>
  )
}

export default index;
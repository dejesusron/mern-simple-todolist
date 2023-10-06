import { FaTrashCan } from 'react-icons/fa6';
import axios from "axios";
import UpdateModal from "../update-modal/index";

const index = ({ ...item }) => {

    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete?");

        if (confirm) {
            try {
                const res = await axios.delete(`http://localhost:5000/api/todos/${id}`);
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        }
    }

  return (
    <li className="border border-[#333] px-4 py-3 w-full h-max flex justify-between gap-x-2 items-start relative">
        <div className="w-5/6">
            <h1 className="text-[#333] leading-10 text-3xl font-semibold">{item.title}</h1>
            <p className="text-[#333] leading-7 text-xl">{item.description}</p>
            <p className="text-[#333] leading-5 text-sm">{new Date(item.updatedAt).toLocaleDateString()} {new Date(item.updatedAt).toLocaleTimeString()}</p>
        </div>
        <div className="flex gap-x-6 pr-1 pt-2">
            <UpdateModal {...item} />
            <button title="Delete item" onClick={() => handleDelete(item._id)} >
                <FaTrashCan className="h-[25px] w-[20px] text-[#333]"/>
            </button>
        </div>
    </li>
  )
}

export default index;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";

const NameModal = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");

    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        login(name);

        navigate("/hello");
    };

    return (
        <div className="flex justify-center items-center bg-opacity-75 fixed inset-0 h-screen w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
            <div className="border shadow p-6 w-5/6 rounded-3xl bg-white flex flex-col gap-5 justify-center items-center">
                <label>กรอกชื่อ!</label>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 justify-center items-center"
                >
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="Your name..."
                        className="border p-2 rounded shadow"
                        required
                    />
                    <button
                        type="submit"
                        className="border-none block w-20 bg-pink-400 text-white p-2 rounded-full"
                    >
                        OK :3
                    </button>
                </form>
            </div>
        </div>
    );
};
export default NameModal;

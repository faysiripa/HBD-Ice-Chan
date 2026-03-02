import { useState } from "react";
import NameModal from "../components/NameModal";

const Home = () => {
    const [isNameModalOpen, setIsNameModalOpen] = useState(false);

    return (
        <div className="font-mali">
            <div className="fixed inset-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className="flex flex-col justify-center items-center min-h-screen">
                <button onClick={() => setIsNameModalOpen(true)}>
                    <img
                        src="gift.png"
                        className="size-20 mb-5 animate-bounce hover:[animation-play-state:paused] cursor-pointer"
                    />
                </button>

                <p>จิ้มของขวัญ!</p>
            </div>

            {isNameModalOpen && <NameModal />}
        </div>
    );
};
export default Home;

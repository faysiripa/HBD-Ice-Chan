import { useNavigate } from "react-router-dom";

const Heart = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/bless");
    };

    return (
        <div className="font-mali flex flex-col justify-center items-center gap-10 min-h-screen">
            <div className="fixed inset-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <video
                autoPlay
                loop
                muted
                playsInline
                width="100%"
                className="w-3/6 shadow-xl"
            >
                <source src="butt.mp4" type="video/mp4" />
                เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ
            </video>

            <p>ดูโมมงกะส่ายตูดก่อง (≧ᗜ≦ ) 55555</p>

            <form onSubmit={handleSubmit}>
                <button
                    type="submit"
                    className="border-none block w-40 bg-pink-400 text-white p-2 rounded-full animate-bounce hover:[animation-play-state:paused] cursor-pointer"
                >
                    ไปกันต่อ -v-
                </button>
            </form>

        </div>
    );
};
export default Heart;

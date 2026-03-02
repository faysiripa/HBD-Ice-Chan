import { useNavigate } from "react-router-dom";

const Bless = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/select-gift");
    };

    return (
        <div className="font-mali">
            <div className="fixed inset-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className="flex flex-col justify-center items-center gap-10 min-h-screen p-10">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    width="100%"
                    className="w-3/6 shadow-xl border-b border-r border-black"
                >
                    <source src="fairy.mp4" type="video/mp4" />
                    เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ
                </video>
                {/* From Fayfay */}
                <p>°˖➴ ฮายฮายฮายยย .☘︎ ݁˖</p>
                <p>Happy Birthday เพื้อนไอ๊นร๊ ( ദ്ദി ˙ᗜ˙ )</p>
                <p>แก่ขึ้นอีกปีแย๊ว ว๊าาย ค-แค่ก!</p>
                <div className="flex flex-col justify-center items-center">
                    {/* <p>ดีใจที่พวกเราได้มาเป็นเพื่อนกันมากๆนะ</p>
                    <p>ไอซ์อาจจะได้ยินประโยคนี้บ่อยแล้ว</p>
                    <p>แต่พวกเรารู้สึกแบบนั้นจริงๆ จากใจ</p> */}
                    <p>
                        ดีใจที่พวกเราได้มาเป็นเพื่อนกันมากๆนะ
                        ไอซ์อาจจะได้ยินประโยคนี้บ่อยแล้ว
                        แต่เรารู้สึกแบบนั้นจริงๆนะ จากใจ
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    {/* <p>ปีนี้ก็... ฝากตัวด้วยเหมือนเดิมนะ!</p>
                    <p>มีสุขภาพกายใจแข็งแรง</p>
                    <p>มีความสุขสมหวังทุกเส้นทางที่เลือกเดิน</p>
                    <p>คิดสิ่งใดก็เป็นดั่งใจปรารถนาทุกประการ</p>
                    <p>เป็นที่รักของทุกคนเหมือนเดิมต่อไป</p> */}
                    <p>
                        ปีนี้ก็... ฝากตัวด้วยเหมือนเดิมนะ! มีสุขภาพกายใจแข็งแรง
                        มีความสุขสมหวังทุกเส้นทางที่เลือกเดิน
                        คิดสิ่งใดก็เป็นดั่งใจปรารถนาทุกประการ
                        เป็นที่รักของทุกคนเหมือนเดิมต่อไป
                    </p>
                </div>
                <p>แล้วก็... เป็นเพื่อนกันตลอดไปเลยนะ ՞꜆. ̫.꜀՞𐦯</p>
                <p>∘₊✧──── From Fayfay ────✧₊∘</p>
                {/* From Plan */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    width="100%"
                    className="w-3/6 shadow-xl border-b border-r border-black"
                >
                    <source src="plan.mp4" type="video/mp4" />
                    เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ
                </video>
                <p>Happy Birthday ไอ้ไอ้ !!!</p>
                ช้านดีใจมากกกที่ได้มาเป็นเพื่อนกับเทอ อย่างที่บอกเสมอ
                ช้านร้ากเทอนะ
                <p>
                    อยากให้เทอพบแต่สิ่งดี ๆ สังคมดี ๆ
                    ประสบความสำเร็จในเส้นทางที่เลือกเดิน สุขภาพร่างกายแข็งแรง
                    ไม่ปวดหลัง มีความสุขในทุก ๆ วัน
                </p>
                <p>
                    ถ้าเหนื่อยก็อย่าลืมพักบ้าง พวกชั้นอยู่ตรงนี้เสมอ
                    มีอะไรก็มาคุยกันได้
                </p>
                <p>อยู่ด้วยกันไปนาน ๆ นะ ʚ( ʚ ´ ˘) ੭♡</p>
                <p>☆ ⠄⠄⠂⠁⠁⠂⠄⠄⠂⠁From Plan⠁⠂⠄⠄⠂ ⠂⠄⠄⠂☆</p>
                <form onSubmit={handleSubmit}>
                    <button
                        type="submit"
                        className="border-none block w-40 bg-pink-400 text-white p-2 rounded-full animate-bounce hover:[animation-play-state:paused] cursor-pointer"
                    >
                        ไปกันต่ออ
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Bless;

import { useState } from "react";

const SelectGift = () => {
    const [gift, setGift] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const url =
            "https://script.google.com/macros/s/AKfycbzHsu7GA3Gn3IABKrucQmcO1xI00X3ZF5x4hT13wxtp4k2_prazyqjZ1j03H1FskihXdw/exec";
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `Gift=${e.target.gift.value}&Address=${e.target.address.value}`,
        })
            .then((res) => res.text())
            .then((data) => {
                alert(data);
            })
            .catch((error) => console.log(error));

        setGift("");
        setAddress("");
    };

    return (
        <div className="font-mali pb-20">
            <div className="fixed inset-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className="flex justify-center items-center flex-col p-8 gap-10">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <h2 className="text-3xl">Happy Birthday อีกรอบ XD</h2>
                    <p>คราวนี้... ได้เวลาเลือกของขวัญ!!</p>
                </div>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-2 justify-center items-center">
                    <div>
                        <img src="itabag.jpg" />
                        <p className="mt-2">//มีสี: ดำ, ขาว, ม่วง, ฟ้า</p>
                    </div>

                    <div>
                        <img src="novel.jpg" />
                        <p className="mt-2">
                            //พอดีเห็นไอ๊รี เลยคิดว่าอยากอ่านรึเปล่านะ?
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 justify-center items-center">
                    <p>อยากได้อะไรกรอกโลด 'w'</p>
                    <p>หรือจะกรอกนอกเหนือจากในรูปก็ได้นะ</p>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5 justify-center items-center"
                    >
                        <input
                            name="gift"
                            type="text"
                            value={gift}
                            onChange={(e) => setGift(e.target.value)}
                            className="border p-2 rounded shadow"
                            placeholder="พิมกงนิ..."
                        />
                        <label>กรอกที่อยู่ด้วยคับพ้ม ม ม</label>
                        <textarea
                            name="address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            rows={5}
                            className="border p-2 rounded shadow w-5/6"
                            placeholder="ชื่อ ที่อยู่ เบอร์โทร ฮุ่ยเล่ฮุ่ยยยย..."
                        />
                        <button
                            type="submit"
                            className="border-none block w-full bg-pink-400 text-white p-2 rounded-full mt-2"
                        >
                            อะริกาแต้งสึเดสึหวา โฮะ โฮะ โฮะ
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default SelectGift;

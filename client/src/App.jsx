import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectGift from "./pages/SelectGift";
import Home from "./pages/Home";
import Hello from "./pages/Hello";
import Heart from "./pages/Heart";
import Bless from "./pages/Bless";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hello" element={<Hello />} />
                <Route path="/heart" element={<Heart />} />
                <Route path="/bless" element={<Bless />} />
                <Route path="/select-gift" element={<SelectGift />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './pages/app'
import Erro from './pages/erro'
import Agendar from "./pages/agendar";
import Login from "./pages/login";

export default function Navegação(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/agendar" element={<Agendar/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}
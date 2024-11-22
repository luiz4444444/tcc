import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './pages/app'
import Erro from './pages/erro'
import Adm2 from "./pages/adm2";

export default function Navegação(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/adm2" element={<Adm2/>} />
                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}
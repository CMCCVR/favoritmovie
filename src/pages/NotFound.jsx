import React from 'react'
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    let navigate = useNavigate();

    const voltar = () => {
        navigate('/');
    }
    return (
        <div>
            <h1>Pagina não encontrada</h1>

            <button onClick={voltar}>VOLTAR A PAGINA</button>
        </div>
    )
}

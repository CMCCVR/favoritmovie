import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Benvindo ao SVL</h1>
            <nav>
                <Link to='/abaut'>Abaut</Link>
                <Link to='/user'>User</Link>
            </nav>
        </div>
    )
}

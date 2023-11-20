'use client'

import { useState, useEffect } from "react"
import Disneys from './Disneys'

export default function Home() {

    const [disneys, setDisneys] = useState([]);

    useEffect(() => {
        const getDisneys = async () => {
            const response = await fetch('api/disney')
            const disneys = await response.json()
            setDisneys(disneys)
        }

        getDisneys();

    }, []);

    return (
        <div className="text-center bg-black text-white">
            <h1 className="font-bold text-6xl mt-14 mb-6">Disney Movies</h1>
            
            <Disneys disneys={disneys} />
        </div>
    )
}

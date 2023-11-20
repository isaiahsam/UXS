'use client'
import Link from "next/link"
import { useState } from "react"

// export default function SearchDisney( getSearchResults){
export default function SearchDisney({ getSearchResults }) {

    const [query, setQuery] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        // const response = await fetch(`api/disneys/search?query=${query}`)
        const response = await fetch(`https://disney-animation-movies-api.p.rapidapi.com/movies/${query}?details=true`)

        const disneys = await response.json()

        getSearchResults(disneys)
    }
    return(

        <div className="text-center my-20">
            <form onSubmit={handleSubmit}>
                <input className="text-black border-2 border-black rounded-full px-3 py-2" type="text" placeholder="Search Disney film..." value={query} onChange={(e) =>setQuery(e.target.value)} />
                <button className="bg-black text-white rounded-full px-3 py-2 hover:bg-black/60" type="submit"> Search </button>
            </form>

        </div>
    )
}
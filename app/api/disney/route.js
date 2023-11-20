import { NextResponse } from "next/server";

async function fetchDisneys(){
    const response = await fetch('https://disney-animation-movies-api.p.rapidapi.com/movies/all?details=true',
    {
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': '7a8e55b389mshe9ca7ca439cb613p1efec6jsn72b18332a4d4',
            'X-RapidAPI-Host': 'disney-animation-movies-api.p.rapidapi.com'
        }
    })

    const disneys = await response.json();
    // return disneys;
    return Array.isArray(disneys) ? disneys : [disneys];
}

export async function GET(request){
    const disneys = await fetchDisneys()
    return NextResponse.json(disneys)
}
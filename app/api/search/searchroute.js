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

// export async function GET(request){
//     const disneys = await fetchDisneys()
//     const { searchParams } = new URL(request.url);
//     console.log(searchParams.get('query'))
//     const query = searchParams.get('query');

//     const filteredDisney = disneys.filter((disneys) => {
//         return disneys.name.toLowerCase().includes(query.toLowerCase()) || disneys.symbol.toLowerCase().includes(query.toLowerCase())
//     })

//     return NextResponse.json(filteredDisney);
// }

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    // Check if the query is a number
    if (!isNaN(query)) {
        const disney = await fetchDisneyById(query);
        return NextResponse.json([disney]);
    } else {
        return NextResponse.json([]);
    }
}
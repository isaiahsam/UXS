// import Image from "next/image";

// export default function Disneys({ disneys }) {
//   return (
//     <>
//       {/* <ul className="grid grid-cols-4 mx-auto max-w-[1260px] gap-10"> */}
//       <ul className="grid grid-cols-1 mx-auto max-w-[1260px] gap-20">
//         {disneys.map((disney) => (
//           <li key={disney.movieID} className="flex flex-col items-center">
//             <div className="flex items-center justify-center">
//               <Image
//                 src={disney.image}
//                 alt={disney.title}
//                 width={70}
//                 height={70}
//               />
//             </div>
//             <p>{disney.title}</p>
//             {/* <p>{disney.year}</p>
//             <p>{disney.runtime}</p>
//             <p>{disney.genre}</p> */}
//             <p>{disney.summary}</p>
//             {/* <p>{disney.metascore}</p>
//             <p>{disney.rating}</p>
//             <p>{disney.directors}</p>
//             <p>{disney.stars}</p> */}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

import Image from "next/image";

export default function Disneys({ disneys }) {
    return (
        <>
            {/* <ul className="grid grid-cols-4 mx-auto max-w-[1260px] gap-10"> */}
            <ul className="grid grid-cols-1 mx-auto max-w-[1260px] gap-20">
                {disneys.map((disney) => (
                    <li key={disney.movieID} className="flex flex-col items-center mb-4">
                        <div className="flex items-center justify-center">
                            <Image
                                src={disney.image}
                                alt={disney.title}
                                width={70}
                                height={70}
                            />
                        </div>
                        <p>{disney.title}</p>
                        {/* Additional information */}
                        <p>{disney.summary}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}



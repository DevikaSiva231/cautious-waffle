import React from "react";

function Aboutme() {
    return (
        <>
        <div className="relative h-88 flex border border-base-300 bg-base-100">
            {/* Image on the left */}
            <img
                src="https://artincontext.org/wp-content/uploads/2023/10/Claude-Monet-Paintings.jpg"
                alt="Background"
                className="h-full w-1/2 object-cover rounded-l"
            />

            {/* Text container on the right */}
            <div className="w-1/2 flex justify-end items-end p-6">
                <h1 className="text-black text-xl font-bold p-4 rounded">
                Hello! Let get to know about the Artist
                </h1>
            </div>
            </div>
    </>
    )
}

export default Aboutme;
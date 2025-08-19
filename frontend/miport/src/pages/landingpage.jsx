import React from "react";
import { Link } from "react-router-dom";

function Landingpage() {
    return (
        <>
        <div className="grid grid-cols-6 h-screen overflow-hidden p-4">
            <div className="col-span-5">
                <img
                src="https://artincontext.org/wp-content/uploads/2023/10/Claude-Monet-Paintings.jpg"
                alt="Main"
                className="w-full h-full object-cover rounded-lg"
                />
            </div>

            <div className="col-span-1 bg-white">
                <Link to="/"><a>hi</a></Link>
            </div>
            </div>

        </>
    )
}

export default Landingpage;
import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
    return(
        <div className="navbar shadow-sm justify-center">
            <div className="flex space-x-8 items-center">
                {/* Left side items */}
                <Link to="/"><a className="text-sm hover:underline">Home</a></Link>
                <Link to="/aboutme"><a className="text-sm hover:underline">About</a></Link>

                {/* Center title */}
                <Link to="/portfolio"><a className="text-xl font-bold">Portfolio</a></Link>

                {/* Right side items */}
                <Link to="/galleria"><a className="text-sm hover:underline">Galleria</a></Link>
                <Link to="/myart"><a className="text-sm hover:underline">Category</a></Link>
            </div>
        </div>
    )
}

export default Navbar;
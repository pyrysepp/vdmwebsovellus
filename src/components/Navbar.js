import React from 'react'
import {Link} from 'react-scroll'
export const Navbar = () => {
    
    return(
        <nav className="navbar">
            <ul>
                <li><Link>Koti</Link></li>
                <li><Link>turvallisuus</Link></li>
                <li><Link>ympäristöystävällisyys</Link></li>
                <li><Link>Media</Link></li>
            </ul>
        </nav>
    )
}
import React from "react";
import {NavLink} from "react-router-dom";
import navLinks from "./extras/navLinks";

const Navbar = () => {
    return <nav className={"bg-dash-blue rounded-3xl p-12 text-white shadow"} style={{ minWidth: '20rem' }}>
        <h2 className={"font-bold text-5xl"}>Dash.</h2>
        
        <section className={"mt-5 flex flex-col justify-between h-[92%]"}>
            <ul>
                {
                    navLinks.map(({ id, title, link }) => <NavLinkListItem key={id} title={title} linkTo={link} />)
                }
            </ul>
            
            <div className={"text-sm"}>
                <h4>Help</h4>
                <h4 className={"mt-5"}>Contact Us</h4>
            </div>
        </section>
    </nav>
}

const NavLinkListItem = ({ linkTo, title }) => {
    const activeLinkStyle = {
        fontWeight: "bold"
    }
    
    return <NavLink to={linkTo} style={({ isActive }) => isActive ? activeLinkStyle : null}>
        <li className={"flex items-center text-xl mt-10"}>
            <img className={"mr-4"} src={`/icons/navbar/${title}.svg`} alt={title} />
            <h3>{title}</h3>
        </li>
    </NavLink>
}

export default Navbar
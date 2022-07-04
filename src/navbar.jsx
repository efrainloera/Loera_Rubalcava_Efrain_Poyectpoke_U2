import React from 'react'
import { NavLink } from 'react-router-dom'



export const Navbar = () => {
    const activeStyle = {
        activate: "",
        desactivate: ""
    }
    return (
        <div>
            <nav>
                <ul className=" font-bold text-center">
                    <li className="w-full border border-black">
                            <NavLink
                                className={({ isActive }) => (isActive ? activeStyle.activate : activeStyle.desactivate)}
                                to="/"
                            >
                                Bienvenido
                            </NavLink>
                        </li>
                    <li className="w-full border border-black">
                            <NavLink
                                className={({ isActive }) => (isActive ? activeStyle.activate : activeStyle.desactivate)}
                                to="pokemons"
                            >
                                Lista Pokemones
                            </NavLink>
                        </li>
                    <li className="w-full border border-black">
                            <NavLink
                                className={({ isActive }) => (isActive ? activeStyle.activate : activeStyle.desactivate)}
                                to="191508"
                            >
                                Datos del estudiante
                            </NavLink>
                        </li>
                </ul>
            </nav>
        </div>
    )
}
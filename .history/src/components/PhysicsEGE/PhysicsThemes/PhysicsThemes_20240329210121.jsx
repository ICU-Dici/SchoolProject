import React from "react";
import { NavLink } from "react-router-dom";






const PhysicsThemes= () => {
        return (
            <div>
                <div></div>
                <NavLink>classical mechanics</NavLink>
                <NavLink>Electrodynamics</NavLink>
                <NavLink>molecular kinetic theory</NavLink>
                <NavLink>nuclear physics</NavLink>
                <NavLink>theory of relativity</NavLink>
                <NavLink>Optics</NavLink>
            </div>
        )
}

export default PhysicsThemes;
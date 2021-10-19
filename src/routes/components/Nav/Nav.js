import React from "react";
import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <div className="nav">
            <Link to="/ToDoPage" className="NavLink">ToDoPage</Link>
            <Link to="/DatePage" className="NavLink">DatePage</Link>
        </div>
    )
}
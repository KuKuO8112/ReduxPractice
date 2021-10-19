import React from "react";
import { Link } from "react-router-dom";

export default function Title () {
    return (
        <div className="BigTitle">
            <Link to="/" className="TitleLink">KuKuO's ToDoList</Link>
        </div>
    )
}
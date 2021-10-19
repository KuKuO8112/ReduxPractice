import React from "react";

export default function ListItem ({value, toDoDate, toDoOnChange, dateOnChange, onDelete}) {
    return (
        <li className="ListItems">
            <p>ToDo:<input value={value} onChange={toDoOnChange} /></p>
            <p>Date:<input type="date" value={toDoDate} onChange={dateOnChange} /></p>
            <button onClick={onDelete} > x </button>
        </li>
    )
}
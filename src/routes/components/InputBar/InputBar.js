import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { ADD_TO_DO } from "../../../redux/actions/toDoAction";

export default function InputBar () {
    const [value, setValue] = useState("");
    const [toDoDate, setToDoDate] = useState("");
    const dispatch = useDispatch();

    return (
        <form>
            <p>ToDo:<input value={value} onChange={(e) => {setValue(e.target.value)}}/></p>
            <p>Date:<input type="date" value={toDoDate} onChange={(e) => {setToDoDate(e.target.value)}}/></p>
            <button 
                onClick = {() => {
                    dispatch({
                        type: ADD_TO_DO,
                        payload: {
                            value: value,
                            toDoDate: toDoDate
                        }
                    }); 
                    setValue("");
                }}
            >
                新增
            </button>
        </form>
    )
}
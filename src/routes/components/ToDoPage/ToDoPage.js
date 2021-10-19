import React from "react";
import { useSelector, useDispatch } from "react-redux";

import List from "../../../components/List/List";
import ListItem from "../../../components/ListItem/ListItem";

import {
    UPDATE_TO_DO,
    DELETE_TO_DO
} from "../../../redux/actions/toDoAction";

export default function ToDoPage () {
    const data = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <List>
            {data.map((item, index) => {
                return (
                    <ListItem
                    toDoOnChange = {(e) => {
                        dispatch({
                            type: UPDATE_TO_DO,
                            payload: {
                                index: index,
                                value: e.target.value,
                            }
                        });
                    }}
                    dateOnChange = {(e) => {
                        dispatch({
                            type: UPDATE_TO_DO,
                            payload: {
                                index: index,
                                toDoDate: e.target.toDoDate
                            }
                        });
                    }}
                    onDelete = {(e) => {
                        dispatch({
                            type: DELETE_TO_DO,
                            payload: {
                                index: index
                            }
                        });
                    }}
                    key = {item.id}
                    value = {item.value}
                    toDoDate = {item.toDoDate}
                    />
                )
            })}
        </List>
    )
}
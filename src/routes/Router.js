import React from "react";
import { HashRouter, Route, Switch} from "react-router-dom";
import ToDoPage from "./components/ToDoPage/ToDoPage";
import DatePage from "./components/DatePage/DatePage";
import Nav from "./components/Nav/Nav";
import InputBar from "./components/InputBar/InputBar";
import Title from "../components/Title/Title";

export default function Router () {
    return(
        <HashRouter>
            <Title/>
            <Nav/>
            <InputBar/>
            <Switch>
                <Route exact path="/ToDoPage" component={ToDoPage}/>
                <Route path="/DatePage" component={DatePage}/>
            </Switch>
        </HashRouter>
    )
}
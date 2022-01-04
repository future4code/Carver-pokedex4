import React from "react"
import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom"
import HomePage from '../Pages/HomePage'
import Pokedex from '../Pages/Pokedex'
import DetalhePokemon from '../Pages/DetalhePokemon'

const RouteApp = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = {'/'}>
                    <HomePage />
                </Route>

                <Route exact path = {'/pokedex'}>
                    <Pokedex />
                </Route>

                <Route exact path = {`/pokemon/`}>
                    <DetalhePokemon />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default RouteApp
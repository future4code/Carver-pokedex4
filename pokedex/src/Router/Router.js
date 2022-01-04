import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailsPokemons from "../Pages/DetailsPokemons";
import HomePage from "../Pages/HomePage";
import Pokedex from "../Pages/Pokedex";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/pokedex"}>
          <Pokedex />
        </Route>
        <Route exact path={"/details/:name"}>
          <DetailsPokemons></DetailsPokemons>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

import React from "react";
import Router from "./Router/Router";
import GlobalState from "./Context/GlobalState";

export default function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

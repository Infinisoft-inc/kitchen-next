import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./component/button";

const app = document.getElementById( "app" );
ReactDOM.hydrateRoot( app, <Button /> );

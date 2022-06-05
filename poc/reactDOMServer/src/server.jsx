import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import Button from "./component/button";

const app = express();

app.use( express.static( path.resolve( __dirname ) ) );
console.log(`path.resolve( __dirname, "server" )`, path.resolve( __dirname ))
app.get( "/*", ( req, res ) => {
    const reactDom = renderToString( <Button /> );

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate( reactDom ) );
} );

app.listen( 2048 );

function htmlTemplate( reactDom ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>

        <body>
            <div id="app">${ reactDom }</div>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}

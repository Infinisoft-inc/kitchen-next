const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./app');

const AppServer = () =>
  ReactDOMServer.renderToStaticMarkup(
    <html>
      <head>
        <script src="server/main.js" async></script>
      </head>
      <body>
        <div id="root">
          <App />
        </div>
      </body>
    </html>,
  );

module.exports = AppServer;

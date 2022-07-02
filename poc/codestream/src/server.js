const express = require('express');
const fs = require('fs');
const path = require('path');
const { createRoot } = require('react-dom');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('SERVER STARTED AT PORT: ' + PORT);
});

// serve html page
app.get('/', (req, res) => {
  try {
    // res.sendFile(__dirname + "/public/index.html");
    // res.writeHead(206, headers);



    const codeStream = fs.createReadStream(result);
    codeStream.pipe(res);
  } catch (err) {
    res.status(500).send('internal server error occurred');
  }
});


const runReactServer = () => {
  const root = React.createElement('div');
  const Component = React.lazy(() =>
    import(/* webpackChunkName: 'Component' */ requets.Params),
  );

  return  createRoot(root, <Component />)

}
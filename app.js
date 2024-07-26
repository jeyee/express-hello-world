const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));
app.get("/main", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Something went wrong</title>
  </head>
  <body>
    <h1>Oops...something went wrong!</h1>
    <section>
      Our engineers are working hard to fix this issue. Thank you for your patience!
      -Baya.co
    </section>
  </body>
</html>
`

const http = require("http");

const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer(async (req, res) => {
  try {
    const response = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Test</title>
      </head>
      <body>
        Hello
      </body>
      </html>`;
    res.writeHead(200);
    res.end(response);
  } catch (e) {
    console.log(e);
    res.writeHead(500);
    res.end("Ah!");
  }
});

console.log("server started on " + PORT);

server.listen(PORT);

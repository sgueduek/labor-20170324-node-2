const http = require ('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
        res.end(`
        <!doctype html>
        <html>
            <html>
            <meta charset="utf-8">
            <title>Hello Universe</title>
        </head>

        <body>
            <h1>Hello Universe!</h1>
            <h2>The current time is ${new Date()}</h2>
        </body>
    </html>

        `);

});

server.listen(PORT, (err) => {
    if (err){
        return console.error(err.message);
    }
    console.log(`Server is listening on port ${PORT} ....`);
});
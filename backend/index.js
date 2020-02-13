const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const PORT = 3000;

const agency_list = require("./agencias");

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.get("/api/agency", (req, res) => {
    return res.jsonp(agency_list);
});

server.listen(PORT, () => {
    console.log("JSON Server is running");
});
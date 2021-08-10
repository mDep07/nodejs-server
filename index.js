const http = require('http');
const Routes = require('./routes/routes');

const requestListener = (req, res) => {
  //const path = url.parse(req.url, true);
  //console.log(req.url, path, util.inspect(path.query));
  Routes(req.url, res);
};

const server = http.createServer(requestListener);

server.listen(8000, 'localhost', () => console.log('Server running'));

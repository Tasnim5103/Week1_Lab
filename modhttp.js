var http = require('http');

var test = http.createServer ((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
  })

  test.listen(5000, () => {
      console.log('server running');
  });







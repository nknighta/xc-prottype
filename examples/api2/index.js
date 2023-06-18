const http = require('http');
 http.get('http://127.0.0.1:8080/', (resp) => {
  let data = '';
   resp.on('data', (chunk) => {
    data += chunk;
  });
   resp.on('end', () => {
    console.log(JSON.parse(data));
  });
 }).on("error", (err) => {
  console.log("Error: " + err.message);
});
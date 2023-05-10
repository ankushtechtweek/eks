const express = require('express');
const path = require('path');
const app = require('./app')
const port = process.env.PORT || 80

// Serve static files....
app.use(express.static(__dirname + '/client/dist/ps-app-ui'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/dist/ps-app-ui/index.html'));
});

app.listen(port,()=>{
  console.log(`Server running on Port ${port}`)
});
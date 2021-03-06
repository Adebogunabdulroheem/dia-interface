const express = require('express');

const app = express();

app.use(express.static('./dist/google'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/google/'}
);
});

app.listen(process.env.PORT || 8080);
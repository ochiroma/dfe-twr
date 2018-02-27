const express = require('express');
const app = express();

app.get('/admin', function(req, res) {
  res.sendFile(__dirname + "/admin/index.html");
});

app.get('/admin/config.yml', function(req, res) {
  res.sendFile(__dirname + "/admin/config.yml");
});

app.use(express.static('build'));

// app.use(function (req, res, next) {
//   res.status(404).redirect("/")
// })

app.listen(process.env.PORT || 3000, function () {
  console.log('App started :)')
})
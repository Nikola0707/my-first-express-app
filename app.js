const express = require("express");
const app = express();

// Get Routes
app.get("/about", (req, res) => {
  res.send("Ova e about page");
});

app.get("/profile", (req, res) => {
  res.send("Ova e profile page");
});

app.get("/history", (req, res) => {
    res.send("Ova e history page");
  });
  
// POST, PUT, PATCH Routes
app.post('/profile', function (req, res) {
    res.send('Create profile')
})

app.put('/profile', function (req, res) {
    res.send('Replace profile')
})

app.patch('/profile', function (req, res) {
    res.send('Update profile')
})

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});

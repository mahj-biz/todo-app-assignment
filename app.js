const express = require("express");
const app = express();
const port = 3000;
const homeController = require("./controllers/homeController");

app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html");
// });

app.get("/", homeController);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

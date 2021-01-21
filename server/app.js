const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const apiRouter = require("./routes/apiRouter.js");

app.use(apiRouter);

const port = 3000;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));





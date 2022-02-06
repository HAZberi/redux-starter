const express = require("express");
const cors = require("cors");

const bugRouter = require("./bugRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/bugs", bugRouter);

app.listen(9001, () => {
  console.log(`Listening requests on port 9001`);
});

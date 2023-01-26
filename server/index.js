const express = require("express");
const register = require("@react-ssr/express/register");

const app = express();

(async () => {
  await register(app);

  app.use("/", require("./controllers/home"));
  //app.use("/", require("./controllers/livechart"));
  app.use(express.static("public"));

  app.listen(7777, function () {
    console.log("Server listening on port 7777");
  });
})();

const router = require("express").Router();

const testRoute = router.get("/", function (req, res) {
  res.send(
    '<h2 style="text-align: center; fontWeight: 500; padding: 20px">Welcome to AuthiFi!</h2>'
  );
});

router.use("/", testRoute);

module.exports = router;

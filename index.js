const app = require("./app");
const { startDB } = require("./db");

const port = process.env.PORT || 4000;
app.listen(port, (e) => {
  if (e) {
    console.error(e);
  }
  console.log(
    "============= Started server on port " + port + " ============="
  );
  startDB();
});

const app = require("./app.js");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const PORT = process.env.RUNNING_PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is Running on ${process.env.RUNNING_PORT}`);
});

import app from "./app.js";
import { databaseConnection } from "./db.js";

databaseConnection();
app.listen(3000);
console.log("listening on port 3000");

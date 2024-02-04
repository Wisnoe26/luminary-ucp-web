import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "204.10.192.68",
  user: "root",
  password: "",
  database: "relivedrp",
});

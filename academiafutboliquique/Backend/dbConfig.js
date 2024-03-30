import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "academia_futbol",
  allowExitOnIdle: true,
});

export default pool;

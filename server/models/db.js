const { Pool } = require("pg");

const pool = new Pool({
    user: "shanmukasagar",
    host: "ep-red-grass-a1ch12cb-pooler.ap-southeast-1.aws.neon.tech" ,
    database: "research_forms",
    password: "NIMSforms@123",
    port: 5432,
    ssl: { rejectUnauthorized: false }
});


module.exports =  pool;
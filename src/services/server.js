const express=require('express');
//const mysql=require('mysql');
const sql = require('mssql/msnodesqlv8');
const cors=require('cors');

const app=express()
app.use(cors());

const dbConfig = {
    server:"(localdb)\\Local",
    database: "Leaderboard", 
    options: {
      trustedConnection: true, // Use Windows Authentication (Integrated Security)
      //enableTcp: true ,
      //namedPipe:true
    },
   
  };

  sql.connect(dbConfig)
  .then(() => {
    console.log('Connected to SQL Server database!');
  });

app.get('/check',async(req,res)=>
{
  try {
  const queryResult = await new sql.Request().query('SELECT * FROM Employee ORDER BY Points DESC');
    return res.json(queryResult.recordset);
  } catch (error) {
    console.error('Error executing SQL query:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
);
app.listen(3000,()=>
{
    console.log("Listening to client request");
}
);
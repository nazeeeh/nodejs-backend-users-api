const express = require('express');
const bodyParser = require('body-parser')
const userTables = require('./user-tables');
const app = express();

app.use(bodyParser.json());

app.get('/api/users', (req, res)=>{
    // console.log(userTables);
    
    res.send(userTables);
    
});


//listen to server
const port = process.env.PORT || 4000;
app.listen(port, ()=> {
    console.log(`Server is running at port: ${port}`);
})

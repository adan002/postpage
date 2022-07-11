const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const {getViews, createViews} = require('./controller')
//end point

app.get("/api/views", getViews);
app.post("/api/views", createViews)


app.listen(4004, console.log('grooving on port 4004')) 


// deleteViewsupdateViews}
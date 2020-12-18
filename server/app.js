const { response } = require('express');
const express=require('express');
const mongoose = require('mongoose');
const app=express();
//const PORT = process.env.PORT || 5000;
const {MONGOURI}=require('./config/keys');

require('./models/user')
 

require('./models/post')


app.use(express.json());
app.use(require('./routes/auth'))
app.use(require('./routes/post'))


mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology:true

})

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo ")
})


mongoose.connection.on('error',(err)=>{
    console.log("error")
})






const PORT=5000

app.listen(PORT,()=>{
    console.log("Server is running on",PORT)
})
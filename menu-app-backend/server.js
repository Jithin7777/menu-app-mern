require('dotenv').config()

const express=require('express')
const menuRoutes=require('./routes/menuRoutes')
const menuItemRoutes = require('./routes/menuItemRoutes');
const cors=require('cors')
require('./db/connection')
const app=express()

app.use(express.json())
app.use(cors({ origin: 'https://menu-app-frontend-494x.onrender.com' }));
 app.use('/api/menus',menuRoutes)
app.use('/api/menu-items', menuItemRoutes);
const PORT=process.env.PORT || 5005 

app.listen(PORT,()=>{
console.log(`server connected to port ${PORT}`);

})
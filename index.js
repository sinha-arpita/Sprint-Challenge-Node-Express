// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!
require('dotenv').config();
const server=require("./data/server.js");
const PORT= process.env.PORT || 5900;

server.listen (PORT,()=>{
    console.log(`*******************server is listening at the the port ${PORT}************************`);

})
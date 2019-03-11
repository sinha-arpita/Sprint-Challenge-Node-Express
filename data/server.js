const express = require("express");
const server=express();
const ProjectRouter=require("./ProjectRouter.js");
const ActionRouter=require("./ActionRouter.js");
server.use(express.json());
const  cors = require("cors");
server.use(cors());

server.use("/api/projects",ProjectRouter)
server.use("/api/actions",ActionRouter)

server.get ('/', (req, res) => {
    console.log ("hello");
});

module.exports=server
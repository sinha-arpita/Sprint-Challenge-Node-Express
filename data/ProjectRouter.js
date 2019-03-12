const express=require("express")
const ProjectRouter=express.Router();
const projectDb=require("./helpers/projectModel.js")

ProjectRouter.get("/",async(req,res)=>{
     try{
         const projects=await projectDb.get();
         res.status(200).json(projects);
     }
     catch(error){
         res.status(500).json({message:error})
     }
})


ProjectRouter.get("/:id", async(req,res)=>{
    try{
        const id =req.params.id;
        if(id){
            const result= await projectDb.get(id)
                res.status(200).json(result)
            
        }else{
            res.status(400).json({message:"The id doen't exsist"})
        }

    } catch(error){
       res.status(500).json({message:"Can't get the record with the specified id."})
    }
}
)

ProjectRouter.get("/actions/:id", async(req,res)=>{
    try{
        const id =req.params.id;
        if(id){
            const actions=await projectDb.getProjectActions(id)
                res.status(200).json(actions)
            
        }else{
            res.status(400).json({message:"The id doen't exsist"})
        }

    } catch(error){
       console.log(error);
       res.status(500).json({message:"Can't get the record with the specified id."})
    }
})


ProjectRouter.post("/",async(req,res)=>{
    try{
        const newProject=req.body;
       
            if( typeof newProject.name==="string" && typeof newProject.description ==="string"){
                const result =await projectDb.insert(newProject)
                 res.status(201).json(result);
            }else{
                res.status(400).json({message:"your name and description should be in string"})
            }
     

    } catch(error){
                res.status(500).json ({error: error})
                
    }

        
})

ProjectRouter.delete("/:id",async(req,res)=>{
  try{
     const id =req.params.id;
     if (id){
         const result= await projectDb.remove(id)
         res.status(201).json(result)
     }else{
         res.status(400).json({message:"A valid id doesn't exist to be deleted"})
     }

  }
  catch(error){
      console.log(error);
      res.status(500).json({message:"Specified id can't be deleted from the database."})
  }


})

ProjectRouter.put("/:id",async(req,res)=>{
  try{  
      const id=req.params.id;
      const resource=req.body;
      if(id){
        if(resource){
            const result = await projectDb.update(id,resource);
            res.status(200).json({message:"Record successfully updated"})
        }
        
     }else{
      }  res.status(400).json(null)
  }catch(error){
    res.status(500).json({error:"Record can't be updated in the database"})

  }


})


            



module.exports= ProjectRouter
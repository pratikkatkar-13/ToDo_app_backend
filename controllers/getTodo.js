//import todo model
const Todo = require("../models/Todo");

//define route handler
exports.getTodo = async(req,res) => {
    try{
        //fetch all todo iteams from DB
        const todos = await Todo.find({});

        res.status(200).json({
            success:true,
            data:todos,
            message:"entire data fetched successfully",
        });

    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'Server Error',
        })
        
    }
}

//second controllers
exports.getTodoById = async(req,res)=>{
    try{
        //extract todo items on basis of id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})

        //data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found with given id",
            })
        }
        //data for given id found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'Server Error',
        })
    }
}
const logger = (req,res,next)=>{
    console.log("New req at "+new Date());
    next();
}
module.exports = logger;
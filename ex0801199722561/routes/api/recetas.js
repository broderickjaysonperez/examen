var express = require('express');
var router =express.Router();



var recetaCollection =[];
var recetaStruct = {
id:0,
receta:'',
precio:'',
tipo:'',
observacion:'',
estado:''
}

 router.get('/',(req ,res ,next)=>{
    res.status(403).json({msg:"not implemented"});

 });//get


 router.get('/:id',(req ,res ,next)=>{
    res.status(403).json({msg:"not implemented"});

});//get one by one 



 router.post('/',(req ,res ,next)=>{
    res.status(403).json({msg:"not implemented"});
 });//post


 router.put('/:id',(req ,res ,next)=>{

});//put

router.delete('/:id',(req ,res ,next)=>{

});//delete

module.exports = router;
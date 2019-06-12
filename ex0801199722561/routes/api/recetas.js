var express = require('express');
var router =express.Router();

var uuid =require('uuid/v4');

var recetaCollection =[];
var recetaStruct = {
id:0,
receta:'',
precio:'',
tipo:'',
observacion:'',
estado:''
}


recetaCollection.push(
    Object.assign(
    {},
    personaStruct,
    {
        id:uuid(),
        receta:'medica',
        precio:'100',
        tipo:'urgencia',
        observacion:'sangre o',
        estado:'activo'
    }
    )
);



 router.get('/',(req ,res ,next)=>{
   
    res.status(200).json(recetaCollection);

 });//get


 router.get('/:id',(req ,res ,next)=>{
    res.status(403).json({msg:"not implemented"});

});//get one by one 



 router.post('/',(req ,res ,next)=>{

    var newreceta = Object.assign(
        {},
        recetaStruct,
        {id:uuid()},
        );
        recetaCollection.push(newreceta);

        res.status(200).json(newreceta);
  
 });//post


 router.put('/:id',(req ,res ,next)=>{

});//put

router.delete('/:id',(req ,res ,next)=>{

});//delete

module.exports = router;
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
    recetaStruct,
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


//quinto
router.get('/:id',(req ,res ,next)=>{
    if (!req.params.id)return next();
    
         var id=req.params.id;
         var receta =recetaCollection.filter((e,i)=>{
            return (e.id ===id);
         });//filter

    if(receta.length >0 ){
        res.status(200).json(receta[0]);
    }else{
    
        res.status(404).json({});
    }
    //..............................................................
    });//get one by one 



    router.get('/',(req ,res ,next)=>{
     
        //tercero 
        //obtiene colleccion de persona
        res.status(200).json(recetaCollection);
    //....................................
     });//get





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
    var id =req.param.id;
    var modifiedreceta = {};
   var originalreceta = {};

    recetaCollection =recetaCollection.map((e,i)=> {
       if(e.id ===id){
           originalreceta = Object.assign({},e);
           return modifiedreceta =Object.assign({},e,req.body);
       }
       return e;

    }
    );//map

       res.status(200).json({ o: originalreceta, m: modifiedreceta});
});//put





router.delete('/:id',(req ,res ,next)=>{
    var id =req.param.id;
     var deletereceta = {};

     recetaCollection =recetaCollection.filter((e,i)=> {
        if(e.id ===id){
            deletereceta = Object.assign({},e);
            return false;
        }
        return true;

     }
     );//filter
     res.status(200).json({ d: deletereceta, c: recetaCollection});
});//delete

module.exports = router;
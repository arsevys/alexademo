var pg=require('pg');
var config={
	user:'postgres',
	database:'prueba',
	password:'andy',
	host:'localhost',
	port:5432
};

var pool=new pg.Pool(config);
pool.on('error',function(err,client){

console.log(err)
});

class bd {

static guardar(t){


	pool.connect(function(err,client,done){

     client.query(`update voz set texto=$1`,[t],(err,result)=>{

      if(err){
      	console.log(err)
      	return;
      }
     })


	})
}

static consultar(callback){
	pool.connect(function(err,client,done){

		client.query(`select * from voz`,[],(err, result)=>{
          if(err){
          	console.log(err);
          	return;
          }
          console.log(result.rows[0])
           return callback(null,result.rows[0]);

		})
	})
}


}
module.exports=bd;


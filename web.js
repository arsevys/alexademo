'use strict';
 var ale=require('alexa-sdk');
 var bd=require('./bd');
 exports.handler=function(event,context,callback){
  var alexa=ale.handler(event,context)
   alexa.APP_ID='amzn1.ask.skill.cb1968f9-6ae7-4988-9a2f-1f10cfff448a';
   alexa.registerHandlers(handlers);
   alexa.execute();
 };


 var handlers={
 	'LaunchRequest':function(){
 		this.emit(':ask','hello andy');
 	},
 	'web':function(){
 		var self=this;
     var texto=bd.consultar((err,dato)=>{
        var ok=   dato.texto.split(' ').join('<break time="0.1s"/>');
        var g=ok.replace("\n",'<break time="0.1s"/>');
      console.log(g)
     	this.emit(':ask',g)
     
  

     });
     
      

     

 	},
 	'Unhandled':function(){

 		this.emit(':ask',"sorry not understand");
 	}
 }
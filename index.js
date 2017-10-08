'use strict';
var alexa=require("alexa-sdk");
// var body=require("querystring")
exports.handler=function(event,context,callback){
var ale=alexa.handler(event,context);
ale.APP_ID='amzn1.ask.skill.3131a749-5fe3-4cf1-95c4-c7e0a735db48';
ale.registerHandlers(handlers);
ale.execute();

};


var handlers={
   'LaunchRequest':function(){//aqui cuando solo le hablas con el nombre de la intencion
   	//ejemplo alexa ask sample  →solo  invocas el skill nada mas

   	this.emit(':ask','hello andy');
   	
   	console.log(this.attributes['speechOutput'])
   	console.log(this.attributes['speechOutput'])
   	console.log(this.attributes['repromptSpeech'])
   	console.log(event)
   	
   },
   'new':function(){
   	   	console.log(this.event)
   	//    	var b=body.parse(this.context)
   	// console.log(this.context)
   	   	console.log('entro new')
   this.emit('how are you')
   // console.log(this.event.new)
   // 	console.log(this.attributes['repromptSpeech'])
   },
   'how are you':function(){
   	this.emit(':ask','please dont go girl  andy')
   },
   'good':function(){
   	this.emit(':tell','gondwana simple plan')
   }


}
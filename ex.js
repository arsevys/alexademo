var express=require('express')
var app=express();
var bodyparser=require('body-parser')
var bd=require('./bd');
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json({verify: function getRawBody(req, res, buf) {
        req.rawBody = buf.toString()}}));
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
var d=[];


app.get('/',(req,res)=>{

res.sendFile('index.html');


})

app.post('/envia',(req,res)=>{
	console.log(req.body.correo);
	bd.guardar(req.body.correo);
	res.sendStatus(200);
})

app.post('/go',(req,res)=>{


console.log(req.body.request)
// console.log(req.body)
d.push(res)

res.json({
      "version": "1.0",
      "response": {
        "shouldEndSession": true,
        "outputSpeech": {
          "type": "SSML",
          "ssml": "<speak><break time=\"1s\"/>lis<break time=\"1s\"/>ten<break time=\"1s\"/>like a great day!</speak>"
        }
      }
    })
});


app.get('/j',(req,res)=>{
  

d[0].json({
      "version": "1.0",
      "response": {
        "shouldEndSession": true,
        "outputSpeech": {
          "type": "SSML",
          "ssml": "<speak>like a great day!</speak>"
        }
      }
    })


});

app.listen(3000);
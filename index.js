const express = require('express');
const ejs = require("ejs");
const fs = require('fs');
const nodemailer = require('nodemailer')
const fetch = require("isomorphic-fetch");
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request')


var app = express();
var fecha= new Date();


app.use(express.json());
app.use('/public',express.static('public'));
app.use(express.urlencoded({
extended: true
}));

app.set("view engine","ejs");


//funciones
function addjson(elemento){
	//convirtiendo json a objeto javascript
	obj = JSON.parse(fs.readFileSync('archivo.json', 'utf8')); 
    
    obj.elementos.push(elemento); //añadiendo elementos
    json = JSON.stringify(obj); //convirtiendo de nuevo a cadena json
    fs.writeFileSync('archivo.json', json); // guardando info en archivo
};


//vistas
app.get('/', function(request, response){
	response.render('index',{});
});

app.get('/contacto', function(request,response){
	texto = ''
	clase = ''
	response.render('contacto',{texto,clase});

});

//posts

app.post('/contacto',function(req,res){


	//en la variable ip almaceno la ip 
	const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	//en las siguientes variables almaceno fecha y hora	
	var fechayHora = fecha.toString();

//-----------------------------------------------------------------------
	//enviando correo (creando transporter)

	var transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'infodecurriculo@gmail.com',
        pass: 'Eliezer123456789.'
    }
});

	//fin enviando correo (creando transporter)

//---------------------------------------------------------------------------


	console.log(req.body['g-recaptcha-response'])

	  var options = {
    method: 'POST',
    uri: 'https://www.google.com/recaptcha/api/siteverify',
    body: {
      secret: '6LctgjEeAAAAAGaJEtniIqgmXF8VVketQGkviugq',
      response: req.body['g-recaptcha-response'],
    },
    json: true // Automatically stringifies the body to JSON
  };
	
  	
//-----------------------------------------------------------------
	//verificación de reCAPTCHA

  	if (options.body.response){

  		console.log('enviado')
  		texto = 'Mensaje Enviado Exitosamente'
  		clase = 'exito'

  		//-----------------------------------------------------------------	

	//en el siguiente objeto creo un elemento js

	elemento = {
		"nombre" : req.body.nombre,
		"asunto" : req.body.asunto,
		"email" : req.body.email,
		"mensaje": req.body.mensaje,
		"Direccion" : ip,
		"fechayHora" : fechayHora}

	addjson(elemento); //invocacion de funcion
//----------------------------------------------------------------

//-------------------------------------------------------------------------------
	var contenido = {
		from: req.body.nombre,
		to: 'eliezerpulido5@gmail.com, programacion2ais@dispostable.com',
		subject: req.body.asunto,
		text: 'Mensaje enviado por: '+req.body.nombre+"\nAsunto: "+req.body.asunto+
			   '\n'+req.body.mensaje
	}

	transport.sendMail(contenido, (err,info)=>{
		if (err) {
			res.status(500).send(err.message)
		} else {
			console.log('email enviando')
			res.status(200).send.jsonp(req.body)
		}

	})


	addjson(elemento)


  	} else{
  		console.log('no')
  		texto = 'Error al Enviar Mensaje, reCaptcha Incompleto'
  		clase = 'error'

  	}



  	var peticion= request(options)

	 res.render('contacto',{texto,clase});

//---------------------------------------------
//fin verificacion de reCAPTCHA



});



const host  = '0.0.0.0';
const puerto = process.env.PORT || 3000;

app.listen(puerto,host,function(){

	console.log("app corriendo en el puerto: 3000");

});

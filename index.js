var express = require('express');
var ejs = require("ejs");
var fs = require('fs');
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

	response.render('contacto',{});

});

//posts

app.post('/contacto',function(request,response){

	//en la variable ip almaceno la ip 
	const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
	//en las siguientes variables almaceno fecha y hora
	
	var fechayHora = fecha.toString();

	//en el siguiente objeto creo un elemento js
	elemento = {
		"nombre" : request.body.nombre,
		"asunto" : request.body.asunto,
		"email" : request.body.email,
		"mensaje": request.body.mensaje,
		"Direccion" : ip,
		"fechayHora" : fechayHora}

	addjson(elemento); //invocacion de funcion
	response.redirect('/contacto');

});

const host  = '0.0.0.0';
const puerto = process.env.PORT || 3000;

app.listen(puerto,host,function(){

	console.log("app corriendo en el puerto: 8000");

});

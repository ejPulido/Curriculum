<!--ELiezer J. Pulido
	CI:V-27863678

Pagina principal

Resumen

	La siguiente pagina esta estructurada por:

head:
	title: titulo de la pagina
	link: etiqueta que nos permite unir el archivo html con el css
	meta: etiqueta utilizada para cambiar la codificacion de la pag


body:
	header: cabecera
	main: contenido principal
	section: seccion dentro del contenido principal
	footer: pie de pagina 
-->

<!DOCTYPE html>

<html>

<head>
	<title>ELiezer José Pulido | Curriculo</title>
	<!--con las siguientes etiquetas vinculo en archivo css al html y cambio la 
	codificación a UTF-8 para poder hacer uso de los acentos -->
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style/style.css">
	<link rel="icon" type="icon" href="recursos/favicon.png" sizes="24x24">
</head>
 
	<body>
		<!--Describo la cabecera con una imagen y encierro el contenido en un div con el id cabecera para un mejor diseño css  -->
		<header >
			<div id ="cabecera">
			<img src="recursos/perfil.jpg" id="imagenP1" class="flotar">
			<h1 class="flotar">CURRICULO</h1>
		<!--El siguiente div que se encuentra vacio y pertenece a la clase restaurar
			está en la cabecera para ser usado posteriormente en el archivo css, con el fin de poner la imagen y el título de la página una al lado del otro, usando para esto, el modelo de cajas tradicional.
			-->
			<div class="restaurar"></div>	
			</div>
		</header>

		<!--Barra de Navegacion-->

		<nav >
			<div id="menu">
				<!--Cada contenido de la lista, es un enlace a una seccion distinta
					de la pagina u otro documento html que utilizara este como 
					plantilla-->
			<ul>
				<li><a href="index.php">Datos Personales</a></li>
				<li><a href="conocimientos.php">Conocimientos Adquiridos</a></li>
				<li><a href="contacto.php">Contacto</a></li>
			</ul>
			</div>
		</nav>

		<!--El Contenido principal de la pagina, es encerrado en un div para poderlo separar o manejar aparte del body y lograr el dise;o que quiero-->
		<div id="todo"> 
			

			<main>
				
				<section>
					<!--Este section contiene la informacion de la pagina principal
						igualmente encierro cada informacion en un div y dejo al final un div vacio para hacer uso del modelo de cajas tradicional haciendo flotar en el archivo css cada div a la izquierda, se que existe una tecnica llamada modelo de cajas flexibles pero aun no la domino-->
					<div id="imgPagina" class="flotar">
						<img src="recursos/perfil.jpg" id="imagenP2">
					</div>
					
					<div  id = "contenido" class="flotar">
						<h2>Datos Personales</h2>
						<br>
						<H3>Nombre:</H3> 
						<p>Eliezer José Pulido Araujo.</p>
						<br>
						<h3>Fecha de Nacimiento:</h3>
						<p>06 de Septiembre del 2000</p>
						<br>
						<h3>Ciudad:</h3>
						<p>Villa de Cura,Estado Aragua.</p>
						<br>
						<h3>Educación o Estudios Realizados:</h3>
						<p>Bachillerato (Completo). Unidad Educativa Nacional Alberto Smith,Villa de Cura.</p>
						<br>
						<p>Ingeniería en Informática(En Curso). Universidad Nacional Experimental, Rómulo Gallegos (UNERG).</p>		
					</div>	

					<div class="restaurar"></div>
				
				</section>
			</main>
		</div>

		<footer>
			 <!--EL "&copy" agrega la R de copyright, esto es llamado entidades y se encarga de mostrar un caracter especial-->
				<P>&copy;Eliezer Pulido</P>
			

		</footer>

	</body>
</html>
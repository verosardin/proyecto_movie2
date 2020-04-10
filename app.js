const http = require('http');
const fs = require('fs');
const archivosRouter = require('./router');

// VERO ACÁ TE MUESTRO COMO LLAMAR A UNA FUNCIÓN DEL MÓDULO "archivosRouter"
let archivoDePeliculas = archivosRouter.leerMovies();
console.log(archivoDePeliculas);

// Servidor
http.createServer((req, res) => {
    //cada vez que solicito un recurso ejecuto el callback del createServer.
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    console.log(req.url);
    //Este console log no lo ve el cliente, nos va apareciendo a nosotros en la terminal para ir probando mientras el servidor está ejecutando.
    // Route System
    switch (req.url) {
		// Home
		case '/':
			let resultado = archivosRouter.detalleHome();
    		res.end('Home\n' + resultado);
			break;
		// En cartelera. Título, total de pelis, listado de pelis con su titulo y su reseña.
		case '/en-cartelera':
			let restultadoCartelera = archivosRouter.detalleCartelera();
			res.end(restultadoCartelera);
			break;
		case '/mas-votadas':
			let resultadoMasVotadas = archivosRouter.masVotadas();
			res.end(resultadoMasVotadas);
			break;
		case '/sucursales':
			let resultadoSucursales = archivosRouter.sucursales();
		res.end(resultadoSucursales);
			break;
		case '/contacto':
			let contacto =  archivosRouter.contactenos;
		res.end(contacto);
			break;
		case '/preguntas-frecuentes':
			let resultadoFrecuente = archivosRouter.preguntasFrecuentes();
			res.end(resultadoFrecuente);
			break;
		default:
			res.end('404 not found')
	}
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));

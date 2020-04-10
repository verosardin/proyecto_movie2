const fs = require('fs');

let archivosMovies = {
   archivo: './movies.json',
   leerMovies: function(){
      return JSON.parse(fs.readFileSync(this.archivo,'utf-8'));
   },

   archivo2: './theaters.json',
   leerTeatros: function(){
      return JSON.parse(fs.readFileSync(this.archivo2,'utf-8'));
   },

   archivo3: './faqs.json',
   leerFaqs: function(){
      return JSON.parse(fs.readFileSync(this.archivo3,'utf-8'));
   },

   //Función Home
   detalleHome: function(){
      // VERO ACÁ TE CORREGÍ UN ERROR PORQUE LA VARIABLE movies NO ESTABA DEFINIDA, ASÍ QUE INVOQUÉ A LA FUNCIÓN leerMovies()
      // PARA OBTENER EL ARCHIVO COMPLETO Y LUEGO declare la variable movies QUE CONTIENE SÓLO LAS PELÍCULAS..
      
      let archivoMovies = this.leerMovies();
      movies = archivoMovies['movies'];

       const titulo = 'Bienvenidos a DH Movies, el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.\n';
       const totalPeli = '\nTotal de películas en cartelera: (' + movies.length + ')';
       const piePagina =  `\nRecordá que podés visitar las secciones:\n\n• En Cartelera (/en-cartelera)\n• Más Votadas (/mas-votadas)\n• Sucursales (/sucursales)\n• Contacto (/contacto)\n• Preguntas Frecuentes (/preguntas-frecuentes)`;
   	const listadoPelis = '\nListado de películas: ';
   	const pelis = movies.map(movie => movie.title);
       pelis.sort();
       let peliListas = ' \n';
       for (let oneMovie of pelis) {
           peliListas += oneMovie+' \n';
       }
       console.log("titulo + totalPeli + listadoPelis + peliListas+ piePagina");
       return titulo + totalPeli + listadoPelis + peliListas+ piePagina;
    },

   // Funcion cartelera
   detalleCartelera: function (){
      let archivoMovies = this.leerMovies();
      movies = archivoMovies['movies'];
      console.log(movies);
       const tituloCartelera = 'En cartelera\n';
       const totalPelis = '\nTotal de películas en cartelera: (' + movies.length + ')\n'+'\n';
       const listadoDePeliculas = function pelis(){
         for (let i = 0; i<movies.length; i++){
            return movies[i].title + '\n' + movies[i].overview + '\n'
         }
         }
       let titulosConResenias = '';
       movies.forEach(elemento => titulosConResenias += `${elemento.title}\n${elemento.overview}\n\n`);
      return tituloCartelera + totalPelis + listadoDePeliculas(movies)+titulosConResenias;
   },

   //Función más votadas
   masVotadas: function(){
      let archivoMovies = this.leerMovies();
      movies = archivoMovies['movies'];

         let promedioPelis = 0;
   		movies.forEach(elemento => {
   		      promedioPelis += elemento.vote_average
   		});
   		let promedio = Math.round(promedioPelis/movies.length);
   		let masValoradas = movies.filter(movie => movie.vote_average >= 7);
   		let totalPelisRating = masValoradas.length + '\n\n';
   		let masValuadas = ' \n';
       	for (let pelis of masValoradas) {
           masValuadas += pelis.title+' \n'+ pelis.vote_average+' \n'+ pelis.overview+' \n\n';
   	    }
       return 'Más Votadas\n\n' + 'Total de películas: ' + totalPelisRating + 'Rating promedio: ' + promedio+'\n'+ masValuadas;
    },

   //Sucursales
   sucursales: function(){
       let archivoMovies = this.leerTeatros();
       theaters = archivoMovies['theaters'];
       console.log(theaters);
       let totalSalas = 'Total de salas: ' + theaters.length + '\n\n';
       let datosTeatros = '';
       theaters.forEach(elemento => datosTeatros += elemento.name + '\n' + elemento.address + '\n' + elemento.description + '\n\n');
   return 'Nuestras Salas\n\n'+ totalSalas + datosTeatros;
   },

   //Contacto
   contactenos:'Contáctanos \n\n' + '¿Tenés algo para contarnos? \nNos encanta escuchar a nuestros clientes. Si deseas contactarnos podés escribirnos al siguiente mail: dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta, sugerencia o reclamo y será respondido a la brevedad posible. Recordá que también podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes.',

   //Preguntas frecuentes
   preguntasFrecuentes: function(){
      let preguntasFrec = this.leerFaqs();
      faqs = preguntasFrec['faqs'];
      let frecuentes = 'Preguntas Frecuentes\n\nTotal de preguntas: '+ faqs.length + '\n\n';
      let listadoPreguntas = '';
      faqs.forEach(listado => listadoPreguntas += listado.faq_title + '\n' + listado.faq_answer + '\n\n');
      return frecuentes + listadoPreguntas;
   }

}

module.exports = archivosMovies;

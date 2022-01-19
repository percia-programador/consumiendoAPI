
var contenido1=document.querySelector('#contenido')

function traer(){
//Api publica tambien llamadas api para desarrolladores
	/*fetch('texto.txt')
	.then(data => data.text())
	.then(data => console.log(data))
		//contenido1.innerHTML = `${data}`
	*/
	
fetch('https://randomuser.me/api')
  .then( res => res.json())
  .then( data =>{ 
  			console.log(data.results['0'].picture.large) 

		 contenido1.innerHTML = `
		 <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
		 <p>Nombre: ${data.results['0'].name.first}</p>
		 ` 
  		})
  .catch( err => console.log(err) );

	
	
}


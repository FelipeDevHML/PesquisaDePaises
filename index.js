document.getElementById("card").style.setProperty("display", "none", "important")
let input = document.getElementById("pais")
input.addEventListener("keypress", function(ev) {
	if (ev.key === "Enter") {
	  document.getElementById("button-addon2").click();
	}
 });
 

function Procurar(){
	document.getElementById("card").style.setProperty("display", "block", "important")
	let pais = document.getElementById("pais").value
	let finalURL = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
	// console.log(finalURL)
	fetch(finalURL)
		.then(
			function(response){
				return response.json()
			})
		.then(function(data){
				// console.log(data[0])
				// console.log(data[0].capital[0])
				// console.log(data[0].continents[0])
				// console.log(data[0].population)
				// console.log(data[0].flags.png)

				let bandeira = document.getElementById("bandeira")
				let nome = document.getElementById("nome")
				let capital = document.getElementById("capital")
				let populacao = document.getElementById("pop")
				let continente = document.getElementById("conti")

				nome.innerHTML = pais
				capital.innerHTML = data[0].capital[0]
				continente.innerHTML = data[0].continents[0]
				populacao.innerHTML = (data[0].population+" pessoas")
				// bandeira.setAttribute("src", data[0].flags.png)
				bandeira.src = data[0].flags.png
			})
}
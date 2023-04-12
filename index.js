// document.getElementById("card").style.setProperty("display", "none", "important")

const card = document.getElementById("card")
const inputPaises = document.getElementById("pais")

card.style.display = "none"

inputPaises.addEventListener("keypress", function(evento) {
	if (evento.key === "Enter") {
	  document.getElementById("button-addon2").click();
	}
 });

 function procurar() {
	let pais = inputPaises.value
	let finalURL = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
	fetch(finalURL)
		.then(response => {return response.json()})
		.then(data => {
				// console.log(data[0])
				// console.log(data[0].capital[0])
				// console.log(data[0].continents[0])
				// console.log(data[0].population)

				card.style.display = "block"
				inputPaises.style.border = "1px solid #007bff"

				let bandeira = document.getElementById("bandeira")
				let nome = document.getElementById("nome")
				let capital = document.getElementById("capital")
				let populacao = document.getElementById("pop")
				let continente = document.getElementById("conti")

				nome.innerHTML = pais
				capital.innerHTML = data[0].capital
				continente.innerHTML = data[0].continents[0]
				populacao.innerHTML = (data[0].population+" pessoas")
				// bandeira.setAttribute("src", data[0].flags.png)
				bandeira.src = data[0].flags.png
			})
			.catch((error) => {
				// console.log("ERRO!!!: "+error)
				card.style.display = "none"
				window.alert("País não encontrado, certifique-se de colocar o nome em inglês")
				inputPaises.style.border = "1px solid red"
			})
}
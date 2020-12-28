
/* OK
1 grama de cana gera 16 mols (de açúcar pura), 8 mols (de Holocelulose)
 e -2 mols (de lignina) que dá um total de 22 mols.

 22 mols mutiplicandos por R$ 2,57: dá um total de R$ 56,54...

 ou seja para cada 1 grama de cana temos um total de R$ 56,54... 
*/



(function () {
	document.getElementById('inqtd').addEventListener('input', function (e) 
	{
        e.target.value = e.target.value.replace(/\D/g, "")
    });

	document.getElementById('calcular').addEventListener('click', function (e) 
	{
        cal(parseInt(document.getElementById('inqtd').value))
    });
})()



function cal(gramasinf) {
	const resulfinal= document.querySelector(".resultados")
	/* criando uma variavel para pegar o que foi digitado e multiplicar por 22 mols */
    let ummol = gramasinf * 22
	let total = ummol * 2.57

		if (isNaN(gramasinf)) {

			resulfinal.innerHTML = (`Quantidade?`)
		}
		else {
	resulfinal.innerHTML = (`R$${total.toFixed(2)}`) /* '2'  para duas casas apos a virgula*/
}
}

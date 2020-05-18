var curr;
var certas=[]
var dadas=[]
window.onload = function () {

	var tec = localStorage.getItem("tecnica")
	title.innerHTML = "Questionário " + tec
	console.log(tec)
	$.ajax({
		url: '/api/quest/' + tec, //Igual ao que está no app.js
		method: 'get',
		success: function (result, status) {

			console.log(result)
			curr = result
			var str = ''
			for (i in result) {

				str += '<h2>' + result[i].valor + '</h2> ' +
					'<label id="resp"><input id="radio" type="radio" name="' + result[i].p_idpergunta + '" value="' + result[i].opcao1 + '"> ' + result[i].opcao1 + '</label><br />' +
					'<label id="resp"><input id="radio" type="radio" name="' + result[i].p_idpergunta + '" value="' + result[i].opcao2 + '"> ' + result[i].opcao2 + '</label><br />' +
					'<label id="resp"><input id="radio" type="radio" name="' + result[i].p_idpergunta + '" value="' + result[i].opcao3 + '"> ' + result[i].opcao3 + '</label><br />' +
					'<label id="resp"><input id="radio" type="radio" name="' + result[i].p_idpergunta + '" value="' + result[i].opcao4 + '"> ' + result[i].opcao4 + '</label><br />'
			}
			quiz.innerHTML = str;
			$('input:radio').click(function () {
				var radios = document.getElementsByTagName('input');
				for (var i = 0, length = radios.length; i < length; i++) {
					if (radios[i].checked) {
						VerificarRespostas(radios[i].value, $(this).attr('name') )
					}
				}

			})
		},
		error: function () {
			console.log('Error');
		}
	}
	)


}
function VerificarRespostas(resposta, id) {
	var tec = localStorage.getItem("tecnica");

	$.ajax({
		url: '/api/quest/questionario', //Igual ao que está no app.js
		method: 'post',
		data: {
			tec: tec,
			radios: id,
		},
		success: function (result, status) {
			if(!certas.includes(result[0].certa)){
				certas.push(result[0].certa)
			}
			if(!dadas.includes(resposta)){
				dadas.push(resposta)
			}
			console.log(certas)
			console.log(dadas)
			


		},
		error: function () {
			console.log('Error');
		}
	})

}

function VerificarChecked() {
	
	var count = 0;
	for(x in certas){
		if(certas[x]==dadas[x]){
			count+=1
		}
	}

	answer.innerHTML+='Acertou em ' + count + ' perguntas!!'
	alert('Acertou em ' + count + ' perguntas!!')
	console.log(count)
	window.history.go(-1)












}



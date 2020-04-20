window.onload = function () {
	var tec = localStorage.getItem("tecnica")
	$.ajax({
		url: '/api/tec/' + tec, //Igual ao que está no app.js
		method: 'get',
		success: function (result, status) {
			console.log(result)
			var str=''
			for (i in result){
				str+='<p>' + result[i].informação + '</p>'
			}
            gananciosa_t.innerHTML=str;
		},
		error: function () {
			console.log('Error');
		}
	}
	)
}
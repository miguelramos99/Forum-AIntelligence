var idtecnica;
var iduser;
var tec;

window.onload = function () {
	tec = localStorage.getItem("tecnica")
	console.log(tec)
	var username=sessionStorage.getItem('username')
	$('#name').val(username)
	console.log(username)
	if (username == null){
		$("#comment-form").hide();
		$("#avancar").hide();
	}else{
		$("#login").hide();
	}
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
	$.ajax({
		url: '/api/tec/reveal/' + tec, //Igual ao que está no app.js
		method: 'get',
		success: function (result, status) {
			console.log(result)
			var str=''
			for (i in result){
				str+='<div class="comments-area"><div class="comment-list"><div class="single-comment justify-content-between d-flex"><div class="user justify-content-between d-flex"><div class="thumb"><img id="img_user" src="img/user.jpg" alt=""></div><div class="desc"><h5>'+result[i].username+'</h5><p class="date">' + result[i].data +'</p><p class="comment">'+ result[i].mensagem +'</p></div></div></div></div></div>'
			}
			add_comment.innerHTML=str;
			
		},
		error: function () {
			console.log('Error');
		}
	}
	)
	$.ajax({
		url: '/api/tec/id' , //Igual ao que está no app.js
		method: 'post',
		data:{
			username: username,
			tecnica: tec,
		},
		success: function (result, status) {
			console.log(result)
			idtecnica=result[0].idtecnica
			idutilizador=result[0].idutilizador
			console.log(idtecnica)
			console.log(idutilizador)
		},
		error: function () {
			console.log('Error');
		}
	})
}

function postar(){
	$.ajax({
		url: '/api/tec/comment', //Igual ao que está no app.js
		method: 'post',
		data:{	
			idutilizador:idutilizador,
			idtecnica:idtecnica,
			assunto:document.getElementById('subject').value,
			mensagem:document.getElementById('message').value,
			
		},
		success: function (result, status) {
			console.log("TAU")
			window.location="minimax.html"
		},
		error: function () {
			console.log('Error');
		}
	})
}
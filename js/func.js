function obtenerJSON()
{


	//var longitud	= "-58.51548270000";
	//var latitud		= "-34.53920390000";

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else { 
		x.innerHTML = "Geolocation is not supported by this browser.";
	}

	
	function showPosition(position) {


		var longitud = position.coords.latitude;
		var latitud = position.coords.longitude;
		alert(longitud + " y su latitud es:" + latitud);
		/*$.ajax({  type: 'GET',  url: 'query.php?longitud='+"-34.58893560000"+'&latitud='+"-58.49863690000", dataType: 'json' , success: callback   });
		function callback(){
			alert("si");
		}*/

		archivoValidacion = "http://gabrielabdala.com.ar/sos/queryServer.php"; 

			$.getJSON( archivoValidacion, { longitud:longitud , latitud:latitud}) 
			.done(function(respuestaServer) {


				
				alert(respuestaServer.nombre);

			})

			.fail(function(){

				alert("algo fallo");

			});

	}
	
}

/*
function callback(json)
{

	alert("entre a callback");

	alert("traje datos")
	var objetoJSON = $.parseJSON(json);

	archivoValidacion = "query.php" 

	$.getJSON(archivoValidacion).done(function(respuestaServer) {


		
	});





	/*function sayIt(query, language) {
	  var q = new SpeechSynthesisUtterance(query);
	  q.lang = language;
	  q.rate = 1.2;
	  speechSynthesis.speak(q);
	}
	
	function attach(elementId, event, functionName) {
	  var element = document.getElementById(elementId);
	  if (element.addEventListener) {
		element.addEventListener(event, functionName, false);
	  } else if (element.attachEvent) {
		element.attachEvent('on' + event, functionName);
	  } else {
		element['on' + event] = functionName;
	  }
	}
	
	function interpret() {
	  sayIt(document.getElementById('typer').value, 'es-ES');
	}
							
	for(var i = 0; i < objetoJSON.lugares.length; i++)
	{
		//alert(objetoJSON.lugares[i].nombre);
		sayIt(' '+objetoJSON.lugares[i].nombre, 'es-ES');
		attach('activate', 'click', interpret);
	
		//htmlTabla += '<tr><td>' + objetoJSON.lugares[i].nombre + '</td><td>' + objetoJSON.lugares[i].longitud  + '</td><td>' + objetoJSON.lugares[i].latitud  + '</td></tr>';
		
	}*/
			
//}

function obtenerJSON()
{
	//var longitud	= "-58.51548270000";
	//var latitud		= "-34.53920390000";
	 
	$.ajax({  type: 'GET',  url: 'json2_jquery.php?longitud='+longitud+'&latitud='+latitud, dataType: 'json' , success: callback   });
}

function callback(json)
{
	var objetoJSON = $.parseJSON(json);
	var htmlTabla = '<table border="1">';

	function sayIt(query, language) {
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
		sayIt(' '+objetoJSON.lugares[i].nombre, 'es-ES');
		attach('activate', 'click', interpret);
	
		//htmlTabla += '<tr><td>' + objetoJSON.lugares[i].nombre + '</td><td>' + objetoJSON.lugares[i].longitud  + '</td><td>' + objetoJSON.lugares[i].latitud  + '</td></tr>';
		
	}
			
	htmlTabla += '</table>';
	
	$('#tabla').html(htmlTabla);
	


	

}
function Login(){ 
var done=0; 
var usuario=document.login.usuario.value; 
var password=document.login.password.value; 

if (usuario=="DAVV" && password=="PYME8") { 
	window.location="GLOSARIO.html"; 
}

else if (usuario=="daniels" && password=="DANI2") { 
	window.location="GLOSARIO.html"; 
}

else if (usuario=="Viviana" && password=="VIVI3") { 
	window.location="GLOSARIO.html"; 
}
else if (usuario=="ALEJANDRA" && password=="ALEJA4") { 
	window.location="GLOSARIO.html"; 
}
else if (usuario=="SIMSIM" && password=="SIMSIMELVAGO") { 
	window.location="GLOSARIO.html"; 
}
else
{
	//ambos campos SIEMPRE TIENE QUE QUEDAR DE ULTIMO
	alert("usuario y/o contraseña incorrecto");
	//break;
}







} 

//document.oncontextmenu = function(){return false} 

function Login(){ 
var done=0; 
var usuario=document.login.usuario.value; 
var password=document.login.password.value; 


if (usuario=="paola" && password=="3003538870") {
	
	window.location="GLOSARIO.html"; 
}

else if (usuario=="julian" && password=="3012783633") { 
	window.location="GLOSARIO.html"; 
}

else if (usuario=="laura" && password=="3213873231") { 
	window.location="GLOSARIO.html"; 
}

else if (usuario=="vanessa" && password=="3212571385") { 
	window.location="GLOSARIO.html"; 
}

else if (usuario=="daniels" && password=="3147733150") { 
	window.location="GLOSARIO.html"; 
}

else if (usuario=="tintinho" && password=="3132170617") { 
	window.location="GLOSARIO.html"; 
}
else if (usuario=="jorgeburgos" && password=="colecciones") { 
	window.location="GLOSARIO.html"; 
}
else
{
	//ambos campos
	alert("usuario y/o contraseña incorrecto");
	//break;
}







} 

//document.oncontextmenu = function(){return false} 

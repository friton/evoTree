function DrawTree()
{
var monJson = {};
	$.ajax({
		url: "Arbre.json",
		async: false,
		dataType: 'json',
		success: function(data) {
			monJson = data;
		}
	});
	
	var c=document.getElementById("myCanvas");
	var c2=document.getElementById("myCanvas2");
	var c3=document.getElementById("myCanvas3");
	var ctx=c.getContext("2d");
	var cty=c.getContext("2d");
	var ctt=c.getContext("2d");
	var ctx2=c2.getContext("2d");
	var ctx3=c3.getContext("2d");
	ctt.font = "bold 11px Lucida Caligraphy";
	ctt.fillStyle="#2f2f2f";
	ctt.fillText("LUCA",565,250);
	
	ctt.fillText("1 pixel : 10 000 ans",450,497) ;

	// Eons
	ctx.fillStyle="#6A0888"; //Hadéen
	ctx.fillRect(600, 0, 6601.7, 20);
	ctx.fillStyle="#B404AE";  //Archéen
	ctx.fillRect(7201.7, 0, 28666.66, 20);
	ctx2.fillStyle="#B404AE";  
	ctx2.fillRect(0, 0, 7341.7, 20);
	ctx2.fillStyle="#DF0174"; //Protérozoique
	ctx2.fillRect(7341.7, 0, 28666.66, 20);
	ctx3.fillStyle="#DF0174";
	ctx3.fillRect(0, 0, 17864.16, 20);
	ctx3.fillStyle="#81DAF5";
	ctx3.fillRect(17864.16, 0, 28666.66,20);

	//Eres
	ctx.fillStyle="#6A0888"; //Hadzen
	ctx.fillRect(600, 20, 6601.7, 20);
	ctx.fillStyle="#DF01D7";  //Eoarchéen
	ctx.fillRect(7201.7, 20, 14003.255, 20);
	ctx.fillStyle="#FF00FF";  //Paléoarchéen
	ctx.fillRect(14003.255,20,22005.1,20); 
	ctx.fillStyle="#FE2EC8";  //Mésoarchéen
	ctx.fillRect(22005.1,20,28666.66,20);
	ctx2.fillStyle="#FE2EC8";
	ctx2.fillRect(0,20, 1340,20); 
	ctx2.fillStyle="#FA58F4"; //Néoarchéen
	ctx2.fillRect(1340,20, 7341.7,20);
	ctx2.fillStyle="#FF0080"; //Paléoprotérozoïque
	ctx2.fillRect(7341.7,20, 25345.89,20); 
	ctx2.fillStyle="#F7D358"; //Mésoprotérozoïque
	ctx2.fillRect(25345.89,20, 28666.66,20);
	ctx3.fillStyle="#F7D358"; 
	ctx3.fillRect(0,20, 8682.02,20);
	ctx3.fillStyle="#FAAC58"; //Néoprotérozoïque
	ctx3.fillRect(8682.02,20, 17864.16,20); 
	ctx3.fillStyle="#86B404"; //Paléozoïque
	ctx3.fillRect(17864.16,20, 23645.5,20);
	ctx3.fillStyle="#01A9DB"; //Mésozoïque
	ctx3.fillRect(23645.5,20, 28554.64,20);
	ctx3.fillStyle="#FFFF00"; //Cénozoïque
	ctx3.fillRect(28554.64,20, 28666.66,20);

	//Périodes
	ctx.fillStyle="#848484"; //Hadéen-Archéen
	ctx.fillRect(600,480,28666.66,20);
	ctx2.fillStyle="#848484"; 
	ctx2.fillRect(0,480,7341.41,20);
	ctx2.fillStyle="#FE2E64"; //Sidérien
	ctx2.fillRect(7341.41,480,11342.64,20);
	ctx2.fillStyle="#FA5882"; //Rhyacien
	ctx2.fillRect(11342.64,480,16343.8,20);
	ctx2.fillStyle="#F7819F"; //Orosirien
	ctx2.fillRect(16343.8,480,21344.66,20);
	ctx2.fillStyle="#FE2E64"; //Stathérien
	ctx2.fillRect(21344.66,480,25345.9,20);
	ctx2.fillStyle="#FA8258"; //Calymmien
	ctx2.fillRect(25345.9,480,28666.66,20);
	ctx3.fillStyle="#FA8258";
	ctx3.fillRect(0,480,680.17,20);
	ctx3.fillStyle="#F79F81"; //Ectasien
	ctx3.fillRect(680.17,480,4681.1,20);
	ctx3.fillStyle="#F5BCA9"; //Ectasien
	ctx3.fillRect(4681.1,480,8682.03,20);
	ctx3.fillStyle="#FF8000"; //Tonien
	ctx3.fillRect(8682.03,480,14283.33,20);
	ctx3.fillStyle="#FE9A2E"; //Cryogénien
	ctx3.fillRect(14283.33,480,15983.72,20);
	ctx3.fillStyle="#FACC2E"; //Ediacarien
	ctx3.fillRect(15983.72,480,17864.16,20);
	ctx3.fillStyle="#4B8A08"; //Cambrien
	ctx3.fillRect(17864.16,480,18984.41,20);
	ctx3.fillStyle="#0B614B"; //Ordovicien
	ctx3.fillRect(18984.41,480,19804.61,20);
	ctx3.fillStyle="#74DF00"; //Silurien
	ctx3.fillRect(19804.61,480,20300.73,20);
	ctx3.fillStyle="#B45F04"; //Dévonien
	ctx3.fillRect(20300.73,480,21507,20);
	ctx3.fillStyle="#088A68"; //Carbonière
	ctx3.fillRect(21507,480,22685.28,20);
	ctx3.fillStyle="#FF0000"; //Permien
	ctx3.fillRect(22685.28,480,23641.49,20);
	ctx3.fillStyle="#7401DF"; //Trias
	ctx3.fillRect(23641.49,480,24659.74,20);
	ctx3.fillStyle="#045FB4"; //Jurassique
	ctx3.fillRect(24659.74,480,25786,20);
	ctx3.fillStyle="#31B404"; //Crétacé
	ctx3.fillRect(25786,480,28554.64,20);
	ctx3.fillStyle="#FF8000"; //Paléogène
	ctx3.fillRect(28554.64,480,28640.66,20);
	ctx3.fillStyle="#FACC2E"; //Néogène
	ctx3.fillRect(28640.66,480,28660,20);
	ctx3.fillStyle="#F4FA58"; //Quaternaire
	ctx3.fillRect(28660,480,28666.66,20);


	/*
	cty.beginPath();
	
	var x=0;
	while(x<30000)	{
		if (x % 100 == 0) {
			cty.lineWidth=0.4;
			cty.moveTo(x+600.5,482.5);
			cty.lineTo(x+600.5,497.5);
			
			cty.stroke();
		}
		else {
			cty.lineWidth=0.1;
			cty.moveTo(x+600.5,490.5);
			cty.lineTo(x+600.5,497.5);
			
			cty.stroke();
		}
		x=x+10;
	} */

	ctx.scale(2,2);

	ctx.lineWidth=4;
	ctx.beginPath();
	ctx.moveTo(600,250);
	ctx.lineTo(601,250);
	for(var i in monJson) {


		var x1=monJson[i]["x"]/2+600;
		var y1=monJson[i]["y"]/2+120;
		
		ctx.moveTo(x1,y1);
		ctx.lineTo(x1+10,y1);
	}
	ctx.strokeStyle="green";
	ctx.stroke();
}




window.onscroll = function() {ScrollEv()};
function ScrollEv() {
	
	var canvas=document.getElementById("myCanvas");
	var pos=GetPosCanvas(canvas);
	
	document.getElementById("myP").innerHTML='<img rel="icon "type="image/png" src="curs.png"  style="height:17px; width:14px"><font size="2">	'+((((-3500000000)+(pos.x*10000))-6)/1000000000).toFixed(3)+" Milliards d'ann&#233;es</font>";
	if(window.scrollX<=10)
	{window.parent.document.getElementById("avant").disabled = true;}
	else
		{window.parent.document.getElementById("avant").disabled = false;}

	if(window.scrollX>=349900)
	{window.parent.document.getElementById("next").disabled = true;}
	else
		{window.parent.document.getElementById("next").disabled = false;}
}
	



function GetPosCanvas(canvas) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: window.scrollX
		}
	  }




function goleft()
{
	
	if(window.scrollX<=10)
	{window.parent.document.getElementById("avant").disabled = true;}
else{
	
	$('html, body').animate( { scrollLeft: '-=5000' }, 7500);
	window.parent.document.getElementById("avant").disabled = false;
}}



function goright()
{
console.log(window.scrollX);
if(window.scrollX>349900)
	{window.parent.document.getElementById("next").disabled = true;}
	else
		{window.parent.document.getElementById("next").disabled = false;
		$('html, body').animate( { scrollLeft: '+=5000' }, 7500);
}
    
}

function goTo(x)
{

	$('html, body').animate( { scrollLeft: x }, 10000);
}

 $(document).ready(function() {
    $('.-50').hover(function() {
      $(this).html('- 50 Ma');
    }, function() {
      $(this).html('<i class="material-icons ">arrow_back</i>');
    });
  });

 

 $(document).ready(function() {
    $('.plus50').hover(function() {
      $(this).html('+ 50 Ma');
    }, function() {
      $(this).html('<i class="material-icons ">arrow_forward</i>');
    });
  });


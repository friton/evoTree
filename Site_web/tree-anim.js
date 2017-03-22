
//cette fonction s'execute lors du chargement de la page
function DrawTree()
{

window.parent.$('.w3-bar').hide();//On cache la bar de menu et le curseur
$('#myP').hide();

var monJson = {};
	$.ajax({
		url: "JSON/LT2.json",
		async: false,
		dataType: 'json',
		success: function(data) {
			monJson = data;
		}
	});// on lit le jason contenant les coordonnées des points de l'arbre généré
	
	
	//on dessine l'arbre et la chronologie des temps géologiques
	var c=document.getElementById("myCanvas");
	var c2=document.getElementById("myCanvas2");
	
	var ctx=c.getContext("2d");
	var ctx2=c2.getContext("2d");

	var cty=c.getContext("2d");
	var cty2=c2.getContext("2d");

	var ctt=c.getContext("2d");
	
	
	
	ctt.font = "bold 12px Asap";
	ctt.fillStyle="white";
	ctt.fillText("Bienvenue dans notre arbre de l'évolution...",50,280);
	ctt.fillText("La première forme de vie serait apparue il y a 3.8 milliards d'années ...",5000,280);
	ctt.fillText("Notre planète Terre est née il y a environ 4.5 milliards d'années ...",1000,280);
	ctt.fillText("A long time ago in a galaxy far, far away....",3000,280);
	
	
	// Eons
	ctx.fillStyle="#6A0888"; //Hadéen
	ctx.fillRect(0, 0, 5400, 20);
	ctx.fillStyle="#B404AE";  //Archéen
	ctx.fillRect(5400, 0, 20400, 20);
	ctx.fillStyle="#DF0174"; //Protérozoique
	ctx.fillRect(20400, 0, 22700, 20);
	ctx2.fillStyle="#DF0174";
	ctx2.fillRect(0, 0, 17290, 20);//Phanerozoic
	ctx2.fillStyle="#81DAF5";
	ctx2.fillRect(17290, 0, 22700,20);

	
	//Eres
	ctx.fillStyle="#6A0888"; //Hadéen
	ctx.fillRect(0, 20, 5400, 20);
	ctx.fillStyle="#DF01D7";  //Eoarchéen
	ctx.fillRect(5400, 20, 9400, 20);
	ctx.fillStyle="#FF00FF";  //Paléoarchéen
	ctx.fillRect(9400,20,13400,20); 
	ctx.fillStyle="#FE2EC8";  //Mésoarchéen
	ctx.fillRect(13400,20,17400,20);
	ctx.fillStyle="#FA58F4"; //Néoarchéen
	ctx.fillRect(17400,20, 20400,20);
	ctx.fillStyle="#FF0080"; //Paléoprotérozoïque
	ctx.fillRect(20400,20, 22700,20); 
	ctx2.fillStyle="#FF0080";
	ctx2.fillRect(0,20, 6700,20); 
	ctx2.fillStyle="#F7D358"; //Mésoprotérozoïque
	ctx2.fillRect(6700,20, 12700,20);
	ctx2.fillStyle="#FAAC58"; //Néoprotérozoïque
	ctx2.fillRect(12700,20, 17290,20); 
	ctx2.fillStyle="#86B404"; //Paléozoïque
	ctx2.fillRect(17290,20, 20180.98,20);
	ctx2.fillStyle="#01A9DB"; //Mésozoïque
	ctx2.fillRect(20180.98,20, 22040,20);
	ctx2.fillStyle="#FFFF00"; //Cénozoïque
	ctx2.fillRect(22040,20, 22700,20);
	
	//Périodes
	
	ctx.fillStyle="#FE2E64"; //Sidérien
	ctx.fillRect(20400,520,22400,20);
	ctx.fillStyle="#FA5882"; //Rhyacien
	ctx.fillRect(22400,520,22700,20);
	ctx2.fillStyle="#FA5882";
	ctx2.fillRect(0,520,2200,20);
	ctx2.fillStyle="#F7819F"; //Orosirien
	ctx2.fillRect(2200,520,4700,20);
	ctx2.fillStyle="#FE2E64"; //Stathérien
	ctx2.fillRect(4700,520,6700,20);
	ctx2.fillStyle="#FA8258"; //Calymmien
	ctx2.fillRect(6700,520,8700,20);
	ctx2.fillStyle="#F79F81"; //Ectasien
	ctx2.fillRect(8700,520,10700,20);
	ctx2.fillStyle="#FF8000"; //Stenian
	ctx2.fillRect(10700,520,12700,20);
	ctx2.fillStyle="#FE9A2E"; //Tonian
	ctx2.fillRect(12700,520,15500,20);
	ctx2.fillStyle="#FACC2E"; //Cryogenian
	ctx2.fillRect(15500,520,16350,20);
	ctx2.fillStyle="#F2F5A9"; //Ediacaran #F2F5A9
	ctx2.fillRect(16350,520,17290,20);
	ctx2.fillStyle="#4B8A08"; //Cambrian
	ctx2.fillRect(17290,520,17846,20);
	ctx2.fillStyle="#0B614B"; //Ordovician
	ctx2.fillRect(17846,520,18261.99,20);
	ctx2.fillStyle="#74DF00"; //Silurian
	ctx2.fillRect(18261.99,520,18508,20);
	ctx2.fillStyle="#B45F04"; //Devonien
	ctx2.fillRect(18508,520,19111,20);
	ctx2.fillStyle="#088A68"; //Carboniferous
	ctx2.fillRect(19111,520,19711,20);
	ctx2.fillStyle="#FF0000"; //Permian
	ctx2.fillRect(19711,520,20181,20);
	ctx2.fillStyle="#7401DF"; //Triassic
	ctx2.fillRect(20181,520,20687,20);
	ctx2.fillStyle="#045FB4"; //Jurassic
	ctx2.fillRect(20687,520,21250,20);
	ctx2.fillStyle="#31B404"; //Cretaceous
	ctx2.fillRect(21250,520,22040,20);
	ctx2.fillStyle="#FF8000"; //Paleogene
	ctx2.fillRect(22040,520,22469.7,20);
	ctx2.fillStyle="#FACC2E"; //Neogene
	ctx2.fillRect(22469.7,520,22674.2,20);
	ctx2.fillStyle="#F4FA58"; //Quaternary
	ctx2.fillRect(22674.2,520,22700,20); 


	//Epoques
	
	
	ctx2.fillStyle="#8FBC8F";//Terreneuvian
	ctx2.fillRect(17290,540,17490,20);
	ctx2.fillStyle="#3CB371";//Cambrian Series 2
	ctx2.fillRect(17490,540,17610,20);
	ctx2.fillStyle="#66CDAA";//Cambrian Series 3
	ctx2.fillRect(17610,540,17730,20);
	ctx2.fillStyle="#8FBC8F";//Furongian
	ctx2.fillRect(17730,540,17846,20);
	ctx2.fillStyle="#5F9EA0";//Ordovician Lower
	ctx2.fillRect(17846,540,18000,20);
	ctx2.fillStyle="#20B2AA";//Ordovician Middle
	ctx2.fillRect(18000,540,18116,20);
	ctx2.fillStyle="#00CED1";//Ordovician Upper
	ctx2.fillRect(18116,540,18262,20);
	ctx2.fillStyle="#40E0D0";//Llandovery
	ctx2.fillRect(18262,540,18366,20);
	ctx2.fillStyle="#7FFFD4";//Wenlock
	ctx2.fillRect(18366,540,18426,20);
	ctx2.fillStyle="#AFEEEE";//Ludlow
	ctx2.fillRect(18426,540,18470,20);
	ctx2.fillStyle="#E0FFFF";//Pridoli
	ctx2.fillRect(18470,540,18508,20);
	ctx2.fillStyle="#F4A460";//Devonian Lower
	ctx2.fillRect(18508,540,18767,20);
	ctx2.fillStyle="#F0E68C";//Devonian Middle
	ctx2.fillRect(18767,540,18873,20);
	ctx2.fillStyle="#F5DEB3";//Devonian Upper
	ctx2.fillRect(18873,540,19111,20);
	ctx2.fillStyle="#008080";//Mississipian
	ctx2.fillRect(19111,540,19468,20);
	ctx2.fillStyle="#66CDAA";//Pennsylvanian
	ctx2.fillRect(19468,540,19711,20);
	ctx2.fillStyle="#E9967A";//Cisuralian
	ctx2.fillRect(19711,540,19970.5,20);
	ctx2.fillStyle="#FA8072";//Guadalupian
	ctx2.fillRect(19970.5,540,20109,20);
	ctx2.fillStyle="#FFA07A";//Lopingian
	ctx2.fillRect(20109,540,20180.98,20);
	ctx2.fillStyle="#DA70D6";//Triassic Lower
	ctx2.fillRect(20180.98,540,20228,20);
	ctx2.fillStyle="#DDA0DD";//Triassic Middle
	ctx2.fillRect(20228,540,20330,20);
	ctx2.fillStyle="#D8BFD8";//Triassic Upper
	ctx2.fillRect(20330,540,20687,20);
	ctx2.fillStyle="#00CED1";//Jurassic Lower
	ctx2.fillRect(20687,540,20959,20);
	ctx2.fillStyle="#41D1CC";//Jurassic Middle
	ctx2.fillRect(20959,540,21065,20);
	ctx2.fillStyle="#AFEEEE";//Jurassic Upper
	ctx2.fillRect(21065,540,21250,20);
	ctx2.fillStyle="#9ACD32";//Cretaceous Lower
	ctx2.fillRect(21250,540,21695,20);
	ctx2.fillStyle="#6B8E23";//Cretaceous Upper
	ctx2.fillRect(21695,540,22040,20);
	ctx2.fillStyle="#F4A460";//Paleocene
	ctx2.fillRect(22040,540,22140,20);
	ctx2.fillStyle="#FFDEAD";//Eocene
	ctx2.fillRect(22140,540,22361,20);
	ctx2.fillStyle="#FFEBCD";//Oligocene
	ctx2.fillRect(22361,540,22469.7,20);
	ctx2.fillStyle="#FFD700";//Miocene
	ctx2.fillRect(22469.7,540,22646.67,20);
	ctx2.fillStyle="#FFE4C4";//Pliocene
	ctx2.fillRect(22646.67,540,22674.2,20);
	ctx2.fillStyle="#F5F5DC";//Pleistocene
	ctx2.fillRect(22674.2,540,22699.5,20);
	ctx2.fillStyle="#FF0000";//Holocene
	ctx2.fillRect(22698,540,22700,20);

	
		
	
var seuil = 22700		
var diff = seuil-7400		
	

ctx.scale(1,1);
ctx2.scale(1,1);

	ctx.lineWidth=4;
	ctx.beginPath();
	cty2.lineWidth=4;
	cty2.beginPath();
	
	ctx.moveTo(7400,(340)*0.8);
	ctx.lineTo(7401,(340)*0.8);

	for(var i in monJson) {


		var x1=monJson[i]["x"];
		var y1=(monJson[i]["y"]+340)*0.8;
		if (x1<= diff){
		
			ctx.moveTo(x1+7400,y1);
			ctx.lineTo(x1+7410,y1);
	
		}
		if (x1>=diff && x1<45400){

			ctx2.moveTo(x1-diff,y1);
			ctx2.lineTo(x1-22690+7400,y1);
		}	
	}
	ctx.strokeStyle="#488957";
	ctx.stroke();
	cty2.strokeStyle="#488957";
	cty2.stroke();

	

}




//on define les animations associées à l'événemment de scrolling 
window.onscroll = function() {ScrollEv()};
function ScrollEv() {
	
	var canvas=document.getElementById("myCanvas");
	var pos=GetPosCanvas(canvas);
	
	//animation de la barre de menu avec les extinctions et du curseur de temps
	if(window.scrollX<=1000)
    {
	window.parent.$('.w3-bar').hide(500);
	
	$('#myP').hide(300);	
    }

    else if (window.scrollX<=1380)
	{
	window.parent.$('.w3-bar').show(500);
	document.getElementById("myP").innerHTML='<img rel="icon "type="image/png" src="images/curs2.png"  style="height:17px; width:14px;color:white;"><font size="2">	'+"-4.540 Milliards d'ann&#233;es</font>";
	$('#myP').show(300);
	
            }


	else if (window.scrollX<=46780)
		{
		
		window.parent.$('.w3-bar').show(500);
		document.getElementById("myP").innerHTML='<img rel="icon "type="image/png" src="images/curs2.png"  style="height:17px; width:14px;color:white;"><font size="2">	'+((((-4540000000)+((pos.x-1380)*100000)))/1000000000).toFixed(3)+" Milliards d'ann&#233;es</font>";
		$('#myP').show(300);
    	}

    else if (window.scrollX<=47000)
		{
		
		window.parent.$('.w3-bar').show(500);
		document.getElementById("myP").innerHTML='<img rel="icon "type="image/png" src="images/curs2.png"  style="height:17px; width:14px;color:white;"><font size="2">	'+"0.000 Milliards d'ann&#233;es</font>";
		$('#myP').show(300);	
    	}
    else
    	{window.parent.document.getElementById("avant").disabled = true;
	window.parent.$('.w3-bar').hide(500);
	
	$('#myP').hide(300);	
    }


	//on cache également les bouttons +-500M quand on est en dehors des temps

	if(window.scrollX>=42000)
	{window.parent.document.getElementById("next").disabled = true;}
	else
		{window.parent.document.getElementById("next").disabled = false;}

	if(window.scrollX<=5000)
	{window.parent.document.getElementById("avant").disabled = true;}
	else
	{
		window.parent.document.getElementById("avant").disabled = false;
	}
}
	


//fonction qui recupère la position du canvas dans la fenetre
function GetPosCanvas(canvas) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: window.scrollX
		}
	  }



//on definit l'action du boutton -500Ma
function goleft()
{
	
	if(window.scrollX<=10)
	{window.parent.document.getElementById("avant").disabled = true;}
else{
	
	$('html, body').animate( { scrollLeft: '-=5000' }, 3500);
	window.parent.document.getElementById("avant").disabled = false;
}}



function goright()
{
console.log(window.scrollX);
if(window.scrollX>47000)
	{window.parent.document.getElementById("next").disabled = true;}
	else
		{window.parent.document.getElementById("next").disabled = false;
		$('html, body').animate( { scrollLeft: '+=5000' }, 3500);
}
    
}

//fonction pour se déplacer jusqu'aux différentes extinctions
function goTo(x)
{

	$('html, body').animate( { scrollLeft: x }, 10000);
}

//on personnalise le 'hover' des bouttons + et - 500Ma
 $(document).ready(function() {
    $('.-50').hover(function() {
      $(this).html('- 500 M.y.');
    }, function() {
      $(this).html('<i class="material-icons ">arrow_back</i>');
    });
  });

 

 $(document).ready(function() {
    $('.plus50').hover(function() {
      $(this).html('+ 500 M.y.');
    }, function() {
      $(this).html('<i class="material-icons ">arrow_forward</i>');
    });
  });

// intercepter la hauteur de la page et calculer 0.8 fois sa valeur en entier
var haut=Math.round(window.innerHeight*0.90);

// injecter le canvas dans le div dqui a pour id 'monCadre', avec la hauteur
// calculée en fonction de la hauteur totale de la page
function responsive() {
	var contenu='<canvas id="myCanvas" width="15000" height="'+haut.toString()+'" style="border:0px; border:1px; border-style:solid;">your browser does not support the HTML5 canvas tag.</canvas><canvas id="myCanvas2" width="15000" height="'+haut.toString()+'" style="border:0px; border:1px; border-style:solid;">your browser does not support the HTML5 canvas tag.</canvas><canvas id="myCanvas3" width="15000" height="'+haut.toString()+'" style="border:0px; border:1px; border-style:solid;">your browser does not support the HTML5 canvas tag.</canvas>';
	document.getElementById("monCadre").innerHTML = contenu;
}

// charger les points depuis le fichier JSON
var monJson = {};
$.ajax({
	url: "5-30.json",
	async: false,
	dataType: 'json',
	success: function(data) {
		monJson = data;
	}
});

// toutes les étapes nécessaires pour dessiner l'arbre et l'échelle
function dessiner(){
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

	// couleur de l'arrière plan
	ctx.fillStyle="#808080";
	ctx.fillRect(0,0,15000,haut);

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

	// charger l'échelle en x et en y
	ctx.scale(1,1);
	// l'épaisseur des traits de l'arbre
	ctx.lineWidth=3;
	ctx.beginPath();
	// déterminer la hauteur de l'origine de l'arbre
	var origine=Math.round(haut/2);
	// tracer LUCA
	ctx.moveTo(600,origine);
	ctx.lineTo(601,origine);
	for(var i in monJson) {
		var x1=monJson[i]["x"]/2+600;
		var y1=monJson[i]["y"]/2+origine;
		ctx.moveTo(x1,y1);
		ctx.lineTo(x1+10,y1);
	}
	// couleur de l'arbre
	ctx.strokeStyle="#0047b3";
	ctx.stroke();
};

window.onscroll = function() {myFunction()};

// affichage dynamique pour indiquer le temps (la position) dans le paragraphe <p>
function myFunction() {
	var canvas=document.getElementById("myCanvas");
	var pos=GetPosCanvas(canvas)
	document.getElementById("myP").innerHTML='<i class="material-icons">navigation</i> '+(pos.x-6).toFixed(2)+" Millions d'ann&#233;es";
};

// intercepter la valeur en x de la vue actuelle
function GetPosCanvas(canvas) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: ((0-rect.left+600)*10000)/10**6
		};
};

function DrawTree()
{
var monJson = {};
	$.ajax({
		url: "JSON-ok.json",
		async: false,
		dataType: 'json',
		success: function(data) {
			monJson = data;
		}
	});
	
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	var cty=c.getContext("2d");
	ctx.fillStyle="#A9A9A9";
	ctx.fillRect(0,0,15000,500); 
	cty.beginPath();
	
	var x=0;
	while(x<15000)	{
		if (x % 100 == 0) {
			cty.lineWidth=0.4;
			cty.moveTo(x+600.5,500);
			cty.lineTo(x+600.5,485);
			cty.stroke();
		}
		else {
			cty.lineWidth=0.1;
			cty.moveTo(x+600.5,500);
			cty.lineTo(x+600.5,493);
			cty.stroke();
		}
		x=x+10;
	}

	ctx.scale(1,1);

	ctx.lineWidth=2;
	ctx.beginPath();
	ctx.moveTo(600,250);
	ctx.lineTo(601,250);
	for(var i in monJson) {


		var x1=monJson[i]["x"]/2+600;
		var y1=monJson[i]["y"]/2+250;
		
		ctx.moveTo(x1,y1);
		ctx.lineTo(x1+10,y1);
	}
	ctx.strokeStyle=" 	#006400";
	ctx.stroke();
}




window.onscroll = function() {ScrollEv()};
function ScrollEv() {
	var canvas=document.getElementById("myCanvas");
	var pos=GetPosCanvas(canvas);
	document.getElementById("myP").innerHTML='<i class="material-icons w3-gray w3-tiny" >navigation</i>'+((((-3500000000)+(pos.x*10000))-6)/1000000000).toFixed(3)+" Milliards d'ann&#233;es";
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
	
	$('html, body').animate( { scrollLeft: '-=5000' }, 5500);
	window.parent.document.getElementById("avant").disabled = false;
}}



function goright()
{
console.log(window.scrollX);
if(window.scrollX>349900)
	{window.parent.document.getElementById("next").disabled = true;}
	else
		{window.parent.document.getElementById("next").disabled = false;
		$('html, body').animate( { scrollLeft: '+=5000' }, 5500);
}
    
}



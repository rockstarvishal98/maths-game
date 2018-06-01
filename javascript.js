var t=59;
var i;
var j;
var play=false;
var c=0;
var score;
document.getElementById("start").onclick=function(){
	if(play==false)
	{
		startcount();
		play=true;
		score=0;
		generateQ();
	}	
    
}

document.getElementById("reset").onclick=function(){
	stopcount();
	document.getElementById("question").innerHTML="Play Again?"
    document.getElementById("box1").innerHTML=score;
    document.getElementById("box2").innerHTML=score;
    document.getElementById("box3").innerHTML=score;
    document.getElementById("box4").innerHTML=score;
    document.getElementById("box1").onclick=function(){
    	alert("Click on Start");
    }
    document.getElementById("box2").onclick=function(){
    	alert("Click on Start");
    }
    document.getElementById("box3").onclick=function(){
    	alert("Click on Start");
    }
    document.getElementById("box4").onclick=function(){
    	alert("Click on Start");
    }
}

function startcount(){
	action=setInterval(function(){
		
	    if(t>=0)
	    {
	    document.getElementById("remtime").innerHTML=t; 
		t-=1;
	}
},1000);
}

function stopcount()
{
	clearInterval(action);
	document.getElementById("remtime").innerHTML=60;
	t=59;
	play=false;
}
function generateQ()
{
	var d;
	c=0;
	var x=1+Math.round(Math.random()*9);
	var y=1+Math.round(Math.random()*9);
    var correct=x*y;
    var s=correct;
    while(s>0)
    {
    	s=Math.round(s/10);
    	c++;
    }
    document.getElementById("question").innerHTML=x+"*"+y;
    var arr=new Array();
    d=Math.round(Math.pow(10,c))-1;
    for(i=1;i<=4;++i)
    {

    	arr[i]=1+Math.round(d*Math.random());
    }
    arr[1+Math.round(3*Math.random())]=correct;
    var corrindex=arr.indexOf(correct);
    for(j=1;j<=4;++j)
    { 
     document.getElementById("box"+j).innerHTML=arr[j];

    }
    for(j=1;j<=4;j++)
    {
    document.getElementById("box"+j).onclick=function(){
	document.getElementById("question").innerHTML="Game Over!";
	stopcount();
	document.getElementById("box1").innerHTML=score;
    document.getElementById("box2").innerHTML=score;
    document.getElementById("box3").innerHTML=score;
    document.getElementById("box4").innerHTML=score;
    document.getElementById("box1").onclick=function(){
    	alert("Click on Restart");
    }
    document.getElementById("box2").onclick=function(){
    	alert("Click on Restart");
    }
    document.getElementById("box3").onclick=function(){
    	alert("Click on Restart");
    }
    document.getElementById("box4").onclick=function(){
    	alert("Click on Restart");
    }
	score=0;
	document.getElementById("currscore").innerHTML=score;
	}   
    }
    document.getElementById("box"+corrindex).onclick=function(){
    	score+=10;
    	document.getElementById("currscore").innerHTML=score;
    	generateQ();
    }

}
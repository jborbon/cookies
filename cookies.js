var fritoscount = 0;
var chipsahoycount = 0 ;
var rufflescount = 0 ;  
 
function fritoclick() {
	document.getElementById("fritos")=function fritosclick(){
		
		document.getElementById("fritos").innerHTML = "YOU ATE"+ fritoscount+ "you fatty";	
fritoscount += 1;

}

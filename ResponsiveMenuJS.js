//adding and removing class responsive
document.getElementById("toggleMenu").onclick = function (){
	  var x = document.getElementById("navbar");
	 
	  if (x.className === "menu") {
			x.className += " responsive";
			// console.log(x.className);
	  } else {
			x.className = "menu";
			console.log(x.className);
	  }
}

//adding and removing class active
$(".menuItem").click(function(){

	$(".menuItem").removeClass("active");

	$(this).addClass("active");

});
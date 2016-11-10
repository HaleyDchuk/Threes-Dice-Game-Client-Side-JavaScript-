// var numOne = document.getElementById("num-one"); 
// var numTwo = document.getElementById("num-two"); 
// var addSum = document.getElementById("add-sum"); 

// // if(numOne){
// numOne.addEventListener("click", function(){
// 	alert("hi"); 
// });
// }



// numTwo.addEventListener("click", add);
// function add(){
// 	//var one = parseFloat(numOne.value) || 0; 
// 	//var two = parseFloat(numTwo.value) || 0; 
// 	var one = null || 0; 
// 	var two = null || 0; 
// 	var sum = one + two; 
// 	addSum.innerHTML = "your sum is: " + sum; 
// }

//either of these should work, right? 
//var thisButton = document.querySelector('button'); 
// var thisButton = document.getElementById("go"); 

// thisButton.addEventListener('click', doThis); 
// // 	function sayHello(evt){
	
// // 	console.log('hello'); 

// // }

// function doThis(evt){
// 	var game = document.getElementById("game")
// 	//.className = "show"; 
// 	var para = document.createElement("p"); 
// 	var node = document.createTextNode("This is a new paragraph"); 
// 	para.appendChild(node); 
// 	game.appendChild(para); 
// }

document.addEventListener("DOMContentLoaded", function(event) {
    var thisButton = document.getElementById("go"); 

	thisButton.addEventListener('click', doThis); 

	function doThis(evt){
	var b = document.getElementById("intro").className = "hidden"; 
	var game = document.getElementById("game").className = "show"; 
	var g = document.getElementById("game"); 
	var x; 
	var val = document.getElementById("diceValues").value; 

	if(val === ""){


	for( x = 0; x < 5; x++){
		var random = Math.floor(Math.random() * 6) + 1; 
		var para = document.createElement("p"); 
		var node = document.createTextNode(random); 
		para.appendChild(node); 
		g.appendChild(para); 

		

		
		
	}
}


else{
	var values = val.split(","); 
	var x; 
	for(x = 0; x < 5; x++){

		if(values[x] !== undefined) {
			var p1 = document.createElement("p"); 
			var n1 = document.createTextNode(values[x]); 
			p1.appendChild(n1); 
			g.appendChild(p1); 
		} else{
			var random = Math.floor(Math.random() * 6) + 1;
			var p1 = document.createElement("p"); 
			var n1 = document.createTextNode(random); 
			p1.appendChild(n1); 
			g.appendChild(p1); 
			}

	}
}




	var btn = document.createElement("button");        
	var t = document.createTextNode("START");       
	btn.appendChild(t);                                
	document.body.appendChild(btn); 
	var btn2 = document.createElement("button");        
	var t2 = document.createTextNode("ROLL");       
	btn2.appendChild(t2);                                
	document.body.appendChild(btn2); 
	var btn3 = document.createElement("button");        
	var t3 = document.createTextNode("PIN");       
	btn3.appendChild(t3);                                
	document.body.appendChild(btn3); 
	
	//why doesnt this work 
	//var num = document.querySelector('p').className = numClass; 
	
}

    console.log("DOM fully loaded and parsed");
  });



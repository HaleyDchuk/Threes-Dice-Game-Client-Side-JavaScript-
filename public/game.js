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
    
    //your score element 
	var yourScore = document.createElement("h3"); 
	document.body.appendChild(yourScore); 
    var keepingTrackScore = 0; 
    
    var thisButton = document.getElementById("go"); 

	thisButton.addEventListener('click', doThis); 

	function doThis(evt){
	var b = document.getElementById("intro").className = "hidden"; 
	var game = document.getElementById("game").className = "show"; 
	var g = document.getElementById("game"); 
	var x; 
	//var val = document.getElementById("diceValues").value; 

	//if(val === ""){


	for( x = 0; x < 5; x++){
		
		//var rand = diceRoll(); 
		var para = document.createElement("p"); 
		//para.setAttribute("class", "initialBox");  
		//var node = document.createTextNode(" "); 
		//para.appendChild(node); 
		g.appendChild(para); 

	}


	var btn = document.createElement("button");   
	btn.setAttribute("id", "startButton");  

	var t = document.createTextNode("START");       
	btn.appendChild(t);                                
	document.body.appendChild(btn); 
	var btn2 = document.createElement("BUTTON");  
	btn2.setAttribute("id", "rollButton");       
	var t2 = document.createTextNode("ROLL");       
	btn2.appendChild(t2);                                
	document.body.appendChild(btn2); 
	//ITS NOT FADED
	btn2.disabled = true; 
	//btn2.setAttribute("disabled", "disabled"); 
	
	var btn3 = document.createElement("button");
	btn3.setAttribute("id", "pinButton");         
	var t3 = document.createTextNode("PIN");       
	btn3.appendChild(t3);                                
	document.body.appendChild(btn3); 
	//ITS NOT FADED BUT IT WONT WORK UNTIL SET TO FALSE
	btn3.disabled = true; 





	btn.addEventListener("click", onStart); 
	function onStart(evt){
		//var hideStartButton = document.getElementByClassName("startButton").className = "hidden"; 
		btn.disabled = true; 
		btn2.disabled = false; 
		btn3.disabled = false;
		var score = document.querySelector("h3"); 

    	score.innerHTML = "Your Score: " + keepingTrackScore; 
    	document.body.appendChild(yourScore); 

    	var computerPlay = document.createElement("h4"); 
		
		var pinned = []; 
		var x; 
	 	var w; 
	 	var count = 5; 
	 	for(w = 0; w < 5; w++){
	 		var rolls = [];
			var changeThrees = []; 
			
		for(x = 0; x < count; x++){

			var roll = diceRoll();
			rolls.push(roll); 
			
		}

		var t; 
		for(t = 0; t < count; t++){
			if(rolls[t] == 3){
				changeThrees.push(0); 
			} else{
				changeThrees.push(rolls[t]); 
			}
		}
		

		var y; 
		var lowest = changeThrees[0];
		for(y=1; y <=count ; y++){

			
			if(changeThrees[y] < lowest){
				lowest = changeThrees[y]; 
				
			}
			
		}
		pinned.push(lowest); 
		console.log("ROLLS"); 
		console.log(rolls); 
		console.log("CHANGED"); 
		console.log(changeThrees); 
		count = count -1; 
		console.log("COUNT"); 
		console.log(count); 
	}
		
		
		
		var computerScore = 0; 
		var m; 
		for(m = 0; m < 5; m++){
			var thisNumber = pinned[m]; 
			computerScore += thisNumber; 
		}
		var pinnedWithThree = []; 
		var r; 
		for(r = 0; r < 5; r++){
			var thisNum = pinned[r];
			if(thisNum == 0){
				pinnedWithThree.push(3); 
			} else{
				pinnedWithThree.push(pinned[r]); 
			}
		}

		var scoreString = "Computer Score: "; 
		var u; 
		for(u = 0; u < 5; u++){
			if(pinnedWithThree[u] == 3){
				scoreString += '  3(0) + '; 
			} else{
				scoreString += pinnedWithThree[u] + ' +'; 
			}
		}

		//get rid of last + sign 
		scoreString += " = " + computerScore; 

		
		var compScore = document.createTextNode(scoreString); 
 		computerPlay.appendChild(compScore); 
		document.body.appendChild(computerPlay); 

		console.log("LOWEST"); 
		console.log(lowest); 
		console.log("PINNED"); 
		console.log(pinned); 
		console.log("PINNED WITH 3"); 
		console.log(pinnedWithThree); 

	
	 }
	 
	 btn2.addEventListener("click", onRoll);
	 function onRoll(evt){
	 		var val = document.getElementById("diceValues").value; 
		var values = val.split(","); 
		var x; 
		for(x = 0; x < 5; x++){
			var paragraph = document.querySelectorAll("p")[x]; 
			console.log(x); 
			if(values[x] === undefined) {
			
			paragraph.innerHTML = diceRoll(); 
			
		} else{
			
			paragraph.innerHTML = values[x]; 
			}

		}

	}

}




function diceRoll(){
	var val = document.getElementById("diceValues").value; 
	var random = Math.floor(Math.random() * 6) + 1;
	return random; 
}

    console.log("DOM fully loaded and parsed");
  });



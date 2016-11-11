

document.addEventListener("DOMContentLoaded", function(event) {


//FUNCTION FOR RANDOM DICE ROLLING 
function diceRoll(){
	var val = document.getElementById("diceValues").value; 
	var random = Math.floor(Math.random() * 6) + 1;
	return random; 
}
    //keeping track of pinned dice 
	var pinned = []; 
	var clicked = []; 
	var cScore; 
		
		for(i = 0; i < 5; i++){
			pinned.push(false); 
			clicked.push(false); 
		}

    //your score element 
	var yourScore = document.createElement("h3"); 
	yourScore.setAttribute("id", "playerScore");  
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
	//WHEN START IS CLICKED DO THIS 
	function onStart(evt){
		//var hideStartButton = document.getElementByClassName("startButton").className = "hidden"; 
		//GETTING PREDEFINED INPUT 
		var val = document.getElementById("diceValues").value; 
		console.log("VAL"); 
		console.log(val); 
		var values = val.split(","); 
		console.log(values); 
		
		btn.disabled = true; 
		btn2.disabled = false; 
		//btn3.disabled = false;
		var score = document.querySelector("h3"); 


    	score.innerHTML = "Your Score: " + keepingTrackScore; 
    	document.body.appendChild(yourScore); 

    	var computerPlay = document.createElement("h4"); 
    	computerPlay.setAttribute("id", "computerScoree");
		
		var pin = []; 
		var x; 
	 	var w; 
	 	var count = 5; 
	 	//how do we make the computer rolls predetermined???? 
	 	var countAgain = 0; 
	 	for(w = 0; w < 5; w++){
	 		var rolls = [];
			var changeThrees = []; 
			
		for(x = 0; x < count; x++){
			console.log("values count again "); 
			console.log(values[countAgain]); 
			rolls[0] = diceRoll(); 
			if(values[countAgain] == undefined){
				var roll = diceRoll();
				//rolls.push(roll); 
				rolls[x] = roll; 


			} 

			else{
				rolls.push(values[countAgain]); 
				

			}

			
			countAgain ++;
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
		pin.push(lowest); 
		console.log("ROLLS"); 
		console.log(rolls); 
		console.log("CHANGED"); 
		console.log(changeThrees); 
		count = count -1; 
		//countAgain ++; 
		// console.log("COUNT"); 
		// console.log(count); 
	}
		
		
		
		var computerScore = 0; 
		var m; 
		for(m = 0; m < 5; m++){
			var thisNumber = pin[m]; 
			var parseThisNum = parseInt(thisNumber); 
			computerScore += parseThisNum; 
		}
		var pinnedWithThree = []; 
		var r; 
		for(r = 0; r < 5; r++){
			var thisNum = pin[r];
			if(thisNum == 0){
				pinnedWithThree.push(3); 
			} else{
				pinnedWithThree.push(pin[r]); 
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
		cScore = computerScore; 
		//get rid of last + sign 
		scoreString += " = " + computerScore; 

		
		var compScore = document.createTextNode(scoreString); 
 		computerPlay.appendChild(compScore); 
		document.body.appendChild(computerPlay); 

		console.log("LOWEST"); 
		console.log(lowest); 
		console.log("PINNED"); 
		console.log(pin); 
		console.log("PINNED WITH 3"); 
		console.log(pinnedWithThree); 

	
	 }
	 
	 btn2.addEventListener("click", onRoll);
	 //WHEN ROLL BUTTON IS CLICKED, DO THIS 
	 function onRoll(evt){
	 	//var val = document.getElementById("diceValues").value; 
		//var values = val.split(","); 
		var x; 
		var i; 
		
		console.log("PINNED"); 
		console.log(pinned); 
		for(x = 0; x < 5; x++){
			var paragraph = document.querySelectorAll("p")[x]; 
			//paragraph.setAttribute("class", "originalPara"); 
			console.log(x); 
			if(pinned[x] == false){
				paragraph.setAttribute("class", "originalPara"); 
				//if(values[x] === undefined) {
			
					paragraph.innerHTML = diceRoll(); 
			
				//} 
			// 	else{
			
			// 		paragraph.innerHTML = values[x]; 
			// }


			} else{
				paragraph.setAttribute("class", "pinnedDice"); 
			}
			
		}
		btn2.disabled = true; 
		btn3.disabled = true; 

	

}
var i; 
//var allPara = document.querySelectorAll("p"); 
for(i = 0; i < 5; i++){
	var allPara = document.querySelectorAll("p")[i]; 
	allPara.addEventListener("click", clickingDice);
	//allPara.addEventListener("onmouseover", hoveringOver);
	//allPara.addEventListener("onmouseout", leavingHover);
	allPara.onmouseover = function(event){
		
		//alert("hellow"); 
		var getClass = event.target.getAttribute("class"); 
		if(getClass == "originalPara"){
			event.target.setAttribute("class", "hoverPara");
		}
		
	}
	allPara.onmouseout = function(event){
		
		//alert("hellow"); 
		var getClass = event.target.getAttribute("class"); 
		if(getClass == "hoverPara"){
			//event.target.removeAttribute("class", "hoverPara");
			event.target.setAttribute("class", "originalPara");
		}
		
	}


			
	}
			
	
	function clickingDice(event){
		
		console.log("TARGET EVENT"); 
		console.log(event.target.class); 
		console.log("JUST EVENT"); 
		console.log(event); 
		
		var gettingClass = event.target.getAttribute("class"); 
		if(gettingClass === "originalPara" || gettingClass == "hoverPara"){
			event.target.setAttribute("class", "clickPara");
			gettingClass = event.target.getAttribute("class"); 
			btn3.disabled = false;  
		} else if(gettingClass == "clickPara"){
			event.target.setAttribute("class", "originalPara"); 
			gettingClass = event.target.getAttribute("class"); 
		}
		console.log("GETTING CLASS"); 
		console.log(gettingClass); 
		//btn3.disabled = false;  
		
	} 

	btn3.addEventListener("click", onPin); 
	function onPin(event){
		//btn3.disabled = false; 
		btn2.disabled = true; 
		var x; 
		for(x = 0; x < 5; x++){
			var paragraph = document.querySelectorAll("p")[x]; 
			var gettingClickedPara = paragraph.getAttribute("class")
			if(gettingClickedPara == "clickPara"){
				pinned[x] = true; 
				paragraph.setAttribute("class", "pinnedDice"); 
				console.log("THIS IS INDIVIDUAL PARAGRAPH"); 
				//console.log(paragraph.innerHTML); 
				var addingToScore = parseInt(paragraph.innerHTML); 
				if(addingToScore === 3){
					var val = 0; 
					keepingTrackScore += val; 
				} else { 
					keepingTrackScore += addingToScore; 
				}
				

			} 
			if(pinned[x] == false){
				paragraph.innerHTML = " "; 
			}
			// else{
			// 	paragraph.innerHTML = " "; 
			// }

		}
		btn2.disabled = false; 

		var score = document.querySelector("h3"); 

    	score.innerHTML = "Your Score: " + keepingTrackScore; 
    	document.body.appendChild(yourScore); 

		//alert("PIN HAS BEEN PRESSED"); 

console.log("PINNED AFTER CLICK"); 
console.log(pinned); 
console.log("KEEPING TRACK SCORE"); 
console.log(keepingTrackScore); 


var t; 
	//for(t = 0; t < 5; t++){
		
		if(pinned[0] == true && pinned[1] == true && pinned[2] == true && pinned[3] == true && pinned[4] == true){
			btn2.disabled = true; 
			btn3.disabled = true; 
			console.log("GAME IS OVER"); 
			var getComputerScore = cScore; 
			var getUserScore = keepingTrackScore; 
			console.log("computer score"); 
			console.log(cScore); 
			console.log("user score"); 
			console.log(keepingTrackScore); 
			var winner = getComputerScore; 
			var computerWon = true;  
			var scoreRelatedString = " "; 
			if(winner == getUserScore){
				var win = document.createElement("h2"); 
				win.setAttribute("id", "tiedScore");  
				var displayWinner = document.createTextNode(" You and the computer tired with a score of:  " + winner);       
				win.appendChild(displayWinner);                                
				document.body.appendChild(win);
				console.log("WINNER"); 
				console.log(winner); 
			}
			if(winner > getUserScore){
				winner = getUserScore; 
				computerWon = false; 


			}
			if(computerWon == true){

				var win = document.createElement("h2");   
				var displayWinner = document.createTextNode(" YOU LOSE Computer won with a score of: " + winner); 
				win.setAttribute("id", "looseScore");      
				win.appendChild(displayWinner);                                
				document.body.appendChild(win);
				console.log("WINNER"); 
				console.log(winner); 
			} else if(computerWon == false){
				var win = document.createElement("h2"); 
				win.setAttribute("id", "winScore");  
				var displayWinner = document.createTextNode(" You won with a score of:  " + winner);       
				win.appendChild(displayWinner);                                
				document.body.appendChild(win);
				console.log("WINNER"); 
				console.log(winner); 

			}
			

			


	}


	}

	



	}







    console.log("DOM fully loaded and parsed");
  });



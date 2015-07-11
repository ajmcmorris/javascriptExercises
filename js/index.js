window.onload = function(){
	
	function programStructure (){

		function loopTriangle(){			 
			for(var tag = "#"; tag.length < 8; tag +="#"){
				console.log(tag);
			}
		}
		function fizzBuzz(){
			for(var i = 1; i < 101; i++){
				var output = "";
				if(i % 3 === 0){
					output += "fizz";
				}
				if (i % 5 === 0){
					output += "buzz";
				}				
				console.log(output || i);
			}
		}
		function chessBoard(){
			var size = 8;
			var board =" ";

			for(var row = 0; row< size; row++){
				
				for(var column = 0; column< size; column++){
					if((row+column)% 2 ===0)
					{
						board += " ";
					}
					else{
						board += "#";
					}
				}
				board += "\n";	
			}
			console.log(board);
		}
		loopTriangle();
		fizzBuzz();
		chessBoard();
	}
	function writingFunctions (){

		function min(a,b){
			if (a < b){
				return console.log(a);
			}
			else{
				return console.log(b);
			}
		}
		function isEven(number){
			if (number % 2 ===0){
				return console.log(true);
			}
			else if (number % 2 ===1){
				return console.log(false);
			}
			else if(number < 0){
				return console.log(isEven(-number));
			}
			else{
				return console.log(isEven(number - 2));
			}
		}

		function countResults(){
			return countString("Hello");
		}
		function countString(string){
			var character = [];
			for(var i = 0; i < string.length; i++){
				if(string.charAt(i) == findChar('l')){
					character.push(string.charAt(i));
				}
			}
			return console.log(character.length);
		}
		function findChar(index){
			return index;
		}
		min(5,100);
		isEven(-1);
		countResults();
	}
	function dataStructure(){

		function range(start,end,step){
			var rangeray = [];
			if(step == undefined){
				for(var i = start; i <= end; i++){
					rangeray.push(i);
				}
			}
			else{
				for(start; start <=end; start+=step){
					rangeray.push(start);
				}
			}
			return console.log(rangeray);
		}

		 function sumArray(array){
			var sum = 0;
			for(var a = 0; a < array.length; a++){
				sum += array[a];
			}
			return console.log(sum);
		}
		
		range(1,10,2);
	}

	dataStructure();
	//writingFunctions();
	//programStructure();
};
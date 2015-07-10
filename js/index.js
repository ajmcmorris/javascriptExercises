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
		//loopTriangle();
		//fizzBuzz();
		chessBoard();
	}
	programStructure();
};


module.exports = generator;


function generator (arrayLength) {
  var min = 0;
  var max = arrayLength;
  var arr = [];
	//should be an array
	if(!arrayLength) {
	  console.log("this is array length", arrayLength);
      return [];
	}
	//must accept a type of number
	if(typeof arrayLength !== "number") {
		return "Not a type of number!";
	}
	//length should equal the number passed in
	while (arr.length !== arrayLength){
		var number =Math.floor(Math.random() * (max - min) + min);
		if (arr.indexOf(number) == -1) {
		arr.push(number);
		}
	}


	return arr;
}

generator(3);
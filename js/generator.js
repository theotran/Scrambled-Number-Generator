

module.exports = generator;


function generator (arrayLength) {
  var min = 0;
  var max = 3;
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
	for (var i=0; i < arrayLength; i++) {
		arr.push(i);
	}

	return arr;
}
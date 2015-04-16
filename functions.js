//Exercises 2A -- n<=5
var isArmstrong = function(n){
	"use strict"
	var numStr, sum, result;
	result = 0;
	
	if (n >= 1 && n <= 99999) {
			numStr = String(n);
			for (var i=0; i < numStr.length; ++i){
				sum = Math.pow(parseFloat(numStr[i]), numStr.length);
				result = sum + result;
			}

			if (n == result) return true
			else {return false}}

	else {return "The number you entered is not in the valid domain"}
}


//Exercises 2B -- list
var isArmstronglist = function(){
	"use strict"
	var list;
	list = " ";
	
		//define isArmstrong again just in case
		var isArmstrong = function(n){
			"use strict"
			var numStr, sum, result;
			result = 0;
	
			if (n >= 1 && n <= 99999) {
					numStr = String(n);
					for (var i=0; i < numStr.length; ++i){
						sum = Math.pow(parseFloat(numStr[i]), numStr.length);
						result = sum + result;
					}
				if (n == result) return true
				else {return false}
			}
			else {return "The number you entered is not in the valid domain"}
		}
	
	for (var j = 0; j < 100000; ++j) {
				
			if (isArmstrong(j) == true) (list = list + j + ', ');
			else {};
	}
	
	//list = list.replace(/\s+$/, '');
	list = list.slice(0,-2);
	return list;
}


//Exercise 2C -- allSubstrings1
var allSubstrings1 = function(s) {
		"use strict";
		s = String(s);
		var result = " ";

		for (var i = 0; i < s.length; ++i) {

			for (var j = i; j < s.length; j++) {
				result = result + s.substring(i,j+1) + ", ";
				}
		}
		result = result.slice(0,-2);
		return result;
}


//Exercise 2D -- allSubstrings2
var allSubstrings2 = function(s) {
	"use strict";

	s = String(s);
		var k;
		var resultarr = [];

		for (var i = 0; i < s.length; ++i) {

			for (var j = i; j < s.length; j++) {
			k = resultarr.push(s.substring(i,j+1));
				}
		}
		//resultarr = result.slice(0,-2);
		return resultarr;
		return k;
}


//Exercise 2E -- maxWord
var maxWord = function(s){
		var k = 0;
		strArray = s.split(" ");

		for (var i = 0; i < strArray.length; ++i){
			if (strArray[i].length > k)
				{k = strArray[i].length;
				result = strArray[i];
			}
			else {}
		}

	return result;
}
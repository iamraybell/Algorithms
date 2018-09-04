//Write code to check if string2 is a rotation of string1 using only one call to isSubstring();.


// BadMatch Tabke and following isSubstring function is based on Boyer Moore Horspool algorithm.  
class BadMatchTable{
	constructor(string){
		this.table = {};
		let table = this.table;
		this.length =  string.length;
		for( let index = 0; index < this.length-1; index+=1){
			table[string[index]] = this.length-index-1;
		}
		if(!table[string[this.length-1]]){
			table[string[this.length-1]] = this.length;
		}
	}

	get(char){
		if(this.table[char])return this.table[char];

		return this.length;
	}
}

function isSubString(string1, string2){
	var badMatchTable =  new BadMatchTable(string2);
	let startIndex = string2.length;
	while( startIndex< string1.length){
		let reverseCountIdx = 0;
		while(reverseCountIdx >=0){
			if(string1[startIndex - reverseCountIdx] != string2[string2.length - 1 - reverseCountIdx]){
				startIndex += badMatchTable.get(string1[startIndex]);
				break;
			}
			reverseCountIdx-=1;
		}
		if(reverseCountIdx <0)return true;	
	}
	return false;
}


// The trick to this is to just double the string you want to check against. if string2 is a rotation, just double string1 a check against 
//that. 
//example: "erbottlerwat" is a rotation of "waterbottlewaterbottle".
function isRotation(string1, string2){
	if(string1.length != string2.length) return false;

	let string1Doubled = string1 + string1;
	return isSubString(string1Doubled, string2);
}

console.log(isRotation('waterbottle', 'erbottlewat'));
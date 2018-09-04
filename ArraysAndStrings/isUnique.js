//Implement an Algorithm to determine if a string has all unique chars.

function isUnique(string){
	let cache = {};
	for(let idx = 0; idx < string.length; idx+=1){
		if(cache[string[idx]]) return false;
		cache[string[idx]] = true;
	}
	return true;

}
console.log(isUnique('rayss'));

//now without use of a additional data structure.

// n squared version
function isUniqueNSquared(string){
	for(let idx = 0; idx < string.length; idx+=1){
		for(let secondIdx = idx+1; secondIdx< string.length; secondIdx+=1){
			if(string[secondIdx] == string[idx])return false;
		}
	}
	return true;
}

console.log(isUniqueNSquared('raya'));

//sort version
function quickSort(arr, start = 0, pivot = arr.length-1){
	if(pivot <= start) return;
	let wall = start-1;
	function swap(){
		wall+=1;
		let temp = arr[wall];
		arr[wall] = arr[index];
		arr[index] = temp;
	}

	for(var index = start; index < pivot; index+=1){
		if(arr[index] < arr[pivot]){
			swap();
		}
	}
	swap();
	quickSort(arr, start, wall-1);
	quickSort(arr, wall+1, index);
}

function isUniqueNLogN(string){
	var strArr = string.split('');
	quickSort(strArr);
	for(let index = 0; index < strArr.length-1; index+=1){
		if(strArr[index] == strArr[index+1])return false; 
	}
	return true;

}

console.log(isUniqueNLogN('raya'));






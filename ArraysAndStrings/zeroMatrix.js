//Write and Algorithm such that if an element is an MxN Matrix is 0, the entire row and column are zero. 

var matrix = [
	[0,1,1,1,1],
	[1,1,1,1,1],
	[1,1,0,1,1],
	[0,1,1,1,0],
];

function findAndCacheZeros(matrix, rowsToEdit, columnsToEdit){
	//this function walks thru the matrix, and caches zeros. 
	for(let rowIndex = 0; rowIndex < matrix.length; rowIndex+=1){
		for(let columnIndex = 0; columnIndex < matrix[rowIndex].length; columnIndex+=1){
			if(matrix[rowIndex][columnIndex] === 0){
				rowsToEdit[rowIndex] = rowIndex;
				columnsToEdit[columnIndex] = columnIndex;
			}
		}
	}
}

function zeroRows(rowsToEdit, matrix){
	//for each row in rowsToEdit hashTable, we will set the entire row to zero.
	for(row in rowsToEdit){
		var index = 0;
		while(index < matrix[row].length){
			matrix[row][index] = 0;
			index+=1;
		}
	}
}

function zeroColumns(columnsToEdit, matrix){
	//for each column in columnsToEdit hashTable, we will set the entire column to zero.
	for(column in columnsToEdit){
		var row = 0;
		while(row < matrix.length){
			matrix[row][column] = 0;
			row+=1
		}
	}
}

function zeroMatrix(matrix){
	let rowsToEdit = {};
	let columnsToEdit = {};
	findAndCacheZeros(matrix, rowsToEdit, columnsToEdit);
	//We could possibly do both zeros in the same function, but for now I'll leave it at this. 
	zeroRows(rowsToEdit, matrix);
	zeroColumns(columnsToEdit, matrix);
}

//Time complexity : O(MN), because at most we will will need to go thru the matrix twice. 
//Space complexity: I dont know if this is right, but I think we would say at worst its O(MN)? because if you had an matrix of [[0]] you'd have to 
//go thru the entire matrix in a way. However, as it grows, your only storing the row and column, so I'm not sure about this. 

zeroMatrix(matrix);
console.log(matrix);
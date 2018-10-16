//given a sorted array, write an algorithm that will create a bst with minimal height

class Node{
	constructor(value){
		this.val = value
		this.left = null;
		this.right = null;
	}
}


class BST{
	constructor(){
		this.root = null;
		this.height = 0
	}
	//returns height of tree
	findHeight(node){
		if(!node){
			return 0;
		}
		return 1+ Math.max(this.findHeight(node.left), this.findHeight(node.right))
	}
	//adds a value to the tree
	add(val){
		let tempNode = new Node(val);
		if(!this.root){
			this.root = tempNode;
		}else{
			let cur = this.root;
			while(cur){
				if(cur.val < val && cur.right){
					cur = cur.right;
				}else if(cur.val > val && cur.left){
					cur = cur.left;
				}else if(cur.val < val && !cur.right){
					cur.right = tempNode;
					if(!cur.left){
					}
					cur = null;
				}else{
					cur.left = tempNode;
					if(!cur.right){

					}
					cur = null;

				}
			}
		}
		return this
	}

	addAll(arr, start = 0, end=arr.length-1, parent =null, direction = null){

		let curIndex = Math.floor((end+start)/2);
		if(start> end || arr[curIndex] == undefined){
			return;
		}
		let tempNode = new Node(arr[curIndex]);
		if (!parent){
			this.root = tempNode;
		}else{
			parent[direction] = tempNode;
		}
		this.addAll(arr, start, curIndex-1, tempNode, 'left');
		this.addAll(arr, curIndex+1, end, tempNode, 'right');
	}
}

let myBST = new BST();
var arr = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10,11,12,13,14,15]
myBST.addAll(arr);
console.log()
console.log(myBST.findHeight(myBST.root))
console.log(myBST.root.left)

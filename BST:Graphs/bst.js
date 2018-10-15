//TODO; base randomizer on 100/max height,
//because nodes closer to root appear more often. this could solve that.
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

	findHeight(node){
		if(!node){
			return 0;
		}
		return 1+ Math.max(this.findHeight(node.left), this.findHeight(node.right))
	}
	getTrueOrFalse(){
		let num =Math.floor(Math.random() * 101);
		let status; false
		if(num<50){
		status = true
		}
		else{
		status= false
		}
		return status
	}
	getRandom(){
		let cur = this.root;

		let MoveToChildren = this.getTrueOrFalse();
		while(MoveToChildren == true){
			if(!cur.left&& !cur.right){
				return cur.val
			}
			else if(!cur.left && cur.right){
				cur = cur.right;
			}
			else if(!cur.right && cur.left){
				cur = cur.left;
			}else{
				let moveDirWithBool = this.getTrueOrFalse();
				if(moveDirWithBool==true){
					cur = cur.left;
				}else{
					cur = cur.right;
				}
			}
			MoveToChildren = this.getTrueOrFalse();
		}
		return cur.val
	}
}

let myBST = new BST();
myBST.add(50).add(25).add(30).add(0).add(100).add(75).add(125);

let runner = 0
while(runner < 5){
	console.log(myBST.getRandom())
	runner+=1
}





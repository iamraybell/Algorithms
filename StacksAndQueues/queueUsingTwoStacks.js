class QueueWithTwoStacks{
	constructor(){
		this.stackOne = [];
		this.stackTwo= [];
	}
	//adds a value
	add(val){
		this.stackTwo.push(val);
		return this;
	}

	//checks a size of a element
	size(){
		return this.stackTwo.length + this.stackOne.length;
	}

	// returns boolean telling if stack is empty
	isEmpty(){
		return this.stackOne.length == 0 && this.stackTwo.length == 0;
	}

	//adds value
	push(val){
		this.stackTwo.push(val);
	}

	//returns a value without removing it from stack
	peek(){
		if(this.stackOne.length == 0 && this.stackTwo.length == 0){
			return null
		}
		if(this.stackOne.length == 0){
			this.flipStackTwo();
		}
		return this.stackOne[this.stackOne.length-1];
	}

	//takes all elements from stack two and adds them to stack one in reverse.
	flipStackTwo(){
		while(this.stackTwo.length >0){
			this.stackOne.push(this.stackTwo.pop());
		}
	}
	//removes and returns a value
	remove(){
		if(this.stackOne.length == 0 && this.stackTwo.length == 0){
			return null
		}
		if(this.stackOne.length == 0){
			this.flipStackTwo();
		}
		return this.stackOne.pop();
	}
}

let myStack = new QueueWithTwoStacks();

myStack.add(1).add(2).add(3).add(4).add(5);
console.log(myStack.peek());

let cur = myStack.remove();
while(cur){
	console.log(cur);
	cur = myStack.remove()
}
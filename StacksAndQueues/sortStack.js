//write a stack that will sort item from smallest to largest. Can use an additional stack.

class QueueWithTwoStacks{
	constructor(){
		this.stackOne = [];
		this.stackTwo= [];
	}
	//adds a value
	add(val){
		this.flipStackTwo()
		let added = false;
		while(this.stackTwo.length > 0 && added == false){
			if(val > this.stackTwo[this.stackTwo.length-1]){
				this.stackOne.push(val);
				added = true;
			}
			this.stackOne.push(this.stackTwo.pop());
		}
		if(added == false){
			this.stackOne.push(val);
		}
		return this
	}

	//checks a size of a element
	size(){
		return this.stackOne.length;
	}

	// returns boolean telling if stack is empty
	isEmpty(){
		return this.stackOne.length == 0
	}

	//takes all elements from stack two and adds them to stack one in reverse.
	flipStackTwo(){
		while(this.stackOne.length >0){
			this.stackTwo.push(this.stackOne.pop());
		}
	}
	//removes and returns a value
	remove(){
		if(this.stackOne.length == 0){
			return null
		}

		return this.stackOne.pop();
	}
}

let myStack = new QueueWithTwoStacks();

myStack.add(10).add(1).add(30).add(40).add(2).add(100).add(0);

let cur = myStack.remove();
while(cur!= null){
	console.log(cur);
	cur = myStack.remove()
}
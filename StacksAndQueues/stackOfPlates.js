class SetOfStacks{
	constructor(maxSize=5){
		this.maxSize = 5;
		this.set = [[]];
		this.curSet = 0;
	}
	//pushes a value into our set. if the length of that array is at max, it creates another.
	push(val){
		if(this.set[this.curSet].length == this.maxSize){
			this.set.push([]);
			this.curSet+=1;
		}
		this.set[this.curSet].push(val);
	}

	//removes a value. if nothing is in our stack it returns null.
	pop(){
		if(this.curSet == 0 && this.set[this.curSet].length==0){
			return null;
		}
		if(this.curSet > 0 && this.set[this.curSet].length==0){
			this.curSet-=1;
		}
		return this.set[this.curSet].pop();

	}
}

var stack = new SetOfStacks();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);


let returnVal = stack.pop();

//removes all items from stack
while(returnVal != null){
	console.log(returnVal);
	returnVal = stack.pop();
}



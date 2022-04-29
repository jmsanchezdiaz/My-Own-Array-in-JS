class DynamicArray {
  constructor(){
		this.length = 0;
		this.data = {};
  }

  append(element){
     this.data[this.length] = element;
     this.length++;
  }
  
  get(index){
    return this.data[index];
  }
  
  shiftItemsRight(index){
    for(let i = index; i > 0; i--){
     	this.data[i] = this.data[i - 1]
    }
  }
  
  shiftItemsLeft(index){
    for(let i = index; i < length - 1; i++){
      this.data[i] = this.data[i + 1];
    }
  }
  
  preappend(element){
    this.shiftItemsRight(this.length);
    
    this.data[0] = element;
    
    this.length++;
  }
  
  insert(index, element){
    this.data[index] = element;
    this.length = index + 1;
  }
  
  remove(index){
    let removeElement = this.data[index];
    
    this.shiftItemsLeft(index);
    
    delete(this.data[index]);
    this.length--;
    
    return removeElement;
  }
}


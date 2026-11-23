let numbers = [1,3,4,5]
console.log(numbers);
//forEach//
console.log("forEach");
let total= 0 ;
let total2= 0 ;
numbers.forEach( function(number) {
    total+=number
});
console.log(total);
    //forEach2
        Array.prototype.forEach2 = function(arr){
        for(let i = 0; i< this.length ;i++){
            if(i in this){
                arr(this[i] , i , this)
            }
        }
    }
    numbers.forEach2(function(number) {
        total2+=number
    });
    console.log(total2);
//find()//
console.log("find");

let result = numbers.find(function(number){
    return number > 4
})
console.log(result);
//find2()
   Array.prototype.find2 = function(arr ,thisArg){
       const length = this.length;
    for (let i = 0; i < length; i++) {
        if (arr.call(thisArg, this[i], i, this)) {
            return this[i];
     }
}
    }
let result2 = numbers.find2(function(number){
    return number > 2
})
console.log(result2);
//findIndex()
console.log("findIndex");
let index = numbers.findIndex(function(number){
    return number === 3
})
console.log(index);
////findIndex()
 Array.prototype.findIndex2 = function(arr ,thisArg){
         const length = this.length;
    for (let i = 0; i < length; i++) {
        if (arr.call(thisArg, this[i], i, this)) {
            return i;
        }
    }
    return -1;
 }
let index2 = numbers.findIndex2(function(number){
    return number === 4
})
console.log(index2);
//filter()//
console.log("filter");
let a = numbers.filter(function(number){
    return number % 2 === 0; 
})
console.log(a);
//filter2()//
Array.prototype.filter2 = function(arr ,thisArg){
    let rerult = []
       const length = this.length;
    for (let i = 0; i < length; i++) {
        if (arr.call(thisArg, this[i], i, this)) {
              rerult.push(this[i]);
     }
}
return rerult;
}
let a1 = numbers.filter2(function(number){
    return number % 2 === 0; 
})
console.log(a1);
//map()//
console.log("map");
let char = "A"
let b = numbers.map(function(number){
    return number*2
})
console.log(b);
let c = numbers.map(function(number){
    let v = ''  
    for( let i = 0 ; i < number ; i++){
        v+=char
    }
    return v;
})
console.log(c);
//map2()//
Array.prototype.map2 = function(arr , thisArg){
     const length = this.length;
    const result = new Array(length);
    for (let i = 0; i < length; i++) {
        if (i in this) {
            result[i] = arr.call(thisArg, this[i], i, this);
        }
    }
    return result;
    
}
let cc = numbers.map2(function(number){
    return number*2
})
console.log(cc);
let cha = "B"
let d = numbers.map2(function(number){
    let n = ''  
    for( let i = 0 ; i < number ; i++){
        n+=cha
    }
    return n;
})
console.log(d);
//every

console.log("every");
let e = numbers.length && numbers.every(function(number){
    return number < 0
})
console.log(e);
if(e){
    console.log("có thể mua rựu");
    
}else{
    console.log("Không thể mua rựu");
    
}
// every2
Array.prototype.every2 = function(callback , thisArg){
    for(let i = 0 ; i<  this.length ; i++){
        if (this.hasOwnProperty(i)) {
      if (!callback(this[i], i, this)) {
        return false;
      }
  }
    }
     return true;
}
let ff = numbers.length && numbers.every2(function(number){
    return number > 0
})
console.log(ff);








    





let str="Hello";

let iterator = str[Symbol.iterator]();

while(ture){
    let result = iterato.next();
    if(result.done) break;
    console.log(result.value);
}
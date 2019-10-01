function first(){
    console.log('Run First');
}

function second(){
    console.log("run second");
}

console.log("Starting");
first();
second();
console.log("end");

console.log("---------task를 분리할 경우--------------")
console.log("Starting")
setTimeout(first,2)
setTimeout(second,0)
console.log("end")

//1.
console.log('cvr');
setTimeout(()=>{
    console.log('IT');
},2000);
console.log('III-A');
calculate();

//2.
function calculate(){
    let sum=0;
    for(let i=0;i<=10;i++){
        sum=sum+i;
    }
    console.log("sum is "+sum);
}


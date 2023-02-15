//1.
// const num=4;
// const p1=new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//     //     console.log('Welcome');
//     // },2000)

//     if(num>0){
//         resolve('the number is positive')
//     }
//     else{
//         reject('the number is negative')
//     }

// })

// p1.then((message)=>{
//     console.log(message);
// })
// p1.catch((message)=>{
//     console.log(message);
// })

//2.
const p1=Promise.resolve('Hello Ankith');
const p2=Promise.reject('sorry');
const p3=100;
const p4=new Promise((resolve, reject) => {
    setTimeout(resolve,1000,'Done');
    })
Promise.any([p3,p4]).then((value)=>console.log(value))


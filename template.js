let product="laptop";
let quantity=2;
let status="pending";
let productstatus="status of the product is";

productstatus+=(status=='delivered')? " green":  " red"



let description="I have ordered "+quantity+" "+product+"s"+" "+"from amazon last week"+" "+productstatus;

function deliveryDate(){
    return "10-02-2023";
}

let d1=`I have ordered ${quantity} ${product}s form amazon last week ${deliveryDate()} ${productstatus}`;
console.log(description);
console.log(d1);
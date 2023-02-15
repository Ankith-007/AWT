const s1=Symbol('IT-A');
const s2=Symbol('IT-A');
let user = {
    id:1207,
    name:'cvrit',
    city:'Hyderabad',
    age:20
};
user.id=1207;
let u={
    id:1207,
    name:'cvrit',
    city:'Hyderabad',
    age:20
};
const ids=Symbol('id');
  console.log(u);
  const RED = Symbol('red');
  const ORANGE = Symbol('orange');
  const YELLOW = Symbol('yellow');
  const BLUE = Symbol('blue');
    const cat = 'blue';
    function getLevel(color){
        switch(color){
            case RED:
                return 'Apple';
            case ORANGE:
                return 'Carrot';
            case YELLOW:
                return 'Banana';
            case BLUE:
                return 'Sky';
                default:
                    console.log("No color detected");
        }
    }
    console.log(getLevel(cat));

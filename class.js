// class human{
//     constructor(){    
//         this.age=20;
//     }
//     printAge(){
//         console.log(this.age);

//     }
// }
//     class person extends human{
//         constructor(){
//            // super();
//             this.name="Ankith";
//            // this.age=50;
//         }
//         printName(){
//             console.log(this.name);
//         }
//     } 
    // const persons=new person();
    // persons.printAge();
    // persons.printName();

    //2.
    class person{
        constructor(){
            this.name="ankith";
            this.age="20";
        }
        printName(){
            console.log(this.name);
        }
        printAge(){
            console.log(this.age);
        }

    }
    const persons=new person();
    persons.printAge();
    persons.printName();
    
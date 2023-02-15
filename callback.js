const userleft=true
const userwatchingme=true;
function watchagain(callback,errorcall){
    if(userleft){
        errorcall({    
        name:'ankith',
        message:'userleft'
    })
    }
    else if (userwatchingme){
        errorcall({
            name:'ankith',
            message:'userwatchingme'
        })
    }
    else{
        callback('welcome')
    }   
    }
    watchagain((message)=>{
        console.log('success '  +message)
    },(error)=>{
        console.log(error.name+' '+ error.message);
    })

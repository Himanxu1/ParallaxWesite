let name = {
    firstname : "Himanshu",
    lastname : "singh"
}


let printName = function(){
    console.log(this.firstname + " "+ this.lastname);
}

let printMyname = printName.bind(name);
printMyname();
console.log("Hello Ravi")

var person = {

    display : function(first, second){
        console.log("Display function callled", this.first + " " + this.second)
    }
}

var person1 ={
    first: " ravi",
    second: "Nivamgune"
}

person.display.call(person1);
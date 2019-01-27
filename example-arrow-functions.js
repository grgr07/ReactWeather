var names = ['Greg', 'Julia', 'Elin', 'Rona'];

names.forEach(function(name){
   // console.log('forEach', name);
});

names.forEach((name) => {
    //console.log('arrowFunc', name);
});

names.forEach((name) => console.log('arrowFunc Short', name));

var returnMe = (name) => name + '!';
console.log(returnMe('Gregory'));

var person = {
    name : 'Andrew',
    greet: function(){
        names.forEach((name) =>{
                //names.forEach(function(name){
                //because of the anonimous function doesn't know this.the solution to use arror functions
                //arrow functions doesn't update this like anonimous functions !!!keep this binding
            console.log(this.name + ' says hi to ' + name); 
        });
    }
};

person.greet();

//Challenge 
function add(a,b){
    return a + b;
}

var addStatement = (a, b) => { //this allows multiple lines
    return a + b;
}

var addExpression = (a, b) => a + b; //return result automatically

console.log(addExpression(1,3));
console.log(addExpression(9,0));
const score = 85;
const grade = (score >= 90) ? 'A' :
              (score >= 80) ? 'B' :
              (score >= 70) ? 'C' :
              (score >= 60) ? 'D' : 'F';

console.log(`Your grade is: ${grade}`);

const age  = 48;
const isAdult = (age >= 18) ? 'You are an adult.' : 'You are not an adult.';
console.log(isAdult);


var day="monday";
if(day==='monday'|| day==="sunday"){
    console.log(day+ "start of the week")

}else{
    console.log(day+"is not start of the week");
}


var agenow=20;
var citizenship=true;
if(agenow>=18 && citizenship){
    console.log("The person is eligible to vote");
}else{
    console.log("The person is not eligible to vote");
}
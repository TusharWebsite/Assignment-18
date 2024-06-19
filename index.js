console.log("Question 1");
// Question 1
const a = [2,3,4,5,6,7];

const square =a.map((value)=>{
   return value*value;
});
console.log(square);


console.log("Question 2");
// Question 2
function myApp() {

  const tushar =79;
  const rahul= 66 ;
  const pritam =39;
  const raj =99;
  const ayush =44;
  const ayu =44;


const grade = (score)=>{
  return score > 70 ? "A" : 
  score  > 60 ? "B" : 
  score  > 50 ? "C" : 
  score  > 40 ? "D" : 
  score  > 30 ? "E" : 
 "F" ;
}

return{
  tushar: grade(tushar),
  rahul: grade(rahul),
  pritam: grade(pritam),
  raj: grade(raj),
  ayush: grade(ayush),
  ayu: grade(ayu),
}
    }


 const result = myApp();

 console.log(result);

// Question 3

const car = {
  name: "BMW",
  model: "2 Series and X1",
  year: 2023
};

function cars(car) {
  const fksml = { ...car, model: "3 Series Gran Limousine", year: 2024 };
  return fksml;
}

const b = cars(car);
console.log(b);

// Question 4
const xy = [2, 3, 4, 5, 6, 7];

const prime = xy.filter((value)=>{
  if (value < 2) return false;
  for ( let i = 2 ; i <= Math.sqrt(value) ; i++){
    if (value % i == 0 ) return  false;
  }return true;

})
console.log(prime);

// Question 5

const student = [
  {name:'tushar', age:12 , address:'abc'},
  {name:'pritam', age:19 , address:'xyz'},
  {name:'rahul', age:21 , address:'pqr'}
]
// map
const m = student.map((val)=>{
  console.log(val.name);
});
// filter
const f = student.filter((val)=>{
  if(val.age >18 ){
    console.log(val.name ,"drive the car");
  }else{
    return false;
  }
});
// reduce
const arr = [1,2,3,4,5,6]
const r = arr.reduce((h1,h2)=>{
  return h1 + h2;
});
console.log(r);

// Question 6

const fetching = async ()=>{
  const respose = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await respose.json()
   console.log(data)
};
fetching()

// Question 7

const person = {name:'Ajay', address:'mnn', contact:{phone:84348948489}}

const fet = async ()=>{
  const res = await person;
  const phone = res.contact?.phone
  console.log(phone);
}
fet()
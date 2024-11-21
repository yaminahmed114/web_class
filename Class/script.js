//alert("hello its danger");
//alert("hello");
//var,let,const
var nam;//function scoped
nam="Yamin";
console.log(nam);

let age =40;//global scoped
age=50;
console.log(age);
console.log(typeof(age));
//style variable
//camel,pascel,underscore,snake
//camel-fristName
//underscore-frist_name
//pascel-FristName

const address=("Dhaka");
console.log(address);
console.log(typeof(address));


const addresss=["Dhaka ,45"];
addresss.push(34);
console.log(address);
console.log(typeof(address));

let input= prompt('what the hack');
alert('i want to hack this PC',input);

//Data type  1.primitive,2.complex

var v1=null;
console.log(v1);
console.log(typeof(v1));

var v2=Symbol();
console.log(typeof(v2));

//type converstion
let v3=String(50);
console.log(typeof(v3));
console.log(v3.length);

let example= new Date();
console.log(example);

let v4=55.7836786;
v5=parseInt(v4);
console.log(v5);

//object
let obj={
    name:"Yamin",
    age:22
}
console.log(obj);
console.log(typeof(obj));








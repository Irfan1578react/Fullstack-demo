// const a=20n;
// {
//     let b;
//     console.log("inner",b);
//     console.log("type",typeof(b));
// }
// console.log("outer",a);
// console.log("type",typeof(a));


function async(){
    console.log("hii from anmed func");
    console.log(this);
}
const myfunc2=function(){
    console.log("I am affected by hoisting");
}
const outerfunction=()=>{
    let a="i am in outerfunction";
    const innerfunction=()=>{
        console.log(a);
    }
    return innerfunction();
}
outerfunction();

console.log();
console.log(0=="0");
const color=[];
color.push("Yellow");
color.unshift("Red");
console.log(color);
//forEach
color.forEach(function(col){
console.log(col)
})
color.pop();
for(const i of color){
    console.log(i);

}
color.unshift()
const result=color.map((i) => {
    console.log(i+"12");
})
color.unshift("tr","td");
const res2=color.filter((i) => {
    if(i.length>2){
        return i;
    }
})
console.log(res2);
const f=color.slice(1,3);
console.log(color);
console.log(f);
const td=color.splice(0,2,"Yellow","Yellow2");
console.log(td);
console.log(color);
console.log("<hr>");
// var paraDocument = document.write("<p>hiii</p>");
for(const key of color){
    console.log(key);
}
const person={fname:"dinesh",fname:"gokul"};
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(Object.fromEntries(Object.entries(person)));
const asserts=Object.entries(person).map(([key,values])=>`${key}:${values}`);
console.log(asserts);
const asse=Object.entries(person).map(([i])=> `${i}`);
console.log(asse);
const a=Object.entries(person).map(([i,j,k]) => `${i}${j}${k}`);
console.log(a)
person.fname="varshini";
person["lname"]="subashree";
console.log(person);
const res5={...person,age:20,dr:21};
console.log(res5);
const{fname,...rest}=res5;
console.log(rest);
const no={"name":"prabhu","age":20};
const jon=JSON.stringify(no);
console.log(jon);
const obj=JSON.parse(jon);
console.log(obj);

// documentt=require(`${"d:/MERN/script.js/html/runn.html"}`)
// const r=documentt.createElement("input");

document.body.appendChild(r);
const element=document.createElement("img");
element.src="brucelee.jfif";
element.alt="brucelee";
document.body.appendChild(element);
const element1=document.getElementById('myid');
element1.textContent="hiii";
document.body.appendChild(element1);
const te=document.getElementsByClassName("myclass");
te.innerHTML="bell";
document.body.appendChild(te);

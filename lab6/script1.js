var name = prompt ('Your name','');
document.write("<CENTER><Strong><FONT FACE=ARIAdL,VERDANA  SIZE=6>Welcome "+name+"</FONT><Strong></CENTER>")
var arr=[];
function add() {
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a + b;
    document.getElementById("answer").value= c;
    

}

function divide() {
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a / b;
    document.getElementById("answer").value= c;
    
}
function subtract() {
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a - b;
    document.getElementById("answer").value= c;
    
}
function multiply() {
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a * b;
    document.getElementById("answer").value= c;
    
}



function calculate(id) {

    a = parseInt(document.getElementById("first").value);
    b =parseInt(document.getElementById("second").value);
    var res;
    if(id=="add"){
        res=a + b;
        document.getElementById("answer").value=res;
        arr.push(res);
    }
    else if(id=="subtract"){
        res=a-b;
        document.getElementById("answer").value=res;
        arr.push(res);
    }
    else if(id=="multiply"){
        res=a*b;
        document.getElementById("answer").value=res;
        arr.push(res);
    }
    else if(id=="divide"){
        res=a/b;
        document.getElementById("answer").value=res;
        arr.push(res);
    }
}

function printArray()
{
    document.getElementById('answers').innerHTML =arr;
}
var array1=["john", "Jason", "kevin"];

array1.unshift("jad");

var array2=["manel", "nahla", "sabine", "mirna"];

var array3=array1.concat(array2);

var i=array3.indexOf("john");

var length=array3.length;

var pop=array3.pop();

var shift=array3.shift();

var push= array3.push();

var reverse=array3.reverse();

var array4=array3.slice(0,3);

var include=array4.includes("Sabine");

array2.forEach(i=> console.log(i));

array3.forEach(i=> console.log(i));
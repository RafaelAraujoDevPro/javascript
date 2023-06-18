let objs1 =document.getElementsByTagName("div");
let objs2 =[...document.getElementsByTagName("div")];
objs2.forEach(element => {
    element.innerHTML= "Estudo de javaScript"
})
console.log(objs1);
console.log(objs2);



// const soma = (v1,v2,v3)=> {
//     return v1+(v2*v3)
// }
// let valores = [2,4,6]

// console.log(soma(...valores));

// let player1 = {nome:"rafael",energia:100,vidas:3,magia:150};
// let player2 = {nome:"bruce",energia:100,vidas:5,velocidade:50};
// let player3 = {...player1,...player2}
// console.log(player3);


// let n1 = [10,20,30];
// let n2 = [11,22,33,44,55]
// let n3 = [...n1,...n2]
// // console.log("n1: " + n1);
// // console.log("n2: " + n2);
// console.log("n3: " + n3);
// console.log("tipo de n3: " + typeof(n3));
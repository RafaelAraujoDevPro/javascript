//&& ---> and (significa 'e')
//|| ---> or (significa 'ou' )
//! ---> not (significa 'não')
console.log('hello word!')
let n1,n2,n3,n4
n1 = 10
n2 = 5 
n3 = 15
n5 =2
console.log((n1>n2)&&(n1>n3));
console.log((n3<n1)||(n5<n3));
console.log(!((n5<n1)||(n1>n3)));
if((n1>n5)&&(n2>n5)) {
    console.log('A operação é verdadeira!');
} else {
    console.log('A operação é falsa!');
}
if((n1<n5)||(n2>n5)) {
    console.log('A operação é verdadeira!');
} else {
    console.log('A operação é falsa!');
}
if((n1<n5)||(n2<n5)) {
    console.log('A operação é verdadeira!');
} else {
    console.log('A operação é falsa!');
}

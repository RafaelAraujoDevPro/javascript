const user1 = {
    id: 1,
    name: 'Rafael',
    age: 32,
    gender: 'M',
    andress: 'Boa Vista-RR'
};
const user2 = {
    id: 2,
    name: 'RaYlane',
    age: 27,
    gender: 'F',
    andress: 'Boa Vista-RR'
};

const nameAge = ['name', 'age'];
const idGender = ['id', 'gender'];
const users = [user1,user2];
//=================================================

//Método para filtrar propriedades de objetos, com "forEach()"

//=================================================

function getKeysUser(objectOrige,keysUser){
    const objectEmpty = {};
    keysUser.forEach((elem)=> {
        objectEmpty[elem] = objectOrige[elem];
    });
    return objectEmpty;
};

//=================================================

//Método para filtrar propriedades de objetos, com "map()" e "reduce()" 

//=================================================

const filterObject = function(objectOrige,keysArray){
    return keysArray
                .map((elem) => ({[elem]: objectOrige[elem]}))
                .reduce((acc,currEleme) => {
                    return {
                        ...acc,
                        ...currEleme
                    };
                }, {});
};
const userfilterNameAge = filterObject(user1,nameAge);
console.log(userfilterNameAge);

const userFilterIdGender = filterObject(user1,idGender);
console.log(userFilterIdGender);

//=================================================

//Método que concatena dois objetos literais e os reduz pra um só objeto.

//=================================================

function sumObjects(object1,object2){
    const getObjects = [object1,object2];
    return getObjects.reduce((acc,currentElem) => {
        return {
            ...acc,
            ...currentElem
        }; 
    }, {});
};

const userObject = sumObjects(userfilterNameAge,userFilterIdGender);
console.log(userObject);

 //=================================================

 /* Método para percorrer array de objetos literais e filtrar estes objetos apartir de um array de propriedades.
*/
// ==== arrays passados para o método.
// const user = [user1, user2];
// const nameAge = ['name', 'age'];

//==================================================

function addObjects(keysList,arrayUsers){
    return arrayUsers.map((elem)=> {
        const objct = {}
        keysList.forEach((key)=>{
            objct[key] = elem[key];
        });
        return objct;
    });
};
const listUsers = addObjects(nameAge,users);
console.log(listUsers);

//==================================================

//               curying function

//==================================================

// const add = (num1,num2) => num1+num2;
// const increment = (number) => add(2,number);

const add = num1 => num2 => num1+num2;
const increment = add(3);
console.log(increment(5));

//==================================================

//               Remover propriedades de objetos

//==================================================

/*
// Criar um método que remove propriedades de array de objetos literais e retorna um novo array de objetos sem essas propriedades removidas.
// O método recebe uma lista de chaves de propriedades que serão removidas.
// Também recebe uma lista de objetos literais.
// Se os objetos literais contém chaves de propriedades, iguais as da 
lista de chaves, então retornará um novo objeto para uma lista de objetos sem essas chaves que são iguais.
*/
//

const keysRemove = ['id', 'gender'];

// function removeProperty(listKeys,objectList){
//     let arrayUsersFilter = [];
//     objectList.map((elem)=>{//"elem" sera um objeto literal;
//         for(let valueKey in elem){// o for...in pode iterar um obj literal.
//             for(let value of listKeys){
//                 if(valueKey===value){
//                     delete elem[valueKey];
//                 }
//             };
//         }; 
//         return arrayUsersFilter.push(elem);  
//     });
//     return arrayUsersFilter;
// }

// function removeProperty(listKeys,objectList){
//     let arrayUsersFilter = [];
//     objectList.map((elem)=>{//"elem" sera um objeto literal;
//         for(let value of listKeys){
//             if(value in elem){
//                 delete elem[value];
//             }
//         };
//         return arrayUsersFilter.push(elem);  
//     });
//     return arrayUsersFilter;
// };

function removeProperty(listKeys,objectList){
    let arrayUsersFilter = [];
    objectList.map((elem)=>{//"elem" sera um objeto literal;
        listKeys.forEach((valueKey)=>{
            if(valueKey in elem){
                delete elem[valueKey];
            };
        });
        return arrayUsersFilter.push(elem);  
    });
    return arrayUsersFilter;
};


const propRemoved = removeProperty(keysRemove,users);
console.log(propRemoved);
function resolverExpressaoNumeric(expression){
    console.log(expression)

    let currentExpression = expression;

    const regExpMultiply = /[0-9]{1,}\*[0-9]{1,}/g;
    const regExpDivision = /[0-9]{1,}\/[0-9]{1,}/g;
    const regExpAddition = /[0-9]{1,}\+[0-9]{1,}/g;
    const regExpSubtraction = /[0-9]{1,9}\-[0-9]{1,9}/g;


    function multiply(expMultiply){
        const matchMultiply = expMultiply.match(regExpMultiply);
        const splitMultiply = matchMultiply.join('').split('*');
        const resultMultiply = 
        parseFloat(splitMultiply[0]) * 
        parseFloat(splitMultiply[1]);

        console.log('corte de string: ',
        matchMultiply,
        splitMultiply,
        resultMultiply
        );
    
        expMultiply = 
        expMultiply.replace(matchMultiply, resultMultiply);
        console.log('expressão atual: ',expMultiply,);

        let testeExpMultiply = expMultiply.match(/[0-9]{1,9}\*/g)
        if(testeExpMultiply!== null){
            expMultiply = multiply(expMultiply);
            // FUNÇÃO RECURSIVA !!!!!!!!
        };
        return expMultiply;
    };

    if(currentExpression.includes('*')) {
       currentExpression = multiply(currentExpression)
    };
     
    console.log('expressão atual: ',currentExpression,'\n');
     

    function division(expDivision){
        const matchDivision = expDivision.match(regExpDivision);
        const splitDivision = matchDivision.join('').split('/');
        const resultDivision = 
        parseFloat(splitDivision[0]) / 
        parseFloat(splitDivision[1]);

        console.log('corte de string: ',
        matchDivision,
        splitDivision,
        resultDivision
        );
    
        expDivision = 
        expDivision.replace(matchDivision, resultDivision);
        console.log('expressão atual: ',expDivision,'\n');

        let testeExpDivision = expDivision.match(/[0-9]{1,9}\//g);
        if(testeExpDivision!== null){
            expDivision = division(expDivision);
            // FUNÇÃO RECURSIVA !!!!!!!!
        };
        return expDivision;
    };

    if(currentExpression.includes('/')) {
         currentExpression = division(currentExpression);
    }

   
    function addition(expAddition){
        const matchAddition = expAddition.match(regExpAddition);
        const splitAddition = matchAddition.join('').split('+');

        const resultAddition = 
        parseFloat(splitAddition[0]) + 
        parseFloat(splitAddition[1]);

        console.log('corte de string: ',
        matchAddition,
        splitAddition,
        resultAddition
        );
    
        expAddition = 
        expAddition.replace(matchAddition, resultAddition);
        console.log('expressão atual: ',expAddition,'\n');
          
        let testeExpAddition = expAddition.match(/[0-9]{1,9}\+/g)
        if(testeExpAddition!== null){
            expAddition = addition(expAddition);
            // FUNÇÃO RECURSIVA !!!!!!!!
        };
        return expAddition;
    };

    if(currentExpression.includes('+')) {
        currentExpression = addition(currentExpression);
    };

    
    function subtraction(expSubtraction){
        const matchSubtraction = 
        expSubtraction.match(regExpSubtraction);
        const splitSubtraction = matchSubtraction.join('').split('-');
        const resultSubtraction = 
        parseFloat(splitSubtraction[0]) - 
        parseFloat(splitSubtraction[1]);

        console.log('corte de string: ',
        matchSubtraction,
        splitSubtraction,
        resultSubtraction
        );
    
        expSubtraction = 
        expSubtraction.replace(matchSubtraction, resultSubtraction);
        console.log('expressão atual: ',expSubtraction,'\n');

        let testeLog = expSubtraction.match(/[0-9]{1,9}\-/g)
        if(testeLog!== null){
            expSubtraction = subtraction(expSubtraction);
            // FUNÇÃO RECURSIVA !!!!!!!!
        };
        return expSubtraction;
    };

    if(currentExpression.includes('-')) {
        currentExpression = subtraction(currentExpression);
    };
  
    return currentExpression;
}


// const resultado = resolverExpressaoNumeric('8+2*3/2');
const resultado1 = resolverExpressaoNumeric('3+3*3-6');
const resultado2 = resolverExpressaoNumeric('43+33*3-6/2');
const resultado3 = resolverExpressaoNumeric('45+5+3-4-8');
const resultado4 = resolverExpressaoNumeric('695+58+300-4-8*5');
// console.log('8+2*3/2 é igual a: ',resultado, '\n');
console.log('43+3*3-6 é igual a: ',resultado1, '\n');
console.log('43+33*3-6/2 é igual a: ',resultado2, '\n');
console.log('45+5+3-4-8 é igual a: ',resultado3, '\n');
console.log('695+58+300-4-8*5 é igual a: ',resultado4, '\n');

// const string1 = '43+3*3-6'
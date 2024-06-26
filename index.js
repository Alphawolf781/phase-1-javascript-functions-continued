// code your solution here
 describe("index.js", () => {
});

function saturdayFun (end="roller-skate"){
    return `This Saturday, I want to ${end}!`
}
   function overridensaturdayFun(newend="bathe my dog"){
    return saturdayFun(newend);
   }
overridensaturdayFun();

function mondayWork(phrase="go to the office"){
    return `This Monday, I will ${phrase}.`
}
mondayWork()

function wrapAdjective(symbol='*'){
   return function(value="a dedicated programmer"){
 return `You are ${symbol}${value}${symbol}!`
   }
}
/***
 * Any类型
 * 在 TypeScript 中，任何类型都可以被归为 any 类型，也叫顶级类型或全局超级类型
 * ***/
// 声明为any类型的话，你可以像JS那样为变量赋上任何合法的值
let anyValue: any = 123;
console.log(anyValue);
anyValue = 'haha';
console.log(anyValue);
anyValue = true;
console.log(anyValue);
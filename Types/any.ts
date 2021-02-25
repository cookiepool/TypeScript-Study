/***
 * Any类型
 * 在 TypeScript 中，任何类型都可以被归为 any 类型，也叫顶级类型或全局超级类型
 * ***/
// 声明为any类型的话，你可以像JS那样为变量赋上任何合法的值
let anyValue: any = 123;
console.log(anyValue); // 123
anyValue = true;
console.log(anyValue); // true
anyValue = 'haha';
console.log(anyValue); // haha
let anyValue1 = anyValue;
console.log(anyValue1); // true
console.log(anyValue1.length); // 4

/***
 * Unknown类型
 * 如果我们使用 any 类型，就无法使用 TypeScript 提供的大量的保护机制。为了解决 any 带来的问题，TypeScript 3.0 引入了 unknown 类型。
 * Unknown类型跟Any区别在于，你可以给Unknown类型赋任何合法的值，但是你不能将Unknown类型的值赋给其他指定了类型的变量，同时也不能
 * 对Unknown类型做任何操作，如下
 * ***/
let value: unknown = 'hello';
let value1: any = value;
let value2: string = value; // 不能将类型“unknown”分配给类型“number”
console.log(value.length); // 类型“unknown”上不存在属性“length”

/***
 * Tuple类型
 * 元组，在数组里面可以指定不同类型的数据，但是是有限的，你指定了几个类型，就必须初始化几个
 * ***/
let tupleType1: [string, number, boolean];
tupleType1 = ['haha', 123, false];

let tupleType2: [string, number, boolean];
// tupleType2 = ['lala', 100]; // 不能将类型“[string, number]”分配给类型“[string, number, boolean]”。源具有 2 个元素，但目标需要 3 个。
tupleType2 = [200, 200, true]; // 不能将类型“number”分配给类型“string”。

/***
 * Void类型
 * Void类型一般是在函数五返回值时使用，声明一个 void 类型的变量没有什么作用，因为在严格模式下，它的值只能为 undefined；
 * ***/
function test(): void {
  console.log('hello, ts');
}

let valueVoid: void = 100; // 不能将类型“number”分配给类型“void”
let valueVoid1: void = undefined;

/***
 * Null与Undefined类型
 * ***/
let nullValue: null = null;
let undefinedValue: undefined = undefined;

let objectValue: Object = {};
objectValue.name = 'lala';
console.log(objectValue.name);
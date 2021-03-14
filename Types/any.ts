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
let valueVoid1: void = undefined; // 可以将undefined赋值给void类型

/***
 * Null与Undefined类型
 * ***/
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
let testNum: number = undefined;
let testStr: string = null;


/***
 * Never类型
 * never 类型表示的是那些永不存在的值的类型。 例如，never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
 * ***/
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
// 在 TypeScript 中，可以利用 never 类型的特性来实现全面性检查
// 链接：https://s3.ax1x.com/2021/03/01/6i4Mss.png
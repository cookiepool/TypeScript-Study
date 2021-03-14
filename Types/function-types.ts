// 一般的声明方式（函数声明）
function getName(firstName: string, lastName: string): string {
  return firstName + " " + lastName;
};

console.log(getName('lee', 'haha'));

// 函数表达式
// let getNameVar = function(firstName: string, lastName: string): string {
//   return firstName + " " + lastName;
// };

// console.log(getNameVar('lee', 'haha'));

// 给表达式左边的getNameVar增加类型说明
let getNameVar: (firstName: string, lastName: string) => string = function (firstName: string, lastName: string) {
  return firstName + " " + lastName;
};

console.log(getNameVar('lee', 'haha'));
// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// 在 ES6 中，=> 叫做箭头函数

// 剩余参数，剩余参数本来就是个数组，所以在ts里面可以把它定义为数组
function getMoreNum(one: number, ...restValue: any[]) {
  console.log(restValue);
};

getMoreNum(1, 2, 'da', false);

// 函数重载，重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 这样当你输入的数字时，反转后输出的还是数字，字符串反转后还是字符串。

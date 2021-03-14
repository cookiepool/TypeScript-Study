/***
 * 联合类型
 * 联合类型（Union Types）表示取值可以为多种类型中的一种
 * ***/

let testUnion: string | number = 233; // 允许testUnion为string或number

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
function test(valueTest: string | number): number {
  return valueTest.length;
}
// length 不是 string 和 number 的共有属性，所以会报错

function testOne(valueTest: string | number): string {
  return valueTest.toString();
}
// 共有属性调用没有问题
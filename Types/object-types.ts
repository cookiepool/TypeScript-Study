/***
 * 在 TypeScript中使用接口interface来声明定义对象
 * 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
 * TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。
 * ***/

interface Person {
  name: string;
  age: number;
  gender: string;
}

let lala: Person = {
  name: 'lala',
  age: 23,
  gender: 'female'
}

console.log(lala.name);

// 定义了一个接口过后，在声明对象时里面对应得属性不得多也不得少，必须一一对应


// 有时我们希望不要完全匹配一个形状，那么可以用可选属性：
interface PersonOne {
  name: string;
  age: number;
  gender: string;
  height?: number; // 加个问号表示这个属性可填也可不填
}

// 如果我们想要接口可声明任意属性的话，可以这样做
interface PersonTwo {
  name: string;
  age: number; // 类型“number”的属性“age”不能赋给字符串索引类型“string”
  [propName: string]: string;
}
// 你会发现编辑器直接抛出错误了，那是因为一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集，上面age是number，它不是string的子类型

// 可以为任意属性声明联合类型来解决上面的问题
interface PersonThree {
  name: string;
  age: number;
  [propName: string]: string | number;
}

// 可以为属性设置只读，这样就必须在声明的时候就必须赋值，并且不能再重新赋值
interface PersonFour {
  name: string;
  age: number;
  readonly id: number;
};

let personone: PersonFour = {
  name: 'haha',
  age: 24,
  id: 55
}

personone.name = 'hahaha';
personone.id = 35; // 无法分配到 "id" ，因为它是只读属性。
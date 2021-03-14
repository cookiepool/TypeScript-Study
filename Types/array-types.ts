// 声明数组方法一
let arrayTest: number[] = [1, 2, 4];
console.log(arrayTest);

let arrayTest1: string[] = ['1', '2', '3'];
console.log(arrayTest1);

// 使用数组泛型来表示数组
let arrayTest2: Array<number> = [233, 23232];
console.log(arrayTest2);

// 使用接口来定义数组，一般我们不这么做，只有定义类数组类型时用接口
interface StringArray {
  // 表示索引是number类型的字符串数组
  [index: number]: string
};

let stringArray: StringArray = ['12', '34'];
console.log(stringArray);

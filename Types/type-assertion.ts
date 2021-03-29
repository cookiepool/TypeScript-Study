/*****
 * 类型断言
 * ****/
// 类型断言，语法为 `值 as 类型`，另一种语法 `<类型>值` 不推荐使用
// 将一个联合类型断言为其中一个类型
interface Cat {
  name: string;
  run: Function; // 函数类型
}

interface Fish {
  name: string;
  swim(): void; // 函数类型
}

function isFish(animal: Cat | Fish) {
  if(typeof (animal as Fish).swim === 'function') {
    console.log(true);
  }
}
let a: Fish = {
  name: 'miaomiao',
  swim: function() {
    console.log('lalal');
  }
};
isFish(a);

/****
 * 将任何一个类型断言为 any
 * ****/
// 在ts中，window.foo = 1;这种写法会报错
// 可以使用断言，但这种写法极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any
(window as any).foo = 100;

/***
 * 将any类型断言为具体的类型
 * ***/
 function getCacheData(key: string): any {
  return (window as any).cache[key];
}

interface Catt {
  name: string;
  run(): void;
}

const tom = getCacheData('tom') as Catt;
tom.run();


// https://github.com/xcatliu/typescript-tutorial/blob/master/basics/type-assertion.md
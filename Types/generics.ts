// 泛型函数
function createArray<T>(length: number, value: T): Array<T> {
  let result: Array<T> = [];
  for(let i = 0; i <= length; i++) {
    result.push(value);
  }

  return result;
}

console.log(createArray(4, 'generics'));

function loggingLength<T>(arr: T[]): T[] {
  console.log(arr.length);
  return arr;
}

loggingLength(['lala', 34]);

// 赋值
let copyFn: <T>(arr: T[]) => T[] = loggingLength;

copyFn(['haha', 35]);
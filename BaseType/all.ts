// 基础数据
let a: number = 100;
let b: string = 'Hello TypeScript';
let c: boolean = true;
const d: null = null;
const e: undefined = undefined;

console.log(a, b, c, d, e);

// 数组
let f: number[] = [12, 13, 14];
let g: string[] = ['one', 'two', 'three'];
let h: boolean[] = [false, true];
// 泛型数组
let i: Array<number> = [23, 24, 25];

console.log(f, g, h, i);

// 枚举类型
// 数字枚举，这儿默认NORTH是0，后面的值依次加1。
enum Direction {
  NORTH,
  EAST,
  SOUTH,
  WEST
};
let dirValue: Direction = Direction.EAST;
// 我们还可以给枚举默认值，比如下面的EAST为6，那后面的SOUTH在6这个基础上加1，之后的几个值依次类推。同时NORTH的值还是0
enum DirectionDefault {
  NORTH,
  EAST = 6,
  SOUTH,
  WEST
};
let dirDef: Direction = Direction.EAST;
console.log(dirValue);

// 字符串枚举




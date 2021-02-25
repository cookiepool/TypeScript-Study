/***
 * 基础数据
 * ***/
let a: number = 100;
let b: string = 'Hello TypeScript';
let c: boolean = true;
const d: null = null;
const e: undefined = undefined;

console.log(a, b, c, d, e);

/***
 * 数组
 * ***/
let f: number[] = [12, 13, 14];
let g: string[] = ['one', 'two', 'three'];
let h: boolean[] = [false, true];

/***
 * 泛型数组
 * ***/
let i: Array<number> = [23, 24, 25];

console.log(f, g, h, i);

/***
 * 枚举类型
 * ***/
// ---数字枚举---，这儿默认NORTH是0，后面的值依次加1。
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
// 支持 从成员值到成员名称 的反向映射
let dirDefOp: String = Direction[0];

console.log(dirValue); // 1
console.log(dirDefOp); // NORTH

// ---字符串枚举---，字符串枚举的每个属性必须指定值，否则你取到的值是undefined，而不是像数字枚举那样可以自己生成默认值
enum Gender {
  male = 'nan',
  female = 'nv',
  other = 'qita'
};

let genderDef: Gender = Gender.male;
console.log(genderDef);

// ---常量枚举---，常量枚举会使用内联语法，不会为枚举类型编译生成任何 JavaScript
const enum ListData {
  One,
  Two = 5,
  Three
};

let listItem: ListData = ListData.Two;
console.log(listItem);

// ---异构枚举---，异构枚举的成员值是数字和字符串的混合
enum MixData {
  A,
  B = 23,
  C = 'Hello'
}
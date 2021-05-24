declare const jQuery1: (selector: string) => any;
declare function jQuery(selector: string): any;

// 定义类
declare class Animal {
  name: string;
  constructor(name: string);
  sayHi(): string;
}
let isDone: boolean = true;

let age: number = 12;

let u: undefined = undefined;

let n: null = null;

let arrOfNumbers: number[] = [1, 2, 3];

// 元祖
let user: [string, number] = ['1', 2];

// interface接口
// ? 可选属性 readonly 只读 不能修改
interface Person {
  readonly id: number;
  name: string;
  age?: number;
}

let viking: Person = {
  id: 11,
  name: 'sss',
};

function add(x: number, y: number): number {
  return x + y;
}

let res = add(2, 34);

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  run() {
    return `${this.name} running`;
  }

  eat() {
    return `吃好喝好`;
  }
}

// extends 继承 super关键字重写方法
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  eat() {
    return `吃鱼` + super.eat();
  }
}

let dog = new Animal('旺财');

/* 
  枚举
  自增长
 */

 enum Direction {
   first,
   two,
   three
 }

 console.log(Direction.first); // 0
 console.log(Direction[1]); // two
 

/* 
  *泛型
*/

function echo<T>(arg: T): T {
  return arg
} 

const res1 = echo(123)


function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const res2 = swap([111, '2222'])
console.log(res2[0]);


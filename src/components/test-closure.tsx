import { useState, useEffect } from "react";

const test = () => {
  let num = 0;
  const effect = () => {
    num += 1;
    const message = `现在的num值:${num}`;
    return function unmount() {
      console.log(message);
    };
  };
  return effect;
};
// 执行test，返回effect函数
const add = test();
// 执行effect函数，返回引用了message1的unmount函数
const unmount = add();
// 再一次执行effect函数，返回引用了message2的unmount函数
add();
// 再一次执行effect函数，返回引用了message3的unmount函数
add();
// 再一次执行effect函数，返回引用了message4的unmount函数
add();
// 再一次执行effect函数，返回引用了message5的unmount函数
add();
unmount(); // 在这里会打印什么呢？按照直觉似乎应该打印3,实际上打印了1

// react hook 与 闭包，hook 与闭包经典的坑
export const Test = () => {
  const [num, setNum] = useState(0);

  const add = () => setNum(num + 1);

  useEffect(() => {
    return () => {
      console.log(num);
    };
  }, [num]);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("num in setInterval", num);
    }, 1000);
    return () => clearInterval(id);
  }, [num]);

  return (
    <div>
      <button onClick={add}>add</button>
      <p>number: {num}</p>
    </div>
  );
};
